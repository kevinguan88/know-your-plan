import Link from "next/link";

export default function Navbar() {
  const navbarStyles = {
    backgroundColor: "#f5f8fa",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)", // Custom shadow similar to the second header
  };

  return (
    <nav style={navbarStyles} className="w-full">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-[#2f5bea] text-2xl font-bold">
          KnowYourPlan
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/dashboard" className="text-[#2f5bea] font-medium">
            Login
          </Link>
          <Link href="/signup" className="bg-[#2f5bea] text-[#ffffff] px-6 py-2 rounded-lg font-medium">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}
