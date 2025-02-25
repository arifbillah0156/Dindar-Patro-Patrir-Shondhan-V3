"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import couple from "@/public/Images/Couple2.jpg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="w-full bg-gray-50 text-gray-800">
        <nav
          className="bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 text-white  py-4 rounded-b-3xl h-max w-[100%] bg-cover bg-center"
          style={{
            backgroundImage: `url(/Images/NavBG.jpg)`,
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div
                className="flex flex-shrink-0 "
                title="দ্বীনদার পাত্র/পাত্রীর সন্ধান"
              >
                <Link href="/" className="text-2xl box rounded-full">
                  <Image
                    src={couple}
                    width={75}
                    alt="Couple"
                    className="rounded-full"
                  />
                </Link>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex">
                <Link
                  href="/"
                  className="text-xl hover:underline mx-2 px-3 py-2  rounded-full  focus:underline underline underline-offset-4 decoration-wavy"
                >
                  হোম
                </Link>
                <Link
                  href="/all_biodata"
                  className="text-xl hover:underline mx-2 px-3 py-2  rounded-full focus:underline underline underline-offset-4 decoration-wavy"
                >
                  সমস্ত বায়োডাটা
                </Link>
                <Link
                  href="/create_new_biodata"
                  className="text-xl hover:underline mx-2 px-3 py-2  rounded-full focus:underline underline underline-offset-4 decoration-wavy"
                >
                  + বায়োডাটা
                </Link>
                <Link
                  href="/guide"
                  className="text-xl hover:underline mx-2 px-3 py-2  rounded-full focus:underline underline underline-offset-4 decoration-wavy"
                >
                  নির্দেশনা
                </Link>
                <Link
                  href="/contact"
                  className="text-xl hover:underline mx-2 px-3 py-2  rounded-full focus:underline underline underline-offset-4 decoration-wavy"
                >
                  যোগাযোগ
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center mr-4 ">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-white focus:outline-none"
                >
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {isOpen ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16m-7 6h7"
                      />
                    )}
                  </svg>
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
              <div className="md:hidden">
                <div className="flex flex-col space-y-4 py-4 ml-5">
                  <Link
                    href="/"
                    onClick={() => setTimeout(() => setIsOpen(!isOpen), 200)}
                    className="text-xl hover:underline mt-6 focus:underline"
                  >
                    হোম
                  </Link>
                  <Link
                    href="/all_biodata"
                    onClick={() => setTimeout(() => setIsOpen(!isOpen), 200)}
                    className="text-xl hover:underline focus:underline"
                  >
                    সমস্ত বায়োডাটা
                  </Link>
                  <Link
                    href="/create_new_biodata"
                    onClick={() => setTimeout(() => setIsOpen(!isOpen), 200)}
                    className="text-xl hover:underline focus:underline"
                  >
                    + বায়োডাটা
                  </Link>
                  <Link
                    href="/guide"
                    onClick={() => setTimeout(() => setIsOpen(!isOpen), 200)}
                    className="text-xl hover:underline focus:underline"
                  >
                    নির্দেশনা
                  </Link>
                  <Link
                    href="/contact"
                    onClick={() => setTimeout(() => setIsOpen(!isOpen), 50)}
                    className="text-xl hover:underline focus:underline"
                  >
                    যোগাযোগ
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}
