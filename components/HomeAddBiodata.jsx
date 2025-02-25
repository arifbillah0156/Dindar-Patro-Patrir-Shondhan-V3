import React from "react";
import Link from "next/link";

// হোম পেজে “বায়োডাটা তৈরি করুন” বাটন/লিংক।

export default function HomeAddBiodata() {
  return (
    <div className="mt-12 flex justify-center">
      <div
        className="text-center w-full sm:w-[max-content] my-5 px-4 hover:underline decoration-gray-200"
        title="ফ্রিতে আপনার বায়োডাটা তৈরি করুন।"
      >
        <Link
          href={"/create_new_biodata"}
          className="text-2xl sm:text-4xl text-white px-12 py-8 rounded-full block bg-cover bg-center"
          style={{
            backgroundImage: `url(/Images/PlusBioBG.jpg)`,
          }}
        >
          + বায়োডাটা তৈরি করুন
        </Link>
      </div>
    </div>
  );
}
