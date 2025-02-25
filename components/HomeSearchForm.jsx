// components/ResponsiveSelectForm.js
"use client";
import { useState } from "react";
import SelectDivision from "./selectDivision";
import SelectMarriedStatus from "./selectMarriedStatus";
import FormLabelTag from "./formLabelTag";
import Link from "next/link";

// হোম - যেখান থেকে ইউজার পাত্র/পাত্রীর সন্ধান করবে
export default function HomeSearchForm() {
  const [selectOption1, setselectOption1] = useState("পাত্র");
  const [selectOption2, setselectOption2] = useState("অবিবাহিত");
  const [selectOption3, setselectOption3] = useState("ঢাকা");

  const handleChange1 = (e) => {
    setselectOption1(e.target.value);
  };
  const handleChange2 = (e) => {
    setselectOption2(e.target.value);
  };
  const handleChange3 = (e) => {
    setselectOption3(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="mt-14 ">
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-6 bg-cover bg-center  border shadow-md rounded-lg space-y-4"
        style={{
          backgroundImage: `url(/Images/HomeTextBG.jpg)`,
        }}
      >
        <div className="text-center text-4xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-0 py-3 font-bold">
          <h1 className="underline decoration-purple-800 underline-offset-[12px] decoration-double mb-3 animatedText">
            “বায়োডাটা খুজুন”
          </h1>
        </div>
        {/* লেবেল - আমি খুজছি */}
        <div>
          <FormLabelTag text="আমি খুজছি:" />
          <select
            id="option1"
            name="option1"
            value={selectOption1}
            onChange={handleChange1}
            className="w-full border border-purple-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 px-2 py-4 text-xl bg-white text-black"
          >
            <option value="পাত্র">পাত্রের বায়োডাটা</option>
            <option value="পাত্রী">পাত্রীর বায়োডাটা</option>
          </select>
        </div>
        <hr />
        {/* লেবেল - বৈবাহিক অবস্থা */}
        <div>
          <FormLabelTag text="বৈবাহিক অবস্থা:" />
          <select
            id="option2"
            name="option2"
            value={selectOption2}
            onChange={handleChange2}
            className="w-full border border-purple-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 px-2 py-4 text-xl  bg-white text-black"
          >
            <SelectMarriedStatus />
          </select>
        </div>
        <hr />
        {/* লেবেল - বিভাগ */}
        <div>
          <FormLabelTag text="বিভাগ" />
          <select
            id="option3"
            name="option3"
            value={selectOption3}
            onChange={handleChange3}
            className="w-full border border-purple-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 px-2 py-4 text-xl  bg-white text-black"
          >
            <SelectDivision />
          </select>
        </div>{" "}
        <hr />
        <div className="flex justify-center">
          <button type="submit" className="mt-6 mb-3">
            <Link
              className="px-16 py-3 text-white text-2xl rounded-lg shadow-lg hover:ring-2 hover:bg-green-600 hover:px-20 hover:underline duration-100 bg-cover bg-center"
              style={{
                backgroundImage: "url(/Images/PlusBioBG.jpg)",
              }}
              href={{
                pathname: "/search_biodata",
                query: {
                  biodata: selectOption1,
                  marriedStatus: selectOption2,
                  division: selectOption3,
                },
              }}
            >
              খুজুন
            </Link>
          </button>
        </div>
      </form>
    </div>
  );
}
