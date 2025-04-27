"use client"

import Link from "next/link"
import { Download } from "lucide-react"
import { useEffect, useState } from "react"

export default function Summary() {

    const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500) // 1.5 seconds loading animation

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-[#f5f8fa] flex flex-col">
            {/* Main Content */}
      <main className="flex-1 py-8 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Title with download icon */}
          <h1 className="text-[#2f5bea] text-3xl font-bold text-center mb-6 flex items-center justify-center gap-2">
            Policy Summary Overview
            <Download className="h-6 w-6" />
          </h1>

          {/* Summary Card */}
          <div className="bg-white rounded-3xl p-8 shadow-lg mb-6">
            {/* Summary Header */}
            <div className="mb-6">
              <h2 className="flex items-start gap-2 text-[#2f5bea] text-xl font-bold mb-1">
                <span className="text-[#000000]">📄</span> KnowYourPlan Generated Summary for Cigna Dental 1000
              </h2>
              <p className="text-gray-600 italic text-sm">
                (Translated to plain English, more detailed, and matched to your uploaded document)
              </p>
            </div>

            {/* Coverage Summary */}
            <div className="mb-6">
              <h3 className="flex items-start gap-2 text-[#000000] text-lg font-bold mb-3">
                <span>📄</span> Coverage Summary
              </h3>
              <div
                className="h-[300px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[#c5d1e5] scrollbar-track-[#f1f1f1] hover:scrollbar-thumb-[#a3b8db]"
                style={{
                  scrollbarWidth: "thin",
                  scrollbarColor: "#c5d1e5 #f1f1f1",
                }}
              >
                {isLoading ? (
                  // Loading skeleton
                  <div className="animate-pulse">
                    {[...Array(5)].map((_, index) => (
                      <div key={index} className="mb-6 pl-6">
                        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                        <div className="pl-6 mt-2">
                          <div className="h-3 bg-gray-200 rounded w-full mb-1"></div>
                          <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  // Actual content with fade-in effect
                  <ul className="space-y-4 pl-6 animate-fadeIn">
                    <li className="list-disc">
                      <p className="font-medium">Routine Cleanings, Exams, and X-rays: Free if you stay in-network.</p>
                      <p className="pl-6 text-gray-700 flex items-start gap-1 mt-1">
                        <span>📖</span> Direct quote: "Routine preventive and diagnostic services are covered at 100%
                        when visiting a DPPO Advantage network dentist." (Page 3)
                      </p>
                    </li>
                    <li className="list-disc">
                      <p className="font-medium">Fillings and Basic Repairs: You pay 20% after $50 deductible.</p>
                      <p className="pl-6 text-gray-700 flex items-start gap-1 mt-1">
                        <span>📖</span> Direct quote: "20% after deductible for Basic Restorative Services." (Page 2)
                      </p>
                    </li>
                    <li className="list-disc">
                      <p className="font-medium">
                        Major Dental Work: Insurance pays 50% after deductible; you pay the rest.
                      </p>
                      <p className="pl-6 text-gray-700 flex items-start gap-1 mt-1">
                        <span>📖</span> Direct quote: "50% after deductible for Major Restorative Services." (Page 2)
                      </p>
                    </li>
                    <li className="list-disc">
                      <p className="font-medium">Annual Maximum: Insurance only pays up to $1,000 per year.</p>
                      <p className="pl-6 text-gray-700 flex items-start gap-1 mt-1">
                        <span>📖</span> Direct quote: "Calendar Year Maximum: $1,000." (Page 2)
                      </p>
                    </li>
                    <li className="list-disc">
                      <p className="font-medium">Braces and Orthodontics: Not covered at all.</p>
                    </li>
                    {/* Adding more items to demonstrate scrolling */}
                    <li className="list-disc">
                      <p className="font-medium">
                        Waiting Period: None for preventive services, 6 months for basic, 12 months for major.
                      </p>
                      <p className="pl-6 text-gray-700 flex items-start gap-1 mt-1">
                        <span>📖</span> Direct quote: "No waiting period for Preventive Services. 6-month waiting period
                        for Basic Services. 12-month waiting period for Major Services." (Page 4)
                      </p>
                    </li>
                    <li className="list-disc">
                      <p className="font-medium">
                        Out-of-Network Coverage: Available but at lower reimbursement rates.
                      </p>
                      <p className="pl-6 text-gray-700 flex items-start gap-1 mt-1">
                        <span>📖</span> Direct quote: "Out-of-network benefits are reimbursed at the Maximum Allowable
                        Charge." (Page 3)
                      </p>
                    </li>
                    <li className="list-disc">
                      <p className="font-medium">
                        Pre-Existing Conditions: No exclusions for pre-existing dental conditions.
                      </p>
                    </li>
                    <li className="list-disc">
                      <p className="font-medium">Cosmetic Procedures: Not covered unless medically necessary.</p>
                      <p className="pl-6 text-gray-700 flex items-start gap-1 mt-1">
                        <span>📖</span> Direct quote: "Cosmetic procedures are not covered unless deemed medically
                        necessary." (Page 5)
                      </p>
                    </li>
                  </ul>
                )}
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <button className="bg-[#ff8c38] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#ff8c38]/90 transition-colors">
                Upload Another Document
              </button>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="text-center text-sm text-gray-600 mb-4">
            <p className="flex items-start justify-center">
              <span className="text-yellow-500 mr-1">⚠</span>
              <span>
                Disclaimer: This summary is for informational purposes only and is not a substitute for the official
                insurance policy documents. While we strive for accuracy, KnowYourPlan cannot guarantee complete
                accuracy or completeness. Always refer to your original insurance policy for official coverage details
                and consult with your insurance provider if you have any questions.
              </span>
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
