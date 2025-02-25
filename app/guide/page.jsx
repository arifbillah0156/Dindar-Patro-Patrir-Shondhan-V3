"use client";
import AddPhotoGuide from "./AddPhotoGuide";
import GuideSection from "./guideSection";
export default function Guide() {
  const steps = [
    {
      id: 1,
      title: "পাত্র/পাত্রীর বাবার কর্মস্থলে খোঁজ",
      description:
        "তাঁর কর্মস্থলে গিয়ে সহকর্মীদের কাছ থেকে জানুন তিনি কেমন মানুষ। কর্মজীবনে সততা ও নৈতিকতার প্রমাণ পাওয়া যাবে।",
    },
    {
      id: 2,
      title: "পাত্র/পাত্রীর এলাকায় খোঁজ",
      description:
        "স্বশরীরে এলাকায় গিয়ে আশেপাশের ৫-১০টি বাড়ি ও দোকানে খোঁজ নিন। প্রতিবেশীরা সাধারণত একজনের প্রকৃত চরিত্র সম্পর্কে ধারণা দিতে পারেন।",
    },
    {
      id: 3,
      title: "মসজিদে খোঁজ (পাত্রের ক্ষেত্রে)",
      description:
        "পাত্র মসজিদে নিয়মিত যান কি না তা জানার জন্য এলাকার ইমাম, মুয়াজ্জিন ও মুরুব্বীদের সঙ্গে কথা বলুন।",
    },
    {
      id: 4,
      title: "শিক্ষাপ্রতিষ্ঠানে খোঁজ (পাত্র/পাত্রী স্টুডেন্ট হলে)",
      description:
        "তাঁর বর্তমান শিক্ষাপ্রতিষ্ঠানে খোঁজ নিন। এতে তাঁর আচার-আচরণ, পড়াশোনায় মনোযোগ, এবং দীনদারির বিষয়টি স্পষ্ট হবে।",
    },
    {
      id: 5,
      title: "কর্মস্থলে খোঁজ (পাত্রের ক্ষেত্রে)",
      description:
        "পাত্রের কর্মস্থলে গিয়ে খোঁজ নিন। এটি তাঁর পেশাদারিত্ব ও কর্মজীবনের অবস্থা সম্পর্কে পরিষ্কার ধারণা দেবে।",
    },
  ];
  const tips = [
    "খোঁজ নিতে সময় নিন। প্রয়োজন হলে ১০-১৫ দিন ব্যয় করুন।",
    "একটি-দুটি জায়গা থেকে নেতিবাচক তথ্য পেলেই হতাশ হবেন না। শত্রুতা বা ব্যক্তিগত কারণে কেউ ভুল তথ্য দিতে পারে।",
    "গুরুত্বপূর্ণ কোনো নেতিবাচক বিষয় থাকলে সেটি উপেক্ষা করবেন না।",
    "কোনো তথ্য শুনলে সেটি যাচাই করে নিশ্চিত হয়ে নিন।",
  ];
  return (
    <div
      className="h-max w-[100%] bg-cover bg-center transition-all duration-1000 py-12 mb-[-41px] rounded-3xl text-gray-800"
      style={{
        backgroundImage: `url(/Images/GuideBG.jpg)`,
      }}
    >
      <header className="py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold underline decoration-double text-gray-900  bg-white w-max px-6  py-4 rounded-lg decoration-pink-400 underline-offset-4 ">
            ~সাধারণ নির্দেশিকা~
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4">
        <GuideSection
          header="১. সতর্কতা:-"
          text="কর্তৃপক্ষ কেবল পাত্র বা পাত্রীর কাছ থেকে বায়োডাটা সংগ্রহ করে এবং আগ্রহী পক্ষের মধ্যে পছন্দ অনুযায়ী বায়োডাটা সরবরাহ করে। তবে, বায়োডাটা যাচাই-বাছাই বা ভেরিফিকেশনের কোনো সুযোগ কর্তৃপক্ষের নেই। তাই আপনাদের প্রতি অনুরোধ, নিজ দায়িত্বে প্রয়োজনীয় যাচাই-বাছাই করে সিদ্ধান্ত নেবেন। আপনাদের অসাবধানতার কারনে কোনো ধরনের সমস্যা বা প্রতারণার শিকার হলে তার সম্পূর্ণ দায়ভার সংশ্লিষ্ট পক্ষের ওপর বর্তাবে। এক্ষেত্রে কর্তৃপক্ষ দুনিয়া বা আখিরাতে কোনোভাবেই দায়ী থাকবে না এবং কারো কাছে জবাবদিহি করতে বাধ্য নয়। এই শর্ত মেনে চলতে রাজি থাকলে তবেই আগ্রহী হন।"
        />{" "}
        <br />
        <GuideSection
          header="২. বায়োডাটা জমা দিতে কত টাকা লাগে:-"
          text="দ্বীনদার পাত্র-পাত্রীর সন্ধান ওয়েবসাইটে সম্পূর্ণ বিনামূল্যে বায়োডাটা জমা দেওয়ার সুযোগ রয়েছে।"
        />
        <br />
        <AddPhotoGuide />
        <br />
        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 underline decoration-double underline-offset-4">
            ৪. পাত্র/পাত্রীর বায়োডাটায় আগ্রহী হলে কিভাবে যোগাযোগ করবো?
          </h2>
          <ul className="list-disc list-inside text-gray-800 space-y-2 text-lg">
            <li>এক্ষেত্রে আপনাকে নির্দিষ্ট ফি প্রদান করতে হবে।</li>
            <li>
              প্রথমে আমাদের বিকাশ/নগদ পার্সোনাল নাম্বারে{" "}
              <s
                onClick={() =>
                  alert("বর্তমানে 3০০ টাকা ডিসকাউন্ট দেওয়া হচ্ছে!")
                }
                title="বর্তমানে 3০০ টাকা ডিসকাউন্ট দেওয়া হচ্ছে!"
                className="px-2 cursor-pointer text-pink-600"
              >
                ৪০০
              </s>{" "}
              <span className="underline underline-offset-[6px] text-xl">
                ১০০ (একশত)
              </span>{" "}
              টাকা সেন্ড মানি করতে হবে।
            </li>
            <li>
              আপনার নিজের বায়োডাটা জমা দেওয়া থাকলে ৫০% ডিসকাউন্টে{" "}
              <s className="px-2 cursor-pointer text-pink-600">১০০</s>
              <span className="underline underline-offset-[6px] text-xl">
                ৫০ (পঞ্চাশ)
              </span>
              {"  "}
              টাকায় একটি বায়োডাটার যোগাযোগ তথ্য নিতে পারবেন।
            </li>
            <p className="text-pink-600 text-xl">
              ("ছবিযুক্ত বায়োডাটার যোগাযোগ তথ্য নিতে হলে{" "}
              <span className="underline underline-offset-[6px] text-xl">
                ২০০ (দুইশত)
              </span>{" "}
              টাকা সেন্ড মানি করতে হবে।")
            </p>
            <li>
              আমাদের বিকাশ/নগদ পার্সোনাল নাম্বার:-{" "}
              <span className="font-mono text-xl">01831-606920</span>
            </li>
            <li>
              টাকা সেন্ড মানি করার পর ট্রান্জেকশন আইডি আমাদের ফেসবুক পেইজে মেসেজ
              করে দিবেন।
            </li>
            <li>
              তারপর আপনাকে আপনার পছন্দকৃত পাত্র/পাত্রীর সাথে যোগাযোগ করিয়ে দেওয়া
              হবে ইনশাহ্আল্লাহ।
            </li>
            <li>বিবাহকে সহজ করাই আমাদের মূল লক্ষ্য।</li>
          </ul>
        </section>{" "}
        {/*  */}
        {/*  */}
        <br />
        <div className="bg-white shadow-md rounded-lg p-6">
          <h1 className="text-xl font-semibold text-gray-800 mb-2 underline decoration-double underline-offset-4">
            ৫. বিয়ের আগে সঠিকভাবে খোঁজ নেওয়ার গুরুত্ব ও পদ্ধতি
          </h1>
          <p className="text-gray-800 text-lg  indent-4">
            বিয়ের মতো গুরুত্বপূর্ণ সিদ্ধান্ত নেওয়ার আগে শুধু বায়োডাটা দেখে পছন্দ
            করাই যথেষ্ট নয়। বিষয়টি খুবই সিরিয়াস এবং এর প্রভাব দুনিয়া ও আখিরাত
            উভয়ের উপর পড়ে। তাই বিয়ের আগে সঠিকভাবে খোঁজ নেওয়া আবশ্যক।
          </p>
          <div className="space-y-3 mt-2">
            {steps.map((step) => (
              <div key={step.id} className="bg-white">
                <div>
                  <h2 className="text-xl text-gray-900 font-semibold">
                    * {step.title}
                  </h2>
                  <p className="text-gray-800 text-lg">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="shadow-md p-4 rounded-lg mt-3">
            <h2 className="text-xl font-bold flex items-center gap-2">
              ~ গুরুত্বপূর্ণ পরামর্শ
            </h2>
            <ul className="list-disc pl-5 space-y-1">
              {tips.map((tip, index) => (
                <li key={index} className="text-gray-800 text-lg">
                  {tip}
                </li>
              ))}
            </ul>
          </div>{" "}
          <br />
          <div className=" shadow-md p-4 rounded-lg">
            <h2 className="text-xl font-bold flex items-center gap-2">
              ~ পরবর্তী ধাপ
            </h2>
            <p className="text-gray-800 text-lg">
              খোঁজ নেওয়ার পর যদি মোটের উপর ভালো খবর পাওয়া যায়, তাহলে ইস্তিখারা
              করুন। আল্লাহ যদি তাতে ভালো ইঙ্গিত দেন, তখনই বিয়ের সিদ্ধান্তের দিকে
              এগোন।
            </p>
          </div>
          <div className="text-center mt-4">
            <p className="text-md text-pink-600">
              আপনার যদি খোঁজ নেওয়ার আরও পদ্ধতি জানা থাকে, তাহলে সেভাবে খোঁজ নিয়ে
              দেখুন।
            </p>
            <p className="text-xl underline underline-offset-8 decoration-wavy decoration-purple-800 text-gray-800 font-semibold animatedText">
              জাযাকুমুল্লাহু খাইরান।
            </p>
          </div>
        </div>
        <br />
        <GuideSection
          header="৬. কিভাবে ক্রয়কৃত বায়োডাটার টাকা ফেরত পাবো?"
          text="কোনো বায়োডাটার যোগাযোগ তথ্য নিয়ে যোগাযোগ করতে ব্যর্থ হলে আপনি টাকা ফেরত পাবেন অথবা আপনি চাইলে অন্য একটি বায়োডাটার যোগাযোগ তথ্য নিতে পারবেন। তবে বিপরীত পক্ষ যদি তাদের ব্যক্তিগত অপছন্দের কারণে আপনার প্রস্তাব প্রত্যাখ্যান করে তাহলে টাকা ফেরত পাবেন না।"
        />{" "}
        <br />
        <GuideSection
          header="৭. আমার জমা দেওয়া বায়োডাটা এডিট করবেন কিভাবে?"
          text="আপনার জমা হওয়া বায়োডাটা এডিট করতে আমাদের ফেসবুক পেইজে মেসেজ দিয়ে বলুন।"
        />{" "}
        <br />
        <GuideSection
          header="৮. আমার জমা দেওয়া বায়োডাটা ডিলিট করবো কিভাবে?"
          text="আপনার জমা হওয়া বায়োডাটা ডিলিট করাতে আমাদের ফেসবুক পেইজে মেসেজ দিয়ে বলুন।"
        />
      </main>
    </div>
  );
}
