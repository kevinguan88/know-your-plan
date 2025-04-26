import Link from 'next/link';

export default function TosFooter() {
    return (
        <div className="w-full border-t border-gray-200 bg-white py-4">
            <div className="container mx-auto text-center text-sm text-gray-600">
              <p>
                © 2025 KnowYourPlan. All rights reserved. |{" "}
                <Link href="/privacy-policy" className="text-blue-600 hover:underline">
                  Privacy Policy
                </Link>{" "}
                |{" "}
                <Link href="/terms-of-use" className="text-blue-600 hover:underline">
                  Terms of Use
                </Link>
              </p>
            </div>
      </div>
    )
}