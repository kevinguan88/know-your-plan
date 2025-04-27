"use client"
import Link from "next/link"
import Cookies from "js-cookie"
import { getToken } from "../utils/authUtils"
import { useEffect, useState } from "react"
import { useRouter } from 'next/navigation'


export default function Navbar() {

    const [token, setToken] = useState(null);
    const router = useRouter();

    useEffect(() => {
        // Check token when the component mounts
        const savedToken = Cookies.get("token");
        setToken(savedToken);
    
        // Listen for route changes to recheck token
        const handleRouteChange = () => {
          const updatedToken = Cookies.get("token");
          setToken(updatedToken);
        };
    
        // router.events is not available in "next/navigation" yet directly
        // So workaround: listen to visibility change
        document.addEventListener("visibilitychange", handleRouteChange);
    
        return () => {
          document.removeEventListener("visibilitychange", handleRouteChange);
        };
      }, []);

    useEffect(() => {
        const handleRouteChange = () => {
          const savedToken = getToken();
          setToken(savedToken);
        };
    
        router.events?.on('routeChangeComplete', handleRouteChange);
    
        return () => {
          router.events?.off('routeChangeComplete', handleRouteChange);
        };
      }, [router]);
    


  return (
    <nav className="w-full">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-[#2f5bea] text-2xl font-bold">
          KnowYourPlan
        </Link>

        <div className="flex items-center gap-6">
          {token ? (
            <button
              className="text-[#2f5bea] font-medium"
              onClick={() => {
                Cookies.remove("token")
                setToken(null)
                router.push("/")
              }}
            >
              Log Out
            </button>
          ) : (
            <>
              <Link href="/login" className="text-[#2f5bea] font-medium">
                Login
              </Link>
              <Link href="/signup" className="bg-[#2f5bea] text-[#ffffff] px-6 py-2 rounded-lg font-medium">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

