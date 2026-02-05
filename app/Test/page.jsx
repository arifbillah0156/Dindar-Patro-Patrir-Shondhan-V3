"use client";
import { useState, useEffect } from "react";
import { get, ref } from "firebase/database";
import { database } from "@/lib/firebase";
import Image from "next/image";
import MenCardIcon from "@/public/Images/MenCardIcon.png";
import WomenCardIcon from "@/public/Images/WomenCardIcon.png";
import ZoomIcon from "@/public/Images/ZoomIcon.png";
import Link from "next/link";

const BiodataApp = () => {
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [selectedBiodata, setSelectedBiodata] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("সব"); // সব, পাত্র, পাত্রী
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const usersRef = ref(database, "ApprovedBiodata");
    get(usersRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const snapData = Object.entries(snapshot.val());
          setData(snapData.reverse());
          setFilteredData(snapData);
        } else {
          alert("Something wrong! No data found!!");
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (!data) return;

    let result = [...data];

    // Apply gender filter
    if (activeFilter !== "সব") {
      result = result.filter(item => item[1].boyOrGirl === activeFilter);
    }

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter(item => {
        const biodata = item[1];

        // Check if query matches formID
        if (biodata.formID && String(biodata.formID).toLowerCase().includes(query)) {
          return true;
        }
        // Check if query matches name
        if (biodata.name && biodata.name.toLowerCase().includes(query)) {
          return true;
        }
        // Check if query matches occupation
        if (biodata.selectOccupation && biodata.selectOccupation.toLowerCase().includes(query)) {
          return true;
        }

        return false;
      });
    }

    setFilteredData(result);
  }, [data, activeFilter, searchQuery]);

  const openModal = (biodata) => {
    setSelectedBiodata(biodata);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeModal();
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 flex flex-col items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-4xl w-full">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-20 h-20 border-4 border-pink-200 border-t-pink-500 rounded-full animate-spin"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-pink-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-center text-pink-800 mb-6">বিয়ে সম্পর্কিত গুরুত্বপূর্ণ হাদিস</h2>
          <div className="space-y-4 max-h-96 overflow-y-auto p-4 bg-pink-50 rounded-xl">
            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-pink-400">
              <p className="font-bold text-pink-700 mb-2">বিয়ে সুন্নত</p>
              <p className="text-gray-700">রাসূল (সা.) বলেন: "বিয়ে আমার সুন্নত। আর যে আমার সুন্নত থেকে বিমুখ হলো, সে আমার উম্মত নয়।" (বুখারি: 5063, মুসলিম: 1401)</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-pink-400">
              <p className="font-bold text-pink-700 mb-2">বিয়ে যৌবন রক্ষার মাধ্যম</p>
              <p className="text-gray-700">রাসূল (সা.) বলেন: "হে যুব সমাজ! তোমাদের মধ্যে যারা বিয়ের সামর্থ্য রাখে, তারা যেন বিয়ে করে। কারণ এটি দৃষ্টি অবনমিত রাখে এবং যৌন অঙ্গকে সংযত রাখে।" (বুখারি: 5066, মুসলিম: 1400)</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-pink-400">
              <p className="font-bold text-pink-700 mb-2">ধর্ম দেখে বিয়ে করা</p>
              <p className="text-gray-700">রাসূল (সা.) বলেন: "নারীকে বিয়ে করা হয় চারটি কারণে—তাঁর ধন-সম্পদ, বংশ-মর্যাদা, সৌন্দর্য ও ধর্মীয়তা। তবে তুমি ধর্মবতী নারীকে বেছে নাও, তাহলে তুমি কল্যাণ লাভ করবে।" (বুখারি: 5090, মুসলিম: 1466)</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div className="w-full text-center">
        <h1 className="px-2 py-4 text-4xl sm:text-5xl text-purple-800 underline underline-offset-8 decoration-double decoration-purple-800 font-bold mt-6 animatedText galada-regular">
          “সমস্ত বায়োডাটা”
        </h1>
        <p className="text-pink-700 px-4 md:text-xl">
          আপনার কোনো বায়োডাটা পছন্দ হলে যোগাযোগের তথ্য পেতে “বায়োডাটা ID”
          নিয়ে আমাদের ফেসবুক পেইজে মেসেজ দিন।
        </p>
      </div>

      {/* Navigation and Search Section */}
      <div className="max-w-7xl mx-auto px-4 mt-8">
        <div className="bg-white rounded-2xl shadow-xl p-6">
          {/* Navigation Tabs */}
          <div className="flex flex-wrap justify-center mb-6">
            <button
              onClick={() => setActiveFilter("সব")}
              className={`px-6 py-3 font-semibold rounded-lg mx-2 my-1 transition-all duration-300 ${activeFilter === "সব"
                ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg transform scale-105"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              সব
            </button>
            <button
              onClick={() => setActiveFilter("পাত্র")}
              className={`px-6 py-3 font-semibold rounded-lg mx-2 my-1 transition-all duration-300 ${activeFilter === "পাত্র"
                ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg transform scale-105"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              পাত্র
            </button>
            <button
              onClick={() => setActiveFilter("পাত্রী")}
              className={`px-6 py-3 font-semibold rounded-lg mx-2 my-1 transition-all duration-300 ${activeFilter === "পাত্রী"
                ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg transform scale-105"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              পাত্রী
            </button>
          </div>

          {/* Search Section */}
          <div className="flex flex-col md:flex-row gap-4 mb-2">
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder={`ফরম আইডি/নাম/পেশা দিয়ে খুঁজুন...`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border-2 border-pink-300 rounded-xl focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all duration-200 bg-white text-gray-800"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 absolute left-3 top-3.5 text-pink-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Results Count */}
          {/* <div className="mt-4 text-center">
            <p className="text-gray-600">
              {filteredData && data && (
                <span>
                  {filteredData.length} টি ফলাফল {data.length} টির মধ্যে পাওয়া গেছে
                </span>
              )}
            </p>
          </div> */}
        </div>
      </div>



      {/* Biodata Cards Grid */}
      <div className="mx-2 lg:mx-4 px-4 mt-12 pb-12">
        {filteredData && filteredData.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
            {filteredData.map((singleData) => (
              <div key={singleData[0]} className="transform transition-all duration-300 hover:scale-105">
                <BiodataCard
                  dataName={singleData[0]}
                  dataObj={singleData[1]}
                  onViewDetails={() => openModal({ name: singleData[0], data: singleData[1] })}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
            <div className="flex justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">কোনো ফলাফল পাওয়া যায়নি</h3>
            <p className="text-gray-600">অনুগ্রহ করে আপনার অনুসন্ধান শর্ত পরিবর্তন করে আবার চেষ্টা করুন</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveFilter("সব");
              }}
              className="mt-6 px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold rounded-xl hover:from-pink-600 hover:to-rose-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              ফিল্টার মুছুন
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <BiodataModal
          biodata={selectedBiodata}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

// BiodataCard Component
const BiodataCard = ({ dataName, dataObj, onViewDetails }) => {
  const {
    formID,
    boyOrGirl,
    name,
    age,
    division,
    selectOccupation,
    marriedStatus,
    new9
  } = dataObj;

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-pink-100 hover:shadow-2xl transition-all duration-300 group">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-500 to-rose-500 p-4 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full -ml-12 -mb-12"></div>
        <div className="relative z-10 flex justify-center mb-3">
          <div className="bg-white rounded-full p-2 shadow-lg">
            <Image
              src={boyOrGirl === "পাত্র" ? MenCardIcon : WomenCardIcon}
              alt={`${boyOrGirl} Icon`}
              width={60}
              height={60}
              className="rounded-full"
            />
          </div>
        </div>
        <div className="text-center relative z-10">
          <p className="text-sm font-medium mb-1 opacity-90">বায়োডাটা ID</p>
          <p className="text-xl font-bold font-mono bg-white text-pink-600 rounded-lg px-3 py-1 inline-block shadow-md">
            {formID}
          </p>
          {new9 && (
            <p className="text-xs mt-2 bg-yellow-400 text-pink-800 px-3 py-1 rounded-full inline-block font-semibold shadow-md">
              📸 ছবিযুক্ত বায়োডাটা
            </p>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="p-4 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-gray-600 font-medium">নাম:</span>
          <span className="text-gray-900 font-semibold text-right">{name}</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-600 font-medium">বয়স:</span>
          <span className="text-gray-900 text-right">{age} বছর</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-600 font-medium">অবস্থা:</span>
          <span className="text-gray-900 text-right">{marriedStatus}</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-600 font-medium">বিভাগ:</span>
          <span className="text-gray-900 text-right">{division}</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-600 font-medium">পেশা:</span>
          <span className="text-gray-900 text-right">{selectOccupation}</span>
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 pb-4">
        <button
          onClick={onViewDetails}
          className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold py-3 px-4 rounded-xl hover:from-pink-600 hover:to-rose-600 transition-all duration-300 transform hover:scale-105 shadow-lg group-hover:shadow-xl"
        >
          বিস্তারিত দেখুন
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

// BiodataModal Component
const BiodataModal = ({ biodata, onClose }) => {
  const { name, data } = biodata;

  const {
    boyOrGirl,
    formID,
    name: personName,
    age,
    height,
    weight,
    birthDate,
    address,
    permanentAddress,
    growupAddress,
    bodyColor,
    bloodGroup,
    islamiShoriah,
    dinerKaj,
    watchNatok,
    sharirikRog,
    marriedStatus,
    dari,
    porda,
    quran,
    namaj,
    mazhab,
    division,
    sscEducation,
    hscEducation,
    honorsEducation,
    education,
    selectMediumOfEducation,
    selectOccupation,
    occupation,
    monthlyIncome,
    shokh,
    wifePorda,
    wifeEducation,
    wifeJob,
    wifeLeaving,
    marriedGift,
    personalDetails,
    familyDetails,
    partnerDetails,
    fatherOccupation,
    motherOccupation,
    brotherDetails,
    sisterDetails,
    mamaDetails,
    familyDiniPoribesh,
    guardianPermission,
    new9
  } = data;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4"
      onClick={(e) => {
        // Close modal when clicking on the backdrop (outside the modal content)
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className="bg-white rounded-3xl shadow-2xl max-w-5xl w-full max-h-[95vh] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()} // Prevent clicks inside the modal from closing it
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white p-6 relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="bg-white rounded-full p-2 mr-4 shadow-lg">
                <Image
                  src={boyOrGirl === "পাত্র" ? MenCardIcon : WomenCardIcon}
                  alt={`${boyOrGirl} Icon`}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold">বায়োডাটা ID: {formID}</h2>
                <p className="text-lg opacity-90">নাম: {personName}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-all duration-200 hover:scale-110"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* Images Section */}
          {new9 && (
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-pink-800 mb-4 flex items-center">
                <span className="bg-pink-100 p-2 rounded-lg mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </span>
                ছবি
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {new9.map((imgUrl) => (
                  <div key={imgUrl} className="relative group">
                    <div className="aspect-square overflow-hidden rounded-xl shadow-lg">
                      <img
                        src={`/BiodataImages/${formID}/${imgUrl}`}
                        alt="Biodata Image"
                        width={300}
                        height={300}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      {/* <Image
                        src={`/BiodataImages/${formID}/${imgUrl}`}
                        alt="Biodata Image"
                        width={300}
                        height={300}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      /> */}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-all duration-300 rounded-xl flex items-end justify-center pb-4">
                      <Link
                        href={`/BiodataImages/${formID}/${imgUrl}`}
                        passHref
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white p-3 rounded-full shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300"
                      >
                        <Image src={ZoomIcon} alt="Zoom" width={24} height={24} />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Personal Information */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-pink-800 mb-4 flex items-center">
              <span className="bg-pink-100 p-2 rounded-lg mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </span>
              ব্যক্তিগত তথ্য
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InfoCard label="নাম" value={personName} />
              <InfoCard label="বয়স" value={`${age} বছর`} />
              <InfoCard label="জন্ম তারিখ" value={birthDate} />
              <InfoCard label="বৈবাহিক অবস্থা" value={marriedStatus} />
              <InfoCard label="উচ্চতা" value={height} />
              <InfoCard label="ওজন" value={weight} />
              <InfoCard label="গায়ের রং" value={bodyColor} />
              <InfoCard label="রক্তের গ্রুপ" value={bloodGroup} />
            </div>
          </div>

          {/* Education */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-pink-800 mb-4 flex items-center">
              <span className="bg-pink-100 p-2 rounded-lg mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </span>
              শিক্ষাগত যোগ্যতা
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InfoCard label="শিক্ষা মাধ্যম" value={selectMediumOfEducation} />
              <InfoCard label="এসএসসি/সমমান" value={sscEducation} />
              <InfoCard label="এইচএসসি/সমমান" value={hscEducation} />
              <InfoCard label="অনার্স/সমমান" value={honorsEducation} />
              <InfoCard label="অন্যান্য শিক্ষাগত যোগ্যতা" value={education} full />
            </div>
          </div>

          {/* Occupation */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-pink-800 mb-4 flex items-center">
              <span className="bg-pink-100 p-2 rounded-lg mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              পেশাগত তথ্য
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InfoCard label="পেশা" value={selectOccupation} />
              <InfoCard label="মাসিক আয়" value={monthlyIncome} />
              <InfoCard label="পেশার বিবরণ" value={occupation} full />
            </div>
          </div>

          {/* Religious Information */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-pink-800 mb-4 flex items-center">
              <span className="bg-pink-100 p-2 rounded-lg mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              ধর্মীয় তথ্য
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InfoCard label="পর্দা করেন?" value={porda} />
              <InfoCard label="কোরআন তেলাওয়াত করেন?" value={quran} />
              <InfoCard label="নিয়মিত নামাজ পড়েন?" value={namaj} />
              <InfoCard label="মাযহাব" value={mazhab} />
              <InfoCard label="ইসলামি শরিয়াহ্ মেনে চলেন?" value={islamiShoriah} full />
              <InfoCard label="দ্বীনের মেহনত" value={dinerKaj} full />
              <InfoCard label="নাটক/সিনেমা দেখেন?" value={watchNatok} />
              {boyOrGirl === "পাত্র" && <InfoCard label="সুন্নতি দাড়ি আছে?" value={dari} />}
            </div>
          </div>

          {/* Address Information */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-pink-800 mb-4 flex items-center">
              <span className="bg-pink-100 p-2 rounded-lg mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </span>
              ঠিকানা
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InfoCard label="বিভাগ" value={division} />
              <InfoCard label="বর্তমান ঠিকানা" value={address} />
              <InfoCard label="স্থায়ী ঠিকানা" value={permanentAddress} />
              <InfoCard label="বড় হয়েছেন যেখানে" value={growupAddress} />
            </div>
          </div>

          {/* Family Information */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-pink-800 mb-4 flex items-center">
              <span className="bg-pink-100 p-2 rounded-lg mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </span>
              পারিবারিক তথ্য
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InfoCard label="পিতার পেশা" value={fatherOccupation} />
              <InfoCard label="মাতার পেশা" value={motherOccupation} />
              <InfoCard label="ভাইদের তথ্য" value={brotherDetails} full />
              <InfoCard label="বোনদের তথ্য" value={sisterDetails} full />
              <InfoCard label="চাচা এবং মামাদের তথ্য" value={mamaDetails} full />
              <InfoCard label="পারিবারিক অর্থনৈতিক অবস্থা" value={familyDetails} full />
              <InfoCard label="পারিবারিক দ্বীনি পরিবেশ" value={familyDiniPoribesh} full />
            </div>
          </div>

          {/* Personal Details */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-pink-800 mb-4 flex items-center">
              <span className="bg-pink-100 p-2 rounded-lg mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </span>
              ব্যক্তিগত তথ্য
            </h3>
            <div className="grid grid-cols-1 gap-4">
              <InfoCard label="শখ, পছন্দ, অপছন্দ, রুচিবোধ, স্বপ্ন, স্বপ্ন ইত্যাদি" value={shokh} full />
              <InfoCard label="ব্যাক্তিগত অন্যান্য তথ্য" value={personalDetails} full />
              <InfoCard label="কোনো মানসিক/শারিরিক রোগ/অঙ্গহানী আছে কিনা" value={sharirikRog} full />
            </div>
          </div>

          {/* Partner Expectations */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-pink-800 mb-4 flex items-center">
              <span className="bg-pink-100 p-2 rounded-lg mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </span>
              প্রত্যাশিত জীবনসঙ্গী
            </h3>
            <div className="grid grid-cols-1 gap-4">
              <InfoCard label="প্রত্যাশিত জীবনসঙ্গী সম্পর্কে তথ্য" value={partnerDetails} full />
              <InfoCard label="অপর পক্ষের কাছ থেকে উপহার আশা করবেন?" value={marriedGift} full />
              <InfoCard label="অভিভাবকের সম্মতি আছে কিনা?" value={guardianPermission} full />
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-pink-800 mb-4 flex items-center">
              <span className="bg-pink-100 p-2 rounded-lg mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              যোগাযোগের তথ্য
            </h3>
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-2xl border-2 border-pink-200">
              <p className="text-lg font-semibold text-gray-800 mb-4">
                যোগাযোগের তথ্য পেতে আমাদের ফেসবুক পেইজে মেসেজ দিন।
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/guide"
                  className="inline-flex items-center text-pink-600 hover:text-pink-700 font-semibold transition-colors duration-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  যোগাযোগের নিয়ম জানুন
                </Link>
                <Link
                  href="https://www.facebook.com/DeendarPatraPatrisandhan"
                  passHref
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-pink-600 hover:text-pink-700 font-semibold transition-colors duration-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  আমাদের ফেসবুক পেইজ
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-2 border-t-2 border-pink-200">
          {/* <div className="flex justify-end">
            <button
              onClick={onClose}
              className="bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold py-3 px-8 rounded-xl hover:from-pink-600 hover:to-rose-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              বন্ধ করুন
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

// InfoCard Component for modal
const InfoCard = ({ label, value, full = false }) => {
  return (
    <div className={`${full ? 'md:col-span-2' : ''} bg-gradient-to-r from-pink-50 to-rose-50 p-4 rounded-xl border border-pink-200 hover:shadow-md transition-shadow duration-200`}>
      <p className="text-sm font-semibold text-pink-700 mb-1">{label}</p>
      <p className="text-gray-800">{value || 'তথ্য প্রদান করা হয়েনি'}</p>
    </div>
  );
};

export default BiodataApp;