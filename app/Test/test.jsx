"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import couple from "@/public/Images/Couple2.jpg";
import {
  FaHome,
  FaUsers,
  FaPlusCircle,
  FaBook,
  FaEnvelope,
} from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll event detect করার জন্য useEffect
  useEffect(() => {
    const handleScroll = () => {
      // যদি 10px এর বেশি স্ক্রল করা হয়, তাহলে `scrolled` state-কে true করা হবে
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    // Component unmount হলে event listener মুছে ফেলা হবে
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // নেভিগেশন লিংকের জন্য একটি array তৈরি করা হয়েছে
  const navLinks = [
    { href: "/", text: "হোম", icon: <FaHome /> },
    { href: "/all_biodata", text: "সমস্ত বায়োডাটা", icon: <FaUsers /> },
    { href: "/guide", text: "নির্দেশনা", icon: <FaBook /> },
    { href: "/contact", text: "যোগাযোগ", icon: <FaEnvelope /> },
  ];

  return (
    <nav
      className={`fixed top-12 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled
          ? "bg-white/70 backdrop-blur-lg shadow-lg text-gray-800"
          : "bg-transparent text-white"
      }`}
      style={
        !scrolled
          ? {
              backgroundImage: `linear-gradient(to right, rgba(168, 85, 247, 0.9), rgba(236, 72, 153, 0.9), rgba(244, 63, 94, 0.9)), url(/Images/NavBG.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderBottomLeftRadius: "1.5rem",
              borderBottomRightRadius: "1.5rem",
            }
          : {
              borderBottomLeftRadius: "1.5rem",
              borderBottomRightRadius: "1.5rem",
            }
      }
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0" title="দ্বীনদার পাত্র/পাত্রীর সন্ধান">
            <Link href="/" className="text-2xl rounded-full">
              <Image
                src={couple}
                width={75}
                height={75}
                alt="Couple Logo"
                className="rounded-full border-2 border-white/80 shadow-md transition-transform duration-300 hover:scale-110 hover:shadow-xl"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative flex items-center text-lg font-medium px-4 py-2 rounded-full transition-colors duration-300 ${
                  scrolled ? "hover:text-pink-500" : "hover:bg-white/10"
                }`}
              >
                {link.icon}
                <span className="ml-2">{link.text}</span>
                {/* Animated underline */}
                <span
                  className={`absolute bottom-1 left-0 w-full h-[2px] ${
                    scrolled ? "bg-pink-500" : "bg-white"
                  } transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left`}
                ></span>
              </Link>
            ))}
            {/* Call to Action Button */}
            <Link
              href="/create_new_biodata"
              className={`flex items-center text-lg font-semibold ml-4 px-5 py-2.5 rounded-full transition-all duration-300 ease-in-out shadow-md hover:shadow-lg transform hover:-translate-y-0.5 ${
                scrolled
                  ? "bg-pink-500 text-white hover:bg-pink-600"
                  : "bg-white/90 text-pink-500 hover:bg-white"
              }`}
            >
              <FaPlusCircle className="mr-2" />
              <span>বায়োডাটা তৈরি</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-full transition-all duration-300 ${
                scrolled
                  ? "text-gray-800 hover:bg-gray-200"
                  : "text-white hover:bg-white/20"
              }`}
              aria-label="Toggle menu"
            >
              <svg
                className="w-8 h-8"
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

        {/* Mobile Menu (Animated) */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div
            className={`flex flex-col pt-2 pb-4 space-y-2 rounded-b-2xl ${
              scrolled ? "bg-white/80" : "bg-black/20"
            }`}
          >
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center text-lg px-6 py-3 transition-all duration-300 ease-in-out transform ${
                  isOpen
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-5 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <span
                  className={`mr-4 ${
                    scrolled ? "text-pink-500" : "text-white"
                  }`}
                >
                  {link.icon}
                </span>
                <span>{link.text}</span>
              </Link>
            ))}
            <div className="px-4 pt-2">
              <Link
                href="/create_new_biodata"
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-center text-lg font-semibold w-full px-5 py-3 rounded-full transition-all duration-300 ease-in-out shadow-md transform ${
                  scrolled ? "bg-pink-500 text-white" : "bg-white text-pink-500"
                }`}
                style={{ transitionDelay: `${navLinks.length * 100}ms` }}
              >
                <FaPlusCircle className="mr-2" />
                <span>বায়োডাটা তৈরি করুন</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
