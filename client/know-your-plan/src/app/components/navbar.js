import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="w-full bg-[#f5f8fa] shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-[#2f5bea] text-2xl font-bold">
          KnowYourPlan
        </Link>
        
        <div className="flex items-center gap-6">
          <Link href="/login" className="text-[#2f5bea] font-medium">
            Login
          </Link>
          <Link href="/signup" className="bg-[#2f5bea] text-[#ffffff] px-6 py-2 rounded-lg font-medium">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  )
}
