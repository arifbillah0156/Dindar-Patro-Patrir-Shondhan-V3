"use client";
import { useState, useEffect } from "react";
import { get, ref } from "firebase/database";
import { database } from "@/lib/firebase";
import BiodataCard from "./biodata_card.jsx";
import LoadingSection from "./loadingPage.jsx";
import { useSearchParams } from "next/navigation";
import convertToBanglaDigits from "./engToBN_digits.jsx";
import Link from "next/link.js";

const DataComponent = () => {
  const [data, setData] = useState(null);
  const [dataLen, setDataLen] = useState("...");

  const searchParams = useSearchParams();
  const biodata = searchParams.get("biodata");
  const marriedStatus = searchParams.get("marriedStatus");
  const division = searchParams.get("division");

  useEffect(() => {
    const usersRef = ref(database, "ApprovedBiodata");
    get(usersRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const snapData = Object.entries(snapshot.val());
          const newArray = [];

          snapData.map((data) => {
            if (
              data[1].boyOrGirl == biodata &&
              data[1].marriedStatus == marriedStatus &&
              data[1].division == division
            ) {
              newArray.push(data);
            } else {
            }
          });

          setTimeout(() => {
            setDataLen(convertToBanglaDigits(newArray.length.toString()));
            setData(newArray);
          }, 300);
        } else {
          alert("Somthing wrong! No data found!!");
        }
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="min-h-screen ">
      {data ? (
        <div>
          <div className="w-full text-center">
            <h1 className="mt-4 px-2 py-4 text-3xl text-purple-800 underline underline-offset-8 decoration-double font-bold decoration-purple-800 animatedText">
              “{dataLen} টি বায়োডাটা”
            </h1>
            <p className="text-pink-700 text-lg px-4">
              “আপনার কোনো বায়োডাটা পছন্দ হলে যোগাযোগের তথ্য পেতে “বায়োডাটা ID”
              নিয়ে আমাদের ফেসবুক পেইজে মেসেজ দিন।”
            </p>
          </div>{" "}
          <hr />
          <div className="text-center my-2">
            <Link
              href="/guide"
              className="text-lg  mx-2 px-3 py-2 underline text-blue-700"
            >
              "পাত্র/পাত্রীর সাথে যোগাযোগের নিয়ম জানুন"
            </Link>{" "}
            <br />
            <Link
              href="https://www.facebook.com/DeendarPatraPatrisandhan"
              passHref
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg  mx-2 px-3 py-2 underline text-blue-700"
            >
              "আমাদের ফেসবুক পেইজে যেতে এখানে ক্লিক করুন"
            </Link>
          </div>{" "}
          <hr />
          <div className="w-full flex justify-center mt-2">
            <div className="text-purple-800 text-left w-max bg-gray-50 p-3 rounded-lg text-xl shadow-lg">
              <p>বায়োডাটার ধরণঃ “{biodata}”।</p>
              <p>বৈবাহিক অবস্থাঃ “{marriedStatus}”।</p>
              <p>বিভাগঃ “{division}”।</p>
            </div>
          </div>
          <div>
            <div className="grid justify-center items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1  bg-gray-50 rounded-3xl mt-3">
              {data.map((singleData) => (
                <div
                  key={singleData[0]}
                  className="h-max rounded-3xl m-2  text-white p-3 bg-white"
                >
                  <BiodataCard
                    dataName={singleData[0]}
                    dataObj={singleData[1]}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <LoadingSection />
      )}
    </div>
  );
};

export default DataComponent;
