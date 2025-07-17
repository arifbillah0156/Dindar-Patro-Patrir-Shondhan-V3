import Link from "next/link";

export default function SubmitWelcome({ name }) {
  return (
    <>
      <div className="text-center">
        <h3 className="text-4xl font-semibold text-green-600 underline underline-offset-8 decoration-wavy mb-6  galada-regular">
          ধন্যবাদ
        </h3>{" "}
        <h3 className="text-3xl font-semibold text-pink-600  mb-3 animatedText">
          {name}
        </h3>{" "}
        <hr />
        <p className="text-gray-800 pt-4 pb-2 text-lg">
          “আপনার বায়োডাটাটি পেন্ডিং আছে। সব তথ্য সঠিক হলে এপ্রুভ করা হবে। আপনার
          বায়োডাটায় ছবি যুক্ত করতে চাইলে আমাদের ফেসবুক পেইজে মেসেজ দিন। আমাদের
          পেইজে মেসেজ দিতে নিচের লিংকে ক্লিক করুন।”
        </p>
        <hr />
        <Link
          href="https://www.facebook.com/DeendarPatraPatrisandhan"
          passHref
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-xl text-blue-500 underline-offset-4"
        >
          <p className="mt-2"></p>
          <mark className="p-2 rounded-lg ">“ক্লিক করুন”</mark>
        </Link>
      </div>
    </>
  );
}
