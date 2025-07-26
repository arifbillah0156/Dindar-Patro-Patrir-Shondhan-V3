const funnyMarriageTips = [
  {
    id: 1,
    title: "বিয়ে করো, রান্নার চিন্তা শেষ",
    text: "মুখে রোচে না এমন রান্নাও 'মায়া দিয়ে' খাওয়া শিখে যাবে!",
  },
  {
    id: 2,
    title: "একাকীত্বের অবসান",
    text: "রাতে কেউ আর ‘seen’ না দিয়ে ঘুমাবে না – কারণ সে তোমার পাশেই ঘুমায়!",
  },
  {
    id: 3,
    title: "টাকা গেলে যায় যাক, বউ চাই",
    text: "কেননা সুখ টাকায় না, চায়ের সাথে কেউ ভাগ বসালেই হয়!",
  },
  {
    id: 4,
    title: "বিয়ে করলেই আলহামদুলিল্লাহ বলবে",
    text: "বিয়ে হলে মা-বাবাও বলবে, ‘এবার একটু নিশ্চিন্ত হলাম রে বাবা!’",
  },
  {
    id: 5,
    title: "ফ্রিতেই রুমমেট!",
    text: "লাইফটাইম সাবস্ক্রিপশন, ঝগড়াসহ ফ্রি!",
  },
  {
    id: 6,
    title: "ফেসবুক পোস্টে কমেন্ট কম? বিয়ে করো!",
    text: "বউ কমেন্ট করবে, ‘হ্যান্ডসাম হাবি 🥰’ – আত্মবিশ্বাস হুট করে বেড়ে যাবে!",
  },
  {
    id: 7,
    title: "প্ল্যান ছাড়া ঘোরাঘুরি? অসম্ভব!",
    text: "বিয়ে করো, প্ল্যানিং থাকবে, বাজেট থাকবে, আর পেছনে কেউ বলবে ‘এটাই ভালো ছিল?’",
  },
  {
    id: 8,
    title: "মোবাইলের পাসওয়ার্ডের গুরুত্ব বোঝাবে বিয়ে",
    text: "কারণ এখন সেটা শুধু নিরাপত্তা না, ‘বাঁচার পথ’!",
  },
  {
    id: 9,
    title: "মশারির মধ্যে আলোচনার আসর",
    text: "বিয়ে মানেই রাত জেগে সিরিয়াস আলোচনাঃ কে আগে ঘুমাবে?",
  },
  {
    id: 10,
    title: "জীবনের বাকি গল্প শুরু হয় বিয়েতে",
    text: "‘এক ছিলো ছেলে, সে বিয়ে করল… তারপর?’ — আসল মুভি তখনই শুরু!",
  },
];

export default function FunnyMarriage() {
  return (
    <section className="h-full mt-6 py-4 px-4 md:px-12">
      <h1 className="text-3xl md:text-5xl font-bold text-center text-green-600  mb-6 galada-regular">
        💍 বিয়ে সম্পর্কিত গুরুত্বপূর্ণ টিপস
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {funnyMarriageTips.map((advise) => (
          <div
            key={advise.id}
            className="bg-white  p-6 rounded-xl shadow-md hover:shadow-md transition-all duration-300 hover:shadow-cyan-500 hover:scale-[1.02] ring-2 ring-offset-2 ring-green-600 hover:ring-0"
          >
            <h2 className="text-xl font-semibold text-blue-700  mb-2">
              {advise.title}
            </h2>
            <p className="text-gray-900  mb-3 leading-relaxed text-[17px]">
              {advise.text}
            </p>
            <p className="text-sm text-gray-600  italic">{advise.source}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
