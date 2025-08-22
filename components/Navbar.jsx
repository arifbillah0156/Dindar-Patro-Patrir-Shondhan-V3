// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import couple from "@/public/Images/Couple2.jpg";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div>
//       <div className="w-full bg-gray-50 text-gray-800">
//         <nav
//           className="bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 text-white  py-4 rounded-b-3xl h-max w-[100%] bg-cover bg-center"
//           style={{
//             backgroundImage: `url(/Images/NavBG.jpg)`,
//           }}
//         >
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="flex justify-between items-center h-16">
//               {/* Logo */}
//               <div
//                 className="flex flex-shrink-0 "
//                 title="দ্বীনদার পাত্র/পাত্রীর সন্ধান"
//               >
//                 <Link href="/" className="text-2xl box rounded-full">
//                   <Image
//                     src={couple}
//                     width={75}
//                     alt="Couple"
//                     className="rounded-full"
//                   />
//                 </Link>
//               </div>

//               {/* Desktop Menu */}
//               <div className="hidden md:flex">
//                 <Link
//                   href="/"
//                   className="text-xl hover:underline mx-2 px-3 py-2  rounded-full  focus:underline underline underline-offset-4 "
//                 >
//                   হোম
//                 </Link>
//                 <Link
//                   href="/all_biodata"
//                   className="text-xl hover:underline mx-2 px-3 py-2  rounded-full focus:underline underline underline-offset-4 "
//                 >
//                   সমস্ত বায়োডাটা
//                 </Link>
//                 <Link
//                   href="/create_new_biodata"
//                   className="text-xl hover:underline mx-2 px-3 py-2  rounded-full focus:underline underline underline-offset-4 "
//                 >
//                   + বায়োডাটা
//                 </Link>
//                 <Link
//                   href="/guide"
//                   className="text-xl hover:underline mx-2 px-3 py-2  rounded-full focus:underline underline underline-offset-4 "
//                 >
//                   নির্দেশনা
//                 </Link>
//                 <Link
//                   href="/contact"
//                   className="text-xl hover:underline mx-2 px-3 py-2  rounded-full focus:underline underline underline-offset-4 "
//                 >
//                   যোগাযোগ
//                 </Link>
//               </div>

//               {/* Mobile Menu Button */}
//               <div className="md:hidden flex items-center mr-4 ">
//                 <button
//                   onClick={() => setIsOpen(!isOpen)}
//                   className="text-white focus:outline-none"
//                 >
//                   <svg
//                     className="w-10 h-10"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     {isOpen ? (
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M6 18L18 6M6 6l12 12"
//                       />
//                     ) : (
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M4 6h16M4 12h16m-7 6h7"
//                       />
//                     )}
//                   </svg>
//                 </button>
//               </div>
//             </div>

//             {/* Mobile Menu */}
//             {isOpen && (
//               <div className="md:hidden">
//                 <div className="flex flex-col space-y-4 py-4 ml-5">
//                   <Link
//                     href="/"
//                     onClick={() => setTimeout(() => setIsOpen(!isOpen), 200)}
//                     className="text-xl mt-6  underline underline-offset-4"
//                   >
//                     হোম
//                   </Link>
//                   <Link
//                     href="/all_biodata"
//                     onClick={() => setTimeout(() => setIsOpen(!isOpen), 200)}
//                     className="text-xl   underline underline-offset-4"
//                   >
//                     সমস্ত বায়োডাটা
//                   </Link>
//                   <Link
//                     href="/create_new_biodata"
//                     onClick={() => setTimeout(() => setIsOpen(!isOpen), 200)}
//                     className="text-xl  underline underline-offset-4"
//                   >
//                     + বায়োডাটা
//                   </Link>
//                   <Link
//                     href="/guide"
//                     onClick={() => setTimeout(() => setIsOpen(!isOpen), 200)}
//                     className="text-xl   underline underline-offset-4"
//                   >
//                     নির্দেশনা
//                   </Link>
//                   <Link
//                     href="/contact"
//                     onClick={() => setTimeout(() => setIsOpen(!isOpen), 50)}
//                     className="text-xl   underline underline-offset-4"
//                   >
//                     যোগাযোগ
//                   </Link>
//                 </div>
//               </div>
//             )}
//           </div>
//         </nav>
//       </div>
//     </div>
//   );
// }

"use client";
import { useState } from "react";
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

  return (
    <div>
      <div className="w-full bg-gray-50 text-gray-800">
        <nav
          className="bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 text-white py-4 rounded-b-3xl h-max w-[100%] bg-cover bg-center relative overflow-hidden"
          style={{
            backgroundImage: `url(/Images/NavBG.jpg)`,
          }}
        >
          {/* Overlay for better text readability */}
          {/* <div className="absolute inset-0 bg-black bg-opacity-20"></div> */}

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div
                className="flex flex-shrink-0 transition-transform duration-300 hover:scale-105"
                title="দ্বীনদার পাত্র/পাত্রীর সন্ধান"
              >
                <Link href="/" className="text-2xl box rounded-full">
                  <Image
                    src={couple}
                    width={75}
                    alt="Couple"
                    className="rounded-full border-2 border-white shadow-lg"
                  />
                </Link>
              </div>

              {/* Desktop Menu */}
              <div className="hidden lg:flex items-center space-x-1">
                <Link
                  href="/"
                  className="group flex items-center text-xl mx-2 px-4 py-2 rounded-full transition-all duration-300 hover:bg-white hover:bg-opacity-20 hover:text-white transform hover:-translate-y-0.5"
                >
                  <FaHome className="mr-2 mt-[-4px] text-lg group-hover:scale-110 transition-transform" />
                  <span>হোম</span>
                </Link>
                <Link
                  href="/all_biodata"
                  className="group flex items-center text-xl mx-2 px-4 py-2 rounded-full transition-all duration-300 hover:bg-white hover:bg-opacity-20 hover:text-white transform hover:-translate-y-0.5"
                >
                  <FaUsers className="mr-2 mt-[-4px] text-lg group-hover:scale-110 transition-transform" />
                  <span>সমস্ত বায়োডাটা</span>
                </Link>
                <Link
                  href="/create_new_biodata"
                  className="group flex items-center text-xl mx-2 px-4 py-2 rounded-full transition-all duration-300 hover:bg-white hover:bg-opacity-20 hover:text-white transform hover:-translate-y-0.5"
                >
                  <FaPlusCircle className="mr-2 mt-[-4px] text-lg group-hover:scale-110 transition-transform" />
                  <span>বায়োডাটা তৈরি করুন</span>
                </Link>
                <Link
                  href="/guide"
                  className="group flex items-center text-xl mx-2 px-4 py-2 rounded-full transition-all duration-300 hover:bg-white hover:bg-opacity-20 hover:text-white transform hover:-translate-y-0.5"
                >
                  <FaBook className="mr-2 mt-[-4px] text-lg group-hover:scale-110 transition-transform" />
                  <span>নির্দেশনা</span>
                </Link>
                <Link
                  href="/contact"
                  className="group flex items-center text-xl mx-2 px-4 py-2 rounded-full transition-all duration-300 hover:bg-white hover:bg-opacity-20 hover:text-white transform hover:-translate-y-0.5"
                >
                  <FaEnvelope className="mr-2 mt-[-4px] text-lg group-hover:scale-110 transition-transform" />
                  <span>যোগাযোগ</span>
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <div className="lg:hidden flex items-center mr-4">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-white focus:outline-none p-2 rounded-full hover:bg-white hover:bg-opacity-20 transition-all duration-300"
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

            {/* Mobile Menu */}
            {isOpen && (
              <div className="lg:hidden bg-black bg-opacity-30 backdrop-blur-sm rounded-xl mx-4 mb-4 mt-3">
                <div className="flex flex-col py-4">
                  <Link
                    href="/"
                    onClick={() => setTimeout(() => setIsOpen(!isOpen), 200)}
                    className="flex items-center text-xl px-6 py-3 hover:bg-white hover:bg-opacity-20 transition-all duration-300"
                  >
                    <FaHome className="mr-3 text-white" />
                    <span>হোম</span>
                  </Link>
                  <Link
                    href="/all_biodata"
                    onClick={() => setTimeout(() => setIsOpen(!isOpen), 200)}
                    className="flex items-center text-xl px-6 py-3 hover:bg-white hover:bg-opacity-20 transition-all duration-300"
                  >
                    <FaUsers className="mr-3 text-white" />
                    <span>সমস্ত বায়োডাটা</span>
                  </Link>
                  <Link
                    href="/create_new_biodata"
                    onClick={() => setTimeout(() => setIsOpen(!isOpen), 200)}
                    className="flex items-center text-xl px-6 py-3 hover:bg-white hover:bg-opacity-20 transition-all duration-300"
                  >
                    <FaPlusCircle className="mr-3 text-white" />
                    <span>বায়োডাটা তৈরি করুন</span>
                  </Link>
                  <Link
                    href="/guide"
                    onClick={() => setTimeout(() => setIsOpen(!isOpen), 200)}
                    className="flex items-center text-xl px-6 py-3 hover:bg-white hover:bg-opacity-20 transition-all duration-300"
                  >
                    <FaBook className="mr-3 text-white" />
                    <span>নির্দেশনা</span>
                  </Link>
                  <Link
                    href="/contact"
                    onClick={() => setTimeout(() => setIsOpen(!isOpen), 50)}
                    className="flex items-center text-xl px-6 py-3 hover:bg-white hover:bg-opacity-20 transition-all duration-300"
                  >
                    <FaEnvelope className="mr-3 text-white" />
                    <span>যোগাযোগ</span>
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
