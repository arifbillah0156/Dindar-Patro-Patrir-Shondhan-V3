import MenCardIcon from "@/public/Images/MenCardIcon.png";
import WomenCardIcon from "@/public/Images/WomenCardIcon.png";
import Image from "next/image";
import Link from "next/link";

export default function BiodataCard({ dataName, dataObj }) {
  const {
    formID,
    boyOrGirl,
    name,
    age,
    // division,
    selectOccupation,
    // marriedStatus,
    selectMediumOfEducation,
  } = dataObj;

  return (
    <div className="border rounded-3xl hover:ring-4 hover:ring-purple-700 ring-offset-2 duration-200">
      {/* Header */}
      <div className="w-full flex justify-center   bg-purple-700 py-3 rounded-t-3xl">
        {boyOrGirl === "পাত্র" ? (
          <Image
            src={MenCardIcon}
            alt="Men Card Icon"
            placeholder="blur"
            height={100}
            className="p-2 bg-white rounded-full mt-1"
          />
        ) : (
          <Image
            src={WomenCardIcon}
            alt="Women Card Icon"
            placeholder="blur"
            height={110}
            className="p-2 bg-white rounded-full mt-1"
          />
        )}
      </div>
      <div className="bg-purple-700 text-white text-center">
        <p className="text-xl underline decoration-dotted underline-offset-4">
          বায়োডাটা ID
        </p>
        <div className="pb-2 pt-1">
          <div className="pb-4 pt-1">
            <p className="text-xl underline underline-offset-4 font-mono">
              "{formID}"
            </p>
          </div>{" "}
          {dataObj.new9 && (
            <div className="pb-2">
              <p className="text-lg underline decoration-wavy underline-offset-8 mt-[-14px] mb-2">
                “ছবিযুক্ত বায়োডাটা”
              </p>
            </div>
          )}
        </div>{" "}
      </div>

      {/* Middle */}
      <div className="bg-white text-black  rounded-md w-full">
        <div className="flex text-xl gap-3 px-3  border py-2">
          <p className="underline underline-offset-2 decoration-wavy font-bold text-pink-700 pl-4">
            নাম:{""}
          </p>
          <p className=" text-purple-950">{name}</p>
        </div>
        {/*  */}

        <div className="flex text-xl gap-3 px-3 border border-t-0 py-2 ">
          <p className="underline underline-offset-2 decoration-wavy font-bold text-pink-700 pl-4">
            বয়স:{""}
          </p>{" "}
          <p className=" text-purple-950">{age}</p>
        </div>
        {/*  */}
        <div className="flex text-xl gap-3 px-3 border border-t-0  py-2">
          <p className="underline underline-offset-2 decoration-wavy font-bold text-pink-700 pl-4">
            শিক্ষা মাধ্যম:{""}
          </p>
          <p className=" text-purple-950">{selectMediumOfEducation}</p>
        </div>
        <div className="flex text-xl gap-3 px-3 border border-t-0  py-2">
          <p className="underline underline-offset-2 decoration-wavy font-bold text-pink-700 pl-4">
            পেশা:{""}
          </p>
          <p className=" text-purple-950">{selectOccupation}</p>
        </div>
      </div>
      {/* Footer */}
      <div className="text-center m-6">
        <Link
          href={`/all_biodata/${dataName}`}
          className="text-white p-3 px-6 rounded-lg text-lg hover:ring-2 ring-offset-2 ring-purple-700 hover:underline bg-cover duration-100"
          style={{
            backgroundImage: "url(/Images/PlusBioBG.jpg)",
          }}
        >
          বিস্তারিত দেখুন
        </Link>
      </div>
    </div>
  );
}
