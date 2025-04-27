"use client"

import { FileText } from 'lucide-react'
import { useState } from 'react'
import { getToken } from '../utils/authUtils'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function UploadPolicyCard() {
    const [policy, setPolicy] = useState(null)
    const [summaryName, setSummaryName] = useState('')
    const token = getToken();
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!policy) return alert('Please select a file.');
    
        const formData = new FormData();
        formData.append('policy', policy);
    
        try {
          const res = await fetch('https://know-your-plan.onrender.com/summarize/dummy-make-summary', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`, // 👈 only add this
              },            
            body: formData,
          });

          if (!res.ok) {
            const text = await res.text();
            console.error('Server responded with error:', res.status, text);
            alert(`Server error: ${res.status}`);
            return;
          }
    
          const data = await res.json();
          console.log(data);
          alert('File uploaded successfully!');
        } catch (error) {
          console.error(error);
          alert('Something went wrong.');
        }
      };


    const moveToSummary = () => {
      router.push('/summary');
    };

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
        
        <form onSubmit={moveToSummary}>
            {!policy && (
              <label className="px-8 py-4 text-xl font-medium text-white bg-orange-400 rounded-lg hover:bg-orange-500 transition-colors cursor-pointer">
                Upload Document
                <input 
                  type="file" 
                  accept="application/pdf" 
                  onChange={(e) => {
                    const selectedFile = e.target.files[0];
                    if (selectedFile) {
                      setPolicy(selectedFile);
                      setSummaryName(selectedFile.name); // 👈 set summary name here
                    }
                  }}                  
                  className="hidden"
                />
              </label>
            )}
            
            {policy && (
              <>
                <div className="mt-4 text-gray-700 text-lg flex items-center">
                  Selected File: <span className="font-semibold">{policy.name}</span>
                  <button 
                    type="button"
                    className="ml-2 text-gray-600 hover:text-gray-800 focus:outline-none transition-colors"
                    onClick={() => setPolicy(null)}
                  >
                    &times;
                  </button>
                </div>
                <Link 
                  href="/summary"
                  className="mt-6 inline-block px-8 py-3 bg-[#2f5bea] text-white rounded-lg hover:bg-blue-700 transition-colors"
                  style={{ padding: '0.75rem 2rem', display: 'inline-block', textAlign: 'center' }}
                >
                  Submit
                </Link>
              </>
            )}
            
            
        </form>
        
      </div>
    </div>
  )
}
