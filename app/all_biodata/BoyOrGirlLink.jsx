import Link from "next/link";

export default function BoyOrGirlLink() {
  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 w-full max-w-max text-xl">
        <Link
          href={"/all_boy_biodata"}
          className="bg-blue-500 text-white p-6 rounded-lg shadow-md bg-cover"
          style={{
            backgroundImage: `url(/Images/PlusBioBG.jpg)`,
          }}
        >
          সমস্ত পাত্রের বায়োডাটা →
        </Link>
        <Link
          href={"/all_girl_biodata"}
          className="bg-green-500 text-white p-6 rounded-lg shadow-md bg-cover "
          style={{
            backgroundImage: `url(/Images/PlusBioBG.jpg)`,
          }}
        >
          সমস্ত পাত্রীর বায়োডাটা →
        </Link>
      </div>
    </div>
  );
}
