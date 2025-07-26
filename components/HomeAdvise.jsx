const adviseList = [
  {
    id: 1,
    title: "বিয়ে সুন্নত",
    text: "বিয়ে করা রাসূলের সুন্নত এবং তা থেকে বিমুখ হওয়া ইসলামের মূলনীতি থেকে বিচ্যুতি।",
  },
  {
    id: 2,
    title: "বিয়ে যৌবন রক্ষার মাধ্যম",
    text: "যুবকদের জন্য বিয়ে চক্ষু ও চরিত্র সংযমে সহায়ক এবং নৈতিক নিরাপত্তা নিশ্চিত করে।",
  },
  {
    id: 3,
    title: "ধর্ম দেখে বিয়ে করা",
    text: "জীবনসঙ্গী নির্বাচনে চরিত্র ও ধর্মীয়তা সর্বোচ্চ গুরুত্ব দেওয়া উচিত।",
  },
  {
    id: 4,
    title: "বিয়ের মাধ্যমে ঈমান পূর্ণ হয়",
    text: "বিয়ে মানুষের দ্বীনের অর্ধেক পূর্ণ করে, বাকিটা আল্লাহভীতির মাধ্যমে রক্ষা করা জরুরি।",
  },
  {
    id: 5,
    title: "বিয়ে করা ইবাদত",
    text: "বিয়ে শুধু সামাজিক প্রয়োজন নয়, বরং এটি একটি ইবাদতের অংশও বটে।",
  },
  {
    id: 6,
    title: "আল্লাহ রিজিক বৃদ্ধি করেন",
    text: "বিয়ের মাধ্যমে আল্লাহ অভাব দূর করে রিজিক বৃদ্ধি করেন, তাই দারিদ্র্যকে ভয় করা অনুচিত।",
  },
  {
    id: 7,
    title: "বিয়ের মাধ্যমে রহমত আসে",
    text: "আল্লাহ তাঁদের সাহায্য করেন, যারা তাঁর সন্তুষ্টির উদ্দেশ্যে বিবাহবন্ধনে আবদ্ধ হয়।",
  },
  {
    id: 8,
    title: "সন্তান জন্মানো পছন্দনীয়",
    text: "দাম্পত্য জীবনে সন্তান লাভ ইসলামিক দৃষ্টিতে প্রশংসনীয় এবং এটি উম্মতের শক্তি বৃদ্ধি করে।",
  },
  {
    id: 9,
    title: "বিয়ে হচ্ছে পবিত্রতা রক্ষার মাধ্যম",
    text: "বিয়ে মানুষকে নৈতিকভাবে বিশুদ্ধ ও আত্মসংযমে সহায়তা করে।",
  },
  {
    id: 10,
    title: "তরুণদের জন্য বিয়ে উত্তম নিয়ন্ত্রণ",
    text: "যারা বিয়েতে অক্ষম, তাদের জন্য রোজা যৌন চাহিদা নিয়ন্ত্রণের কার্যকর বিকল্প।",
  },
];

export default function AdvisePage() {
  return (
    <section className="h-full py-10 px-4 md:px-12">
      <h1 className="text-3xl md:text-5xl font-bold text-center text-green-600  mb-6 galada-regular">
        👨‍👩‍👧‍👦 বিয়ে সম্পর্কিত গুরুত্বপূর্ণ উপদেশ
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {adviseList.map((advise) => (
          <div
            key={advise.id}
            className="bg-white border  p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ring-2 ring-offset-4 hover:ring-4"
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
