"use client"

import { FileText } from 'lucide-react'

export default function UploadPolicyCard() {
  return (
    <div className="w-full max-w-3xl p-12 mx-auto bg-white rounded-3xl shadow-lg">
      <div className="flex flex-col items-center text-center">
        <div className="mb-8">
          <FileText className="w-20 h-20 text-gray-800" strokeWidth={1.5} />
        </div>

        <h1 className="mb-6 text-5xl font-bold text-[#2f5bea]">Upload Your Policy</h1>

        <p className="mb-12 text-xl text-gray-800 max-w-2xl">
          Upload your insurance document (PDF or DOC) to generate your summary!
        </p>

        <button className="px-8 py-4 text-xl font-medium text-white bg-orange-400 rounded-lg hover:bg-orange-500 transition-colors">
          Upload Document
        </button>
      </div>
    </div>
  )
}
