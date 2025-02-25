import Link from "next/link";

// components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400  rounded-t-3xl  font-mono mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="">
          <div className="text-center">
            <h1 className="mr-2 text-xl font-mono">
              The website was created by-
            </h1>
            <div className="mt-2">
              <Link
                href="https://www.facebook.com/arifbillah64"
                passHref
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 font-bold px-4 py-2 text-lg rounded-full underline underline-offset-4 decoration-gray-200 text-gray-300 border-x-gray-500"
              >
                Arif Billah
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-600 pt-6 text-center">
          <p className="text-gray-100 text-lg sm:text-xl">
            “দ্বীনদার পাত্র/পাত্রীর সন্ধান”
          </p>
          <p className="text-gray-200 text-lg sm:text-xl">
            Website version - 2.0
          </p>
          <p className="text-gray-400 text-md">
            © 2020-{new Date().getFullYear()}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
