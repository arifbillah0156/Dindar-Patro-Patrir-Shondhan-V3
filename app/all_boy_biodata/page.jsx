"use client";
import { useState, useEffect } from "react";
import { get, ref } from "firebase/database";
import { database } from "@/lib/firebase";
import BiodataCard from "../all_biodata/biodata_card";
import Loading from "../loading";

const DataComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const usersRef = ref(database, "ApprovedBiodata");
    get(usersRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const snapData = Object.entries(snapshot.val());
          const newArray = [];

          snapData.map((data) => {
            if (data[1].boyOrGirl == "পাত্র") {
              newArray.push(data);
            } else {
            }
          });

          setTimeout(() => {
            setData(newArray.reverse());
          }, 300);
        } else {
          alert("Somthing wrong! No data found!!");
        }
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {data ? (
        <div>
          <div className="w-full text-center">
            <h1 className="px-2 py-4 text-2xl sm:text-5xl text-purple-800 underline underline-offset-8 decoration-double decoration-purple-800 font-bold mt-6 animatedText galada-regular">
              “সমস্ত পাত্রের বায়োডাটা”
            </h1>
            <p className="text-pink-700 px-4 md:text-xl">
              আপনার কোনো বায়োডাটা পছন্দ হলে যোগাযোগের তথ্য পেতে “বায়োডাটা ID”
              নিয়ে আমাদের ফেসবুক পেইজে মেসেজ দিন।
            </p>
          </div>

          <div>
            <div className="grid justify-center items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 mt-3">
              {data.map((singleData) => (
                <div
                  key={singleData[0]}
                  className="h-max rounded-xl m-2  text-white p-3"
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
        <Loading />
      )}
    </div>
  );
};

export default DataComponent;
