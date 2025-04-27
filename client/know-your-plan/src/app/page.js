"use client"

import Link from "next/link"
import Cookie from 'js-cookie';
import { useRouter } from 'next/navigation'
import { useEffect } from 'react';
import { getToken } from "./utils/authUtils";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Check if the user is logged in by looking for the token in cookies
    const token = getToken();
    if (token) {
      // If token exists, redirect the user to the dashboard or home page
      router.push('/dashboard'); // Change this to your desired page
    }
  }, [router]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#BBDEFB] py-16">
        <div className="container mx-auto px-4 flex items-center justify-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-[#002c5e] mb-4">Plans as Clear as You Deserve</h1>
            <p className="text-lg text-[#444444] mb-6">
              Welcome to KnowYourPlan — making insurance simple, clear,
              <br />
              and accessible for everyone.
            </p>
            <p className="text-[#444444] italic mb-8">
              A large nationally representative survey found that 50% of adults aren&apos;t
              <br />
              confident using insurance, and only 16% can calculate our of pocket costs -
              <Link href="#" className="text-[#444444] underline">
                pmc
              </Link>
            </p>
          </div>
          <Link
            href="/upload"
            className="bg-[#ff8c38] hover:bg-[#f07b20] text-white px-8 py-4 rounded-md text-xl font-medium"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* First Time Here Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#002c5e] mb-4">First Time Here?</h2>
          <p className="text-[#444444] mb-12 max-w-2xl mx-auto">
            Discover how we can help make insurance easier for you:
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-[#2f5bea] mb-4">For First-Time Users</h3>
              <p className="text-[#444444]">
                Got handed an insurance plan you don&apos;t understand? Upload it now and we&apos;ll summarize it in
                plain language
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-[#2f5bea] mb-4">For You and Loved Ones</h3>
              <p className="text-[#444444]">
                Understand complicated insurance paperwork and spot hidden fees or confusing clauses to better support
                your loved ones.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
