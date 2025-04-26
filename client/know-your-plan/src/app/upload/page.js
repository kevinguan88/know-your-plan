import Link from "next/link"
import UploadPolicyCard from "@/app/components/uploadPolicyCard";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
        <main className="flex-grow bg-[#e6f2ff] py-16 px-4">
            <div className="max-w-3xl mx-auto">
                <UploadPolicyCard />
            </div>
        </main>
    </div>
  )
}