"use client";
import { useState, useEffect } from "react";
import { get, ref } from "firebase/database";
import { database } from "@/lib/firebase";
import BiodataCard from "./biodata_card";
import Loading from "../loading";
import Message from "./Message";

const DataComponent = () => {
  const [data, setData] = useState(null);
  const [deleteBiodataId, setDeleteBiodataId] = useState("");

  useEffect(() => {
    const checkPass = prompt("Enter 8 digit PIN: ");
    if (checkPass === process.env.NEXT_PUBLIC_ADMIN_PASS) {
      const usersRef = ref(database, "AllBiodata");
      get(usersRef)
        .then((snapshot) => {
          if (snapshot.exists()) {
            const snapData = Object.entries(snapshot.val());
            setData(snapData.reverse());
          } else {
            alert("Somthing went wrong! No data found!!");
          }
        })
        .catch((error) => console.log(error));
    } else {
      location.reload();
    }
  }, []);

  const handleChangeForDlt = (e) => {
    setDeleteBiodataId(e.target.value);
  };

  const deleteBiodata = (e) => {
    e.preventDefault();
    const checkPass = prompt("Enter 8 digit PIN: ");
    if (checkPass === process.env.NEXT_PUBLIC_ADMIN_PASS) {
      if (confirm(`Bro! Are u sure to delete "${deleteBiodataId}" Biodata??`)) {
        fetch(
          `${process.env.NEXT_PUBLIC_DB_URL}/ApprovedBiodata/-${deleteBiodataId}.json`,
          {
            method: "DELETE",
          }
        )
          .then(() => {
            alert("Deleted the Biodata!!");
            setDeleteBiodataId("");
          })
          .catch(() => alert("Error!! Contact with Arif Billah."));
      } else {
        alert("not delete, be careful bro!!");
      }
    } else {
      alert("Wrong PIN!!!");
    }
  };

  return (
    <div>
      {data ? (
        <div>
          <div className="w-full text-center">
            <h1 className="px-2 py-4 text-3xl text-purple-800 underline underline-offset-8 decoration-wavy">
              “সমস্ত বায়োডাটা”
            </h1>
          </div>{" "}
          <hr />
          <form onSubmit={deleteBiodata} className="py-4 text-center">
            <input
              type="text"
              placeholder="OGyEFg......"
              onChange={handleChangeForDlt}
              className="border border-purple-600 p-3 rounded-md mr-4 text-red-600"
            />
            <button
              type="submit"
              className="px-4 py-3 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 active:bg-red-700 transition-all duration-300 ease-in-out text-xl  overflow-hidden"
            >
              Delete
            </button>
          </form>{" "}
          <hr />
          <div>
            <div className="grid justify-center items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1   mt-3">
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
          <Message />
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default DataComponent;
