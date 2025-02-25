"use client";
import { push, ref, set } from "firebase/database";
import { database } from "@/lib/firebase";
import { useState } from "react";
import FormLabel from "./formLabelTag";
import SelectMarriedStatus from "@/components/selectMarriedStatus";
import SelectBloodGroup from "@/components/selectBloodGroup";
import SelectDivision from "@/components/selectDivision";
import SelectMediumOfEducation from "@/components/selectMediumOfEducation";
import SelectOccupation from "@/components/selectOccupation";

export default function EditButton({ dataObj, dataName }) {
  const [formData, setFormData] = useState(dataObj);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: "" });
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    const checkPass = prompt("Enter 8 digit PIN: ");
    if (checkPass === process.env.NEXT_PUBLIC_ADMIN_PASS) {
      const formIdInput = prompt("Enter form ID: ");
      const newDataObj = {
        date: formData.date,
        formID: formIdInput,
        boyOrGirl: formData.boyOrGirl,
        name: formData.name,
        mobile: formData.mobile,
        email: formData.email,
        age: formData.age,
        height: formData.height,
        weight: formData.weight,
        birthID: formData.birthID,
        birthDate: formData.birthDate,
        address: formData.address,
        permanentAddress: formData.permanentAddress,
        growupAddress: formData.growupAddress,
        bodyColor: formData.bodyColor,
        bloodGroup: formData.bloodGroup,
        islamiShoriah: formData.islamiShoriah,
        dinerKaj: formData.dinerKaj,
        watchNatok: formData.watchNatok,
        sharirikRog: formData.sharirikRog,
        marriedStatus: formData.marriedStatus,
        dari: formData.dari,
        porda: formData.porda,
        quran: formData.quran,
        namaj: formData.namaj,
        mazhab: formData.mazhab,
        division: formData.division,
        sscEducation: formData.sscEducation,
        hscEducation: formData.hscEducation,
        honorsEducation: formData.honorsEducation,
        education: formData.education,
        selectMediumOfEducation: formData.selectMediumOfEducation,
        selectOccupation: formData.selectOccupation,
        occupation: formData.occupation,
        monthlyIncome: formData.monthlyIncome,
        guardianPermission: formData.guardianPermission,
        shokh: formData.shokh,
        wifePorda: formData.wifePorda,
        wifeEducation: formData.wifeEducation,
        wifeJob: formData.wifeJob,
        wifeLeaving: formData.wifeLeaving,
        marriedGift: formData.marriedGift,
        personalDetails: formData.personalDetails,
        familyDetails: formData.familyDetails,
        partnerDetails: formData.partnerDetails,
        fbLink: formData.fbLink,
        extra: formData.extra,
        fatherName: formData.fatherName,
        fatherOccupation: formData.fatherOccupation,
        motherOccupation: formData.motherOccupation,
        brotherDetails: formData.brotherDetails,
        sisterDetails: formData.sisterDetails,
        mamaDetails: formData.mamaDetails,
        familyDiniPoribesh: formData.familyDiniPoribesh,
        new1: formData.new1,
        new2: formData.new2,
        new3: formData.new3,
        new4: formData.new4,
        new5: formData.new5,
        new6: formData.new6,
        new7: formData.new7,
        new8: formData.new8,
        new9: formData.new9,
      };
      //

      if (formIdInput) {
        try {
          const usersRef = ref(database, "ApprovedBiodata");
          const newDataRef = await push(usersRef);

          set(newDataRef, newDataObj);

          fetch(
            `${process.env.NEXT_PUBLIC_DB_URL}/AllBiodata/${dataName}.json`,
            {
              method: "DELETE",
            }
          )
            .then(() => {
              alert("Success.");
              location.replace("/all_biodata");
            })
            .catch(() => alert("Error! Contact with Arif Billah."));
        } catch (error) {
          alert("Your Data is not Approved!!");
        }
      } else {
        alert("Failed!");
      }
    } else {
      alert("Wrong PIN!!!");
    }
  };

  return (
    <div className="mt-6">
      <form onSubmit={handleSubmit}>
        <hr />
        {/* Personal Details */}
        <p className="mt-4 text-2xl text-pink-600 font-bold underline decoration-double">
          বায়োডাটা সংশোধন করুন
        </p>
        <div>
          {/* Gender Select */}
          <div className="p-4  rounded-xl">
            <label className="text-[28px] text-purple-700 mb-4 underline">
              আপনি একজন: <span className="text-red-600">*</span>
            </label>
            <div className="">
              <label className="flex items-center radio-container mt-2 rounded-md">
                <input
                  type="radio"
                  name="boyOrGirl"
                  value="পাত্র"
                  className=""
                  checked={formData.boyOrGirl === "পাত্র"}
                  onChange={handleChange}
                />
                <span className="checkmark"></span>

                <span className="genderText">পাত্র</span>
              </label>

              <label className="flex items-center radio-container rounded-md">
                <input
                  type="radio"
                  name="boyOrGirl"
                  value="পাত্রী"
                  className=""
                  checked={formData.boyOrGirl === "পাত্রী"}
                  onChange={handleChange}
                />
                <span className="checkmark"></span>

                <span className="genderText">পাত্রী</span>
              </label>
            </div>
          </div>{" "}
          <hr />
          <br />
          <FormLabel text={"নাম"} require="true" />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            maxLength={100}
            placeholder="আপনার নাম লিখুন..."
            className="formInput"
            required
          />
          <hr />
        </div>{" "}
        {/* মোবাইল নাম্বার */}
        <div>
          <FormLabel text={"মোবাইল নাম্বার"} require="true" />
          <p className="text-pink-500 pl-2 text-justify">
            ~ আপনার মোবাইল নাম্বার ওয়েবসাইটে প্রদর্শিত হবেনা।
          </p>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            maxLength={20}
            placeholder="আপনার সচল মোবাইল নাম্বার..."
            className="formInput"
            required
          />
        </div>
        <hr />
        {/* Email */}
        <div>
          <FormLabel text={"ই-মেইল"} />
          <p className="text-pink-500 pl-2 text-justify">
            ~ আপনার ই-মেইল ওয়েবসাইটে প্রদর্শিত হবেনা।
          </p>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            maxLength={100}
            placeholder="আপনার ইমেইল লিখুন..."
            className="formInput"
          />
        </div>
        <hr />
        {/* বৈবাহিক অবস্থা */}
        <div>
          <FormLabel text={"বৈবাহিক অবস্থা"} require="true" />
          <select
            name="marriedStatus"
            value={formData.marriedStatus}
            onChange={handleChange}
            className="formSelect"
            required
          >
            <SelectMarriedStatus />
          </select>
        </div>{" "}
        <hr />
        {/* বয়স */}
        <div>
          <FormLabel text={"আপনার বয়স"} require="true" />
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            maxLength={3}
            placeholder="আপনার বর্তমান বয়স কত?"
            className="formInput"
            required
          />
        </div>
        <hr />
        {/* জন্ম তারিখ */}
        <div>
          <FormLabel text={"জন্ম তারিখ"} require="true" />
          <input
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
            className="formInput"
          />
        </div>
        <hr />
        {/* আপনার উচ্চতা */}
        <div>
          <FormLabel text={"আপনার উচ্চতা"} require="true" />
          <input
            type="number"
            name="height"
            value={formData.height}
            onChange={handleChange}
            maxLength={5}
            placeholder="এভাবে লিখুন = 5.05"
            className="formInput"
            required
          />
        </div>
        <hr />
        {/* আপনার ওজন */}
        <div>
          <FormLabel text={"আপনার ওজন"} require="true" />
          <input
            type="number"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            maxLength={3}
            placeholder="আপনার ওজন লিখুন... (কেজি)"
            className="formInput"
            required
          />
        </div>
        <hr />
        {/* bodyColor */}
        <div>
          <FormLabel text={"গায়ের রং"} require="true" />
          <input
            type="text"
            name="bodyColor"
            value={formData.bodyColor}
            onChange={handleChange}
            maxLength={20}
            placeholder="আপনার গায়ের রং...."
            className="formInput"
            required
          />
          <hr />
        </div>{" "}
        {/*  */}
        <div>
          <FormLabel
            text={"আপনি কি মাহরাম/নন মাহরাম মেনে পর্দা করেন?"}
            require="true"
          />
          <input
            type="text"
            name="porda"
            value={formData.porda}
            onChange={handleChange}
            maxLength={100}
            placeholder="...."
            className="formInput"
            required
          />
          <hr />
        </div>{" "}
        {/*  */}
        <div>
          <FormLabel text={"আপনার কি সুন্নতি দাড়ি আছে? (পাত্র কতৃক পূরণীয়)"} />
          <input
            type="text"
            name="dari"
            value={formData.dari}
            onChange={handleChange}
            maxLength={50}
            placeholder="...."
            className="formInput"
          />
          <hr />
        </div>{" "}
        {/*  */}
        <div>
          <FormLabel
            text={"আপনি কি সহিহ-শুদ্ধভাবে কোরআন তেলোয়াত করতে পারেন?"}
            require="true"
          />
          <input
            type="text"
            name="quran"
            value={formData.quran}
            onChange={handleChange}
            maxLength={50}
            placeholder="...."
            className="formInput"
          />
          <hr />
        </div>{" "}
        {/*  */}
        <div>
          <FormLabel
            text={"আপনি কি নিয়মিত পাচঁ ওয়াক্ত নামাজ পড়েন?"}
            require="true"
          />
          <input
            type="text"
            name="namaj"
            value={formData.namaj}
            onChange={handleChange}
            maxLength={50}
            placeholder="...."
            className="formInput"
            required
          />
          <hr />
        </div>{" "}
        {/*  */}
        <div>
          <FormLabel text={"আপনি কোন মাযহাবের অনুসারি?"} />
          <input
            type="text"
            name="mazhab"
            value={formData.mazhab}
            onChange={handleChange}
            maxLength={300}
            placeholder="...."
            className="formInput"
          />
          <hr />
        </div>{" "}
        {/*  */}
        <div>
          <FormLabel
            text={"আপনি কি অন্যান্য ইসলামি শরিয়াহ্ বিধিবিধান মেনে চলেন?"}
            require="true"
          />
          <input
            type="text"
            name="islamiShoriah"
            value={formData.islamiShoriah}
            onChange={handleChange}
            maxLength={300}
            placeholder="...."
            className="formInput"
            required
          />
          <hr />
        </div>{" "}
        {/*  */}
        <div>
          <FormLabel text={"আপনি কি দ্বীনের কোনো বিশেষ মেহনতে যুক্ত আছেন?"} />
          <p className="text-pink-500 pl-2 text-justify">
            ~ যেমন- তাবলীগ ইত্যাদি।
          </p>
          <input
            type="text"
            name="dinerKaj"
            value={formData.dinerKaj}
            onChange={handleChange}
            maxLength={500}
            placeholder="...."
            className="formInput"
          />
          <hr />
        </div>{" "}
        {/*  */}
        <div>
          <FormLabel text={"আপনি কি নাটক/সিনেমা/সিরিয়াল/গান দেখেন বা শুনেন?"} />
          <input
            type="text"
            name="watchNatok"
            value={formData.watchNatok}
            onChange={handleChange}
            maxLength={300}
            placeholder="...."
            className="formInput"
          />
          <hr />
        </div>{" "}
        {/*  */}
        <div>
          <FormLabel
            text={"আপনার কি কোনো মানসিক/শারিরিক রোগ/অঙ্গহানী আছে?"}
            require="true"
          />
          <input
            type="text"
            name="sharirikRog"
            value={formData.sharirikRog}
            onChange={handleChange}
            maxLength={200}
            placeholder="...."
            className="formInput"
            required
          />
          <hr />
        </div>{" "}
        {/*  */}
        <div>
          <FormLabel
            text={"আপনার শখ, পছন্দ, অপছন্দ, রুচিবোধ, স্বপ্ন ইত্যাদি লিখুন।"}
            require="true"
          />
          <p className="text-pink-500 pl-2 text-justify">
            ~ এখানে আপনি যত বিস্তারিত লিখবেন, অপর পক্ষের জন্য আপনার সম্পর্কে
            ধারণা নেওয়া সহজ হবে এবং প্রস্তাব পাওয়ার সম্ভাবনা বৃদ্ধি পাবে।
          </p>
          <input
            type="text"
            name="shokh"
            value={formData.shokh}
            onChange={handleChange}
            maxLength={1500}
            placeholder="...."
            className="formInput"
            required
          />
          <hr />
        </div>{" "}
        {/* আপনার ব্যাক্তিগত অন্যান্য  তথ্য */}
        <div>
          <FormLabel text={"আপনার ব্যাক্তিগত অন্যান্য তথ্য"} />
          <p className="text-pink-500 pl-2 text-justify">
            ~ আপনার ব্যাক্তিগত অন্যান্য তথ্য দিতে চাইলে এখানে লিখুন।
          </p>
          <textarea
            name="personalDetails"
            rows="2"
            value={formData.personalDetails}
            onChange={handleChange}
            maxLength={1000}
            placeholder="আপনার ব্যাক্তিগত অন্যান্য তথ্য....."
            className="formInput"
          ></textarea>
        </div>{" "}
        <hr />
        {/* আপনার রক্তের গ্রুপ */}
        <div>
          <FormLabel text={"আপনার রক্তের গ্রুপ"} require="true" />
          <select
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
            className="formSelect"
          >
            <SelectBloodGroup />
          </select>
        </div>{" "}
        <hr />
        {/* বিভাগ */}
        <div>
          <FormLabel text={"আপনার বিভাগ"} require="true" />
          <select
            id="division"
            name="division"
            value={formData.division}
            onChange={handleChange}
            className="formSelect"
            required
          >
            <SelectDivision />
          </select>
        </div>{" "}
        <hr />
        {/* বর্তমান ঠিকানা */}
        <div>
          <FormLabel text={"আপনার বর্তমান ঠিকানা"} require="true" />
          <textarea
            name="address"
            rows="2"
            value={formData.address}
            onChange={handleChange}
            maxLength={300}
            placeholder="গ্রাম/শহর:-..., থানা:-...., জেলা:...।"
            className="formInput"
            required
          ></textarea>
        </div>{" "}
        <hr />
        {/* স্থায়ী ঠিকানা */}
        <div>
          <FormLabel text={"আপনার স্থায়ী ঠিকানা"} require="true" />
          <textarea
            name="permanentAddress"
            rows="2"
            value={formData.permanentAddress}
            onChange={handleChange}
            maxLength={300}
            placeholder="গ্রাম/শহর:-..., থানা:-...., জেলা:...।"
            className="formInput"
            required
          ></textarea>
        </div>{" "}
        <hr />
        {/* আপনি কোথায় বড় হয়েছেন */}
        <div>
          <FormLabel text={"আপনি কোথায় বড় হয়েছেন"} />
          <textarea
            name="growupAddress"
            rows="2"
            value={formData.growupAddress}
            onChange={handleChange}
            maxLength={300}
            placeholder="গ্রাম/শহর:-..., থানা:-...., জেলা:...।"
            className="formInput"
          ></textarea>
        </div>{" "}
        <hr />
        <hr />
        {/* আপনার শিক্ষা মাধ্যম*/}
        <div>
          <FormLabel text={"আপনার শিক্ষা মাধ্যম"} require="true" />
          <select
            name="selectMediumOfEducation"
            value={formData.selectMediumOfEducation}
            onChange={handleChange}
            className="formSelect"
          >
            <SelectMediumOfEducation />
          </select>
        </div>{" "}
        <hr />
        {/* শিক্ষাগত যোগ্যতা */}
        <div>
          <FormLabel text={"শিক্ষাগত যোগ্যতা (এসএসসি/সমমান)"} require="true" />
          <p className="text-pink-500 pl-2 text-justify">
            ~ এসএসসি/দাখিল/সমমান পাসের সন, সাবজেক্ট/গ্রুপ ও ফলাফল/গ্রেড/মার্ক
            লিখুন
          </p>
          <input
            type="text"
            name="sscEducation"
            value={formData.sscEducation}
            onChange={handleChange}
            maxLength={300}
            placeholder="বিস্তারিত ভাবে লিখুন..."
            className="formInput"
            required
          />
        </div>{" "}
        <hr />
        <div>
          <FormLabel text={"শিক্ষাগত যোগ্যতা (এইচএসসি/সমমান)"} />
          <p className="text-pink-500 pl-2 text-justify">
            ~ এইচএসসি/আলিম/সমমান পাসের সন, সাবজেক্ট/গ্রুপ ও ফলাফল/গ্রেড/মার্ক
            লিখুন
          </p>
          <input
            type="text"
            name="hscEducation"
            value={formData.hscEducation}
            onChange={handleChange}
            maxLength={300}
            placeholder="বিস্তারিত ভাবে লিখুন..."
            className="formInput"
          />
        </div>{" "}
        <hr />
        <div>
          <FormLabel
            text={"শিক্ষাগত যোগ্যতা (স্নাতক/ স্নাতক(সম্মান) / সমমান)"}
          />
          <p className="text-pink-500 pl-2 text-justify">
            ~ স্নাতক/ স্নাতক (সম্মান) / সমমান) এর পাসের সন, সাবজেক্ট/গ্রুপ ও
            ফলাফল/গ্রেড/মার্ক লিখুন
          </p>
          <input
            type="text"
            name="honorsEducation"
            value={formData.honorsEducation}
            onChange={handleChange}
            maxLength={300}
            placeholder="বিস্তারিত ভাবে লিখুন..."
            className="formInput"
          />
        </div>{" "}
        <hr />
        {/* শিক্ষাগত যোগ্যতা */}
        <div>
          <FormLabel text={"অন্যান্য শিক্ষাগত যোগ্যতা"} />
          <p className="text-pink-500 pl-2 text-justify">
            ~ আপনার অন্যান্য শিক্ষাগত যোগ্যতা থাকলে লিখুন, যেমন- কম্পিউটার
            প্রশিক্ষন, ইংরেজি স্পোকেন কোর্স ইত্যাদি।
          </p>
          <input
            type="text"
            name="education"
            value={formData.education}
            onChange={handleChange}
            maxLength={300}
            placeholder="বিস্তারিত ভাবে লিখুন..."
            className="formInput"
          />
        </div>{" "}
        <hr />
        <hr />
        {/* পেশার বিস্তারিত */}
        <div>
          <FormLabel text={"পেশার বিস্তারিত বিবরণ"} require="true" />
          <p className="text-pink-500 pl-2 text-justify">
            ~ আপনার কর্মস্থল কোথায়, আপনি কোন প্রতিষ্ঠানে কাজ করছেন, আপনার ইনকাম
            হালাল কিনা ইত্যাদি লিখুন।
          </p>
          <input
            type="text"
            name="occupation"
            value={formData.occupation}
            onChange={handleChange}
            maxLength={300}
            placeholder="আপনার পেশার বিস্তারিত বিবরণ..."
            className="formInput"
            required
          />
        </div>{" "}
        <hr />
        {/* পেশা */}
        <div>
          <FormLabel text={"আপনার পেশা"} require="true" />
          <select
            name="selectOccupation"
            value={formData.selectOccupation}
            onChange={handleChange}
            className="formSelect"
          >
            <SelectOccupation />
          </select>
        </div>{" "}
        {/* মাসিক ইনকাম */}
        <div>
          <FormLabel text={"মাসিক ইনকাম"} require="true" />
          <input
            type="text"
            name="monthlyIncome"
            value={formData.monthlyIncome}
            onChange={handleChange}
            maxLength={300}
            placeholder="আপনার মাসিক ইনকাম লিখুন..."
            className="formInput"
            required
          />
        </div>{" "}
        <hr />
        {/* */}
        <div>
          <FormLabel
            text={"অভিভাবক কি আপনার বিয়েতে রাজি আছে?"}
            require="true"
          />
          <input
            type="text"
            name="guardianPermission"
            value={formData.guardianPermission}
            onChange={handleChange}
            maxLength={100}
            placeholder="...."
            className="formInput"
          />
        </div>{" "}
        <hr />
        {/* */}
        <div>
          <FormLabel
            text={"বিয়ের পর স্ত্রীকে পর্দায় রাখবেন? (পাত্র কতৃক পূরণীয়)"}
          />
          <input
            type="text"
            name="wifePorda"
            value={formData.wifePorda}
            onChange={handleChange}
            maxLength={100}
            placeholder="...."
            className="formInput"
          />
        </div>{" "}
        <hr />
        {/* */}
        <div>
          <FormLabel
            text={"বিয়ের পর স্ত্রীকে পড়াশোনা করতে দিবেন? (পাত্র কতৃক পূরণীয়)"}
          />
          <input
            type="text"
            name="wifeEducation"
            value={formData.wifeEducation}
            onChange={handleChange}
            maxLength={100}
            placeholder="...."
            className="formInput"
          />
        </div>{" "}
        <hr />
        {/* */}
        <div>
          <FormLabel
            text={"বিয়ের পর স্ত্রীকে চাকরি করতে দিতে চান? (পাত্র কতৃক পূরণীয়)"}
          />
          <input
            type="text"
            name="wifeJob"
            value={formData.wifeJob}
            onChange={handleChange}
            maxLength={100}
            placeholder="...."
            className="formInput"
          />
        </div>{" "}
        <hr />
        {/* */}
        <div>
          <FormLabel
            text={"বিয়ের পর স্ত্রীকে নিয়ে কোথায় থাকতে চান? (পাত্র কতৃক পূরণীয়)"}
          />
          <input
            type="text"
            name="wifeLeaving"
            value={formData.wifeLeaving}
            onChange={handleChange}
            maxLength={100}
            placeholder="...."
            className="formInput"
          />
        </div>{" "}
        <hr />
        {/* */}
        <div>
          <FormLabel
            text={
              "আপনি বা আপনার পরিবার বিয়ের সময় অপর পক্ষের কাছ থেকে কোনো উপহার আশা করবেন?"
            }
            require="true"
          />
          <input
            type="text"
            name="marriedGift"
            value={formData.marriedGift}
            onChange={handleChange}
            maxLength={300}
            placeholder="...."
            className="formInput"
            required
          />
        </div>{" "}
        <hr />
        {/* পারিবারিক তথ্য */}
        <p className="text-center m-4 text-xl underline decoration-wavy underline-offset-4 text-gray-600">
          “পারিবারিক তথ্য”
        </p>
        {/*  */}
        <div>
          <FormLabel text={"আপনার পিতার নাম"} />
          <p className="text-pink-500 pl-2 text-justify">
            ~ এটি ওয়েবসাইটে প্রদর্শিত হবেনা।
          </p>
          <p className="text-pink-500 pl-2 text-justify">
            ~ আপনার পিতা মৃত হলে নামের পূর্বে “মরহুম” লিখুন।
          </p>
          <input
            type="text"
            name="fatherName"
            value={formData.fatherName}
            onChange={handleChange}
            maxLength={100}
            placeholder="...."
            className="formInput"
          />
        </div>{" "}
        <hr />
        {/*  */}
        <div>
          <FormLabel text={"পিতার পেশার বিবরণ"} require="true" />
          <input
            type="text"
            name="fatherOccupation"
            value={formData.fatherOccupation}
            onChange={handleChange}
            maxLength={500}
            placeholder="অবশ্যই বিস্তারিত লিখুন...."
            className="formInput"
            required
          />
        </div>{" "}
        <hr />
        {/*  */}
        <div>
          <FormLabel text={"মাতার পেশার বিবরণ"} require="true" />
          <input
            type="text"
            name="motherOccupation"
            value={formData.motherOccupation}
            onChange={handleChange}
            maxLength={300}
            placeholder="...."
            className="formInput"
            required
          />
        </div>{" "}
        <hr />
        {/*  */}
        <div>
          <FormLabel text={"আপনার ভাইদের তথ্য"} require="true" />
          <p className="text-pink-500 pl-2 text-justify">
            ~ শিক্ষাগত যোগ্যতা, বৈবাহিক অবস্থা এবং পেশা লিখবেন। একাধিক ভাই থাকলে
            কমা দিয়ে নিচের লাইনে লিখুন। সবার তথ্য বিস্তারিত ভাবে লিখুন।
          </p>
          <textarea
            name="brotherDetails"
            rows="2"
            value={formData.brotherDetails}
            onChange={handleChange}
            maxLength={1500}
            placeholder="...."
            className="formInput"
          ></textarea>
        </div>{" "}
        <hr />
        {/*  */}
        <div>
          <FormLabel text={"আপনার বোনদের তথ্য"} require="true" />
          <p className="text-pink-500 pl-2 text-justify">
            ~ শিক্ষাগত যোগ্যতা, বৈবাহিক অবস্থা এবং পেশা লিখবেন। একাধিক বোন থাকলে
            কমা দিয়ে নিচের লাইনে লিখুন। সবার তথ্য বিস্তারিত ভাবে লিখুন।
          </p>
          <textarea
            name="sisterDetails"
            rows="2"
            value={formData.sisterDetails}
            onChange={handleChange}
            maxLength={1500}
            placeholder="...."
            className="formInput"
          ></textarea>
        </div>{" "}
        <hr />
        {/*  */}
        <div>
          <FormLabel text={"চাচা এবং মামাদের তথ্য"} require="true" />
          <p className="text-pink-500 pl-2 text-justify">
            ~ আপনার চাচা এবং মামা কয়জন? আপনার চাচা এবং মামাদের পেশার বিবরণ
            বিস্তারিত লিখুন।
          </p>
          <textarea
            name="mamaDetails"
            rows="2"
            value={formData.mamaDetails}
            onChange={handleChange}
            maxLength={2000}
            placeholder="চাচা ও মামাদের তথ্য বিস্তারিত ভাবে লিখুন..."
            className="formInput"
          ></textarea>
        </div>{" "}
        <hr />
        {/*  */}
        <div>
          <FormLabel
            text={"আপনার পারিবারিক অর্থনৈতিক অবস্থার বর্ণনা"}
            require="true"
          />
          <p className="text-pink-500 pl-2 text-justify">
            ~ বিস্তারিত উল্লেখ করবেন। যেমন: বসত বাড়ি (ভাড়া নাকি নিজস্ব), জমি বা
            পারিবারিক ব্যবসা থাকলে তার বিবরণ ইত্যাদি।
          </p>
          <p className="text-pink-500 pl-2 text-justify">
            ~ (কুফু মেলাতে অনেকেই এটিকে গুরুত্বপূর্ণ মনে করে।)
          </p>
          <textarea
            name="familyDetails"
            rows="2"
            value={formData.familyDetails}
            onChange={handleChange}
            maxLength={2000}
            placeholder="....."
            className="formInput"
            required
          ></textarea>
        </div>{" "}
        <hr />
        {/*  */}
        <div>
          <FormLabel text={"পারিবারিক দ্বীনি পরিবেশ কেমন?"} require="true" />
          <p className="text-pink-500 pl-2 text-justify">
            ~ আপনার পরিবারের সদস্যগণের দ্বীন পালন এবং মাহরাম নন-মাহরাম মেনে চলার
            বিষয়ে বিস্তারিত লিখবেন।
          </p>

          <textarea
            name="familyDiniPoribesh"
            rows="2"
            value={formData.familyDiniPoribesh}
            onChange={handleChange}
            maxLength={1000}
            placeholder="....."
            className="formInput"
            required
          ></textarea>
        </div>{" "}
        <hr />
        {/* প্রত্যাশিত জীবনসঙ্গী */}
        <p className="text-center m-4 text-xl underline decoration-wavy underline-offset-4 text-gray-600">
          “প্রত্যাশিত জীবনসঙ্গী”
        </p>{" "}
        {/* জীবনসঙ্গীর বয়স */}
        <div>
          <FormLabel text={"প্রত্যাশিত জীবনসঙ্গীর বয়স লিখুন"} require="true" />
          <input
            type="text"
            name="new1"
            value={formData.new1}
            onChange={handleChange}
            maxLength={100}
            placeholder="প্রত্যাশিত জীবনসঙ্গীর বয়স..."
            className="formInput"
            required
          />
          <hr />
        </div>
        {/* জীবনসঙ্গীর উচ্চতা */}
        <div>
          <FormLabel
            text={"প্রত্যাশিত জীবনসঙ্গীর উচ্চতা লিখুন"}
            require="true"
          />
          <input
            type="text"
            name="new2"
            value={formData.new2}
            onChange={handleChange}
            maxLength={100}
            placeholder="প্রত্যাশিত জীবনসঙ্গীর উচ্চতা..."
            className="formInput"
            required
          />
          <hr />
        </div>
        {/* জীবনসঙ্গীর ওজন */}
        <div>
          <FormLabel text={"প্রত্যাশিত জীবনসঙ্গীর ওজন লিখুন"} require="true" />
          <input
            type="text"
            name="new3"
            value={formData.new3}
            onChange={handleChange}
            maxLength={100}
            placeholder="প্রত্যাশিত জীবনসঙ্গীর ওজন..."
            className="formInput"
            required
          />
          <hr />
        </div>
        {/* জীবনসঙ্গীর গাত্রবর্ন */}
        <div>
          <FormLabel
            text={"প্রত্যাশিত জীবনসঙ্গীর গায়ের রং লিখুন"}
            require="true"
          />
          <input
            type="text"
            name="new4"
            value={formData.new4}
            onChange={handleChange}
            maxLength={100}
            placeholder="জীবনসঙ্গীর গায়ের রং কেমন চান..."
            className="formInput"
            required
          />
          <hr />
        </div>
        {/* জীবনসঙ্গীর জেলা */}
        <div>
          <FormLabel text={"প্রত্যাশিত জীবনসঙ্গীর জেলা লিখুন"} require="true" />
          <input
            type="text"
            name="new5"
            value={formData.new5}
            onChange={handleChange}
            maxLength={100}
            placeholder="জীবনসঙ্গীর জেলা কোথায় চান..."
            className="formInput"
            required
          />
          <hr />
        </div>
        {/* জীবনসঙ্গীর জেলা */}
        <div>
          <FormLabel
            text={"প্রত্যাশিত জীবনসঙ্গীর শিক্ষাগত যোগ্যতা লিখুন"}
            require="true"
          />
          <input
            type="text"
            name="new6"
            value={formData.new6}
            onChange={handleChange}
            maxLength={300}
            placeholder="জীবনসঙ্গীর শিক্ষাগত যোগ্যতা কিরকম চান..."
            className="formInput"
            required
          />
          <hr />
        </div>
        {/* প্রত্যাশিত জীবনসঙ্গীর বৈবাহিক অবস্থা */}
        <div>
          <FormLabel
            text={"প্রত্যাশিত জীবনসঙ্গীর বৈবাহিক অবস্থা কেমন চান?"}
            require="true"
          />
          <input
            type="text"
            name="new7"
            value={formData.new7}
            onChange={handleChange}
            maxLength={200}
            placeholder="জীবনসঙ্গীর বৈবাহিক অবস্থা কিরকম চান..."
            className="formInput"
            required
          />
          <hr />
        </div>
        <hr />
        {/* আপনি কেমন জীবনসঙ্গী চান */}
        <div>
          <FormLabel
            text={
              "আপনার প্রত্যাশিত জীবনসঙ্গী সম্পর্কে আর কিছু লেখার থাকলে এখানে লিখুন"
            }
            require="true"
          />
          <p className="text-pink-500 pl-2 text-justify">
            ~ আপনার প্রত্যাশিত জীবনসঙ্গীর পেশা, বৈশিষ্ট/গুণাবলী, অর্থনৈতিক
            অবস্থা ইত্যাদি কেমন চান এই বিষয়ে বিস্তারিত লিখুন।
          </p>
          <textarea
            name="partnerDetails"
            rows="3"
            value={formData.partnerDetails}
            onChange={handleChange}
            maxLength={500}
            placeholder="আপনার প্রত্যাশিত জীবনসঙ্গী সম্পর্কে আর কিছু লেখার থাকলে এখানে লিখুন..."
            className="formInput"
            required
          ></textarea>
        </div>{" "}
        <hr />
        {/* */}
        {/* Submit Button */}
        <button
          type="button"
          onClick={handleSubmit}
          className="px-1 py-4 bg-pink-500 text-white rounded-lg shadow-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 transition-all duration-300 ease-in-out text-xl overflow-hidden w-full mt-4"
        >
          Edit & Approve
        </button>
      </form>
    </div>
  );
}
