"use client";
import Link from "next/link";
import { push, ref, set } from "firebase/database";
import { database } from "@/lib/firebase";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "আপনার নাম লিখুন";
    if (!formData.email) newErrors.email = "আপনার ইমেইল লিখুন";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "ভূল ইমেইল দিয়েছেন!!";
    if (!formData.phone) newErrors.phone = "মোবাইল নাম্বার লিখুন";
    if (!formData.message) newErrors.message = "আপনার মেসেজ লিখুন";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setSuccessMessage("ধন্যবাদ, আপনার মেসেজটি আমাদের কাছে পৌছেছে।");
      setFormData({ name: "", email: "", phone: "", message: "" });

      try {
        const usersRef = ref(database, "Message");
        const newDataRef = await push(usersRef);

        set(newDataRef, formData);
        e.preventDefault();
      } catch (error) {
        console.log(error);

        alert("Your Data is not submitted!!");
      }
    }
  };

  return (
    <div
      style={{
        backgroundImage: "url(/Images/BG4.jpg)",
      }}
      className="rounded-3xl h-max w-[100%] pt-20 pb-16 mb-[-41px] bg-cover bg-center transition-all duration-1000"
    >
      <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md">
        <h2 className="text-2xl sm:text-4xl font-bold text-center mb-6 underline underline-offset-8 decoration-double decoration-purple-800 text-purple-900 animatedText">
          আমাদের সাথে যোগাযোগ
        </h2>{" "}
        <br />
        <div className="w-full text-center">
          <Link
            href="https://www.facebook.com/DeendarPatraPatrisandhan"
            passHref
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 text-xl md:text-2xl bg-blue-100 text-blue-700 rounded-md shadow-md text-center underline underline-offset-4 block"
          >
            আমাদের ফেসবুক পেইজে যেতে এখানে ক্লিক করুন
          </Link>{" "}
        </div>
        <br />
        <div className="w-full text-center">
          <span className="p-4 text-lg md:text-xl bg-purple-100 text-purple-700 rounded-md shadow-md block">
            নিচের ফরমের মাধ্যমে আমাদের কাছে মেসেজ পাঠাতে পারেন।
          </span>
        </div>
        <br />
        <br />
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-xl font-medium text-purple-800"
            >
              নাম
            </label>
            <input
              type="text"
              id="name"
              maxLength={50}
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="formInput"
            />
            {errors.name && (
              <p className="text-red-600 text-sm">{errors.name}</p>
            )}
          </div>{" "}
          <hr />
          <div>
            <label
              htmlFor="email"
              className="block text-xl font-medium text-purple-800"
            >
              ইমেইল
            </label>
            <input
              type="email"
              id="email"
              maxLength={50}
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="formInput"
            />
            {errors.email && (
              <p className="text-red-600 text-sm">{errors.email}</p>
            )}
          </div>{" "}
          <hr />
          <div>
            <label
              htmlFor="phone"
              className="block text-xl font-medium text-purple-800"
            >
              মোবাইল নাম্বার
            </label>
            <input
              type="tel"
              id="phone"
              maxLength={20}
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="formInput"
            />
            {errors.phone && (
              <p className="text-red-600 text-sm">{errors.phone}</p>
            )}
          </div>{" "}
          <hr />
          <div>
            <label
              htmlFor="message"
              className="block text-xl font-medium text-purple-800"
            >
              মেসেজ
            </label>
            <textarea
              id="message"
              rows="4"
              maxLength={3000}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-black"
            ></textarea>
            {errors.message && (
              <p className="text-red-600 text-sm">{errors.message}</p>
            )}
          </div>{" "}
          <br />
          {successMessage && (
            <p className="text-green-600 mb-4 text-lg">{successMessage}</p>
          )}
          <button
            type="submit"
            className="w-full text-xl bg-purple-600 text-white py-3 px-4 rounded-md hover:bg-purple-700 hover:outline-none focus:outline-none hover:ring-2 hover:ring-purple-500 hover:ring-offset-2"
          >
            মেসেজ পাঠান
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
