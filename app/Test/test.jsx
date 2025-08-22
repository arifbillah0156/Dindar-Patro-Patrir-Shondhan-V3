// components/ResponsiveSelectForm.js
"use client";
import { useState } from "react";
import Link from "next/link";
import SelectMarriedStatus from "@/components/selectMarriedStatus";
import SelectDivision from "@/components/selectDivision";
import FormLabelTag from "@/components/formLabelTag";

export default function HomeSearchForm() {
  // Combined state object for better organization
  const [searchParams, setSearchParams] = useState({
    biodataType: "পাত্র",
    maritalStatus: "অবিবাহিত",
    division: "ঢাকা",
  });

  // Unified change handler
  const handleParamChange = (param) => (e) => {
    setSearchParams((prev) => ({ ...prev, [param]: e.target.value }));
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    // Additional form processing logic could go here
  };

  // Reusable select field component
  const SelectField = ({ label, param, children }) => (
    <div className="space-y-2">
      <FormLabelTag text={label} />
      <select
        value={searchParams[param]}
        onChange={handleParamChange(param)}
        className="w-full border border-purple-300 rounded-lg shadow-sm 
                   focus:outline-none focus:ring-2 focus:ring-purple-500 
                   focus:border-purple-500 px-4 py-3 text-xl bg-white 
                   text-black transition-all duration-200 hover:border-purple-400"
      >
        {children}
      </select>
    </div>
  );

  return (
    <div className="mt-14 flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 bg-cover bg-center border-2 border-pink-400 
                   shadow-xl rounded-2xl space-y-6 transition-all duration-300 
                   hover:shadow-2xl hover:border-pink-500"
        style={{ backgroundImage: `url(/Images/HomeTextBG.jpg)` }}
      >
        {/* Enhanced Header */}
        <div className="text-center">
          <h1
            className="text-4xl font-bold galada-regular text-transparent 
                         bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                         underline decoration-purple-800 underline-offset-[12px] 
                         decoration-double mb-3 animatedText"
          >
            “বায়োডাটা খুজুন”
          </h1>
          <p className="text-gray-600 mt-2">
            Find your perfect match with ease
          </p>
        </div>

        {/* Form Fields */}
        <div className="space-y-6">
          <SelectField label="আমি খুজছি:" param="biodataType">
            <option value="পাত্র">পাত্রের বায়োডাটা</option>
            <option value="পাত্রী">পাত্রীর বায়োডাটা</option>
          </SelectField>

          <div className="border-t border-purple-200 pt-6">
            <SelectField label="বৈবাহিক অবস্থা:" param="maritalStatus">
              <SelectMarriedStatus />
            </SelectField>
          </div>

          <div className="border-t border-purple-200 pt-6">
            <SelectField label="বিভাগ" param="division">
              <SelectDivision />
            </SelectField>
          </div>
        </div>

        {/* Enhanced Submit Button */}
        <div className="flex justify-center pt-4">
          <Link
            href={{
              pathname: "/search_biodata",
              query: searchParams,
            }}
            className="px-10 py-4 text-white text-xl font-semibold rounded-xl 
                       shadow-lg hover:shadow-xl transition-all duration-300 
                       transform hover:scale-105 bg-gradient-to-r from-purple-600 to-pink-600
                       hover:from-purple-700 hover:to-pink-700 flex items-center"
          >
            <span>খুজুন</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </form>
    </div>
  );
}
