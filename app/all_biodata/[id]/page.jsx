import Link from "next/link.js";
import data from "./getData.jsx";
import Text from "./single_text.jsx";
import Text2 from "./single_text_2.jsx";
import ImageSection from "./ImageSection.jsx";
export default async function SingleBiodata({ params }) {
  const { id } = await params;
  const fullData = await data(id);

  const {
    boyOrGirl,
    formID,
    name,
    age,
    height,
    weight,
    birthDate,
    address,
    permanentAddress,
    growupAddress,
    bodyColor,
    bloodGroup,
    islamiShoriah,
    dinerKaj,
    watchNatok,
    sharirikRog,
    marriedStatus,
    dari,
    porda,
    quran,
    namaj,
    mazhab,
    division,
    sscEducation,
    hscEducation,
    honorsEducation,
    education,
    selectMediumOfEducation,
    selectOccupation,
    occupation,
    monthlyIncome,
    shokh,
    wifePorda,
    wifeEducation,
    wifeJob,
    wifeLeaving,
    marriedGift,
    personalDetails,
    familyDetails,
    partnerDetails,
    fatherOccupation,
    motherOccupation,
    brotherDetails,
    sisterDetails,
    mamaDetails,
    familyDiniPoribesh,
    guardianPermission,
    new1,
    new2,
    new3,
    new4,
    new5,
    new6,
    new7,
    new8,
  } = fullData;

  return (
    <div>
      <div className="flex flex-col items-center justify-center bg-gray-100 p-2 md:p-4 mt-4  border rounded-xl md:rounded-3xl">
        <div className="bg-white shadow-md rounded-lg p-3 md:p-6 max-w-4xl w-full">
          <div className="p-4 text-3xl bg-blue-100 text-blue-700 rounded-md shadow-md tracking-wider font-mono text-center">
            ID: "{formID}"
          </div>{" "}
          {fullData.new9 && (
            <ImageSection img={fullData.new9} formID={formID} />
          )}
          <br />
          <h1 className="text-3xl text-center font-bold mb-6 underline underline-offset-[9px] decoration-double text-purple-900 ">
            “সম্পূর্ণ বায়োডাটা”
          </h1>{" "}
          <br />
          <div>
            {" "}
            <div className="border-y-4 rounded-lg border-green-500">
              <h3 className="text-center mt-4 mb-3 text-2xl text-green-600 underline decoration-wavy underline-offset-4 font-bold">
                ব্যাক্তিগত তথ্য
              </h3>{" "}
              <hr />
              <Text text={"নাম"} value={name} /> <hr />
              <Text text={"বয়স"} value={age} />
              <hr />
              <Text text={"জন্ম তারিখ"} value={birthDate} />
              <hr />
              <Text text={"বৈবাহিক অবস্থা"} value={marriedStatus} />
              <hr />
              <Text text={"উচ্চতা"} value={height} />
              <hr />
              <Text text={"শিক্ষা মাধ্যম"} value={selectMediumOfEducation} />
              <hr />
              <Text
                text={"শিক্ষাগত যোগ্যতা (এসএসসি/সমমান)"}
                value={sscEducation}
              />
              <hr />
              <Text
                text={"শিক্ষাগত যোগ্যতা (এইচএসসি/সমমান)"}
                value={hscEducation}
              />
              <hr />
              <Text
                text={"শিক্ষাগত যোগ্যতা (অনার্স/সমমান)"}
                value={honorsEducation}
              />
              <hr />
              <Text text={"শিক্ষাগত যোগ্যতা (অন্যান্য)"} value={education} />
              <hr />
              <Text text={"পেশা"} value={selectOccupation} />
              <hr />
              <Text text={"পেশার বিস্তারিত বিবরণ"} value={occupation} />
              <hr />
              <Text text={"মাসিক ইনকাম"} value={monthlyIncome} />
              <hr />
              <Text text={"ওজন"} value={weight} />
              <hr />
              <Text text={"গায়ের রং"} value={bodyColor} />
              <hr />
              <Text text={"মাহরাম/নন মাহরাম মেনে পর্দা করেন?"} value={porda} />
              <hr />
              <Text text={"সহিহ-শুদ্ধভাবে কোরআন তেলোয়াত করেন?"} value={quran} />
              <hr />
              <Text text={"নিয়মিত পাচঁ ওয়াক্ত নামাজ পড়েন?"} value={namaj} />
              <hr />
              <Text text={"কোন মাযহাবের অনুসারি?"} value={mazhab} />
              <hr />
              <Text
                text={"অন্যান্য ইসলামি শরিয়াহ্ বিধিবিধান মেনে চলেন?"}
                value={islamiShoriah}
              />
              <hr />
              <Text
                text={"দ্বীনের কোনো বিশেষ মেহনতে যুক্ত আছেন?"}
                value={dinerKaj}
              />
              <hr />
              <Text
                text={"নাটক/সিনেমা/সিরিয়াল/গান দেখেন বা শুনেন?"}
                value={watchNatok}
              />
              <hr />
              <Text
                text={"কোনো মানসিক/শারিরিক রোগ/অঙ্গহানী আছে কিনা"}
                value={sharirikRog}
              />
              <hr />
              <Text
                text={"শখ, পছন্দ, অপছন্দ, রুচিবোধ, স্বপ্ন ইত্যাদি"}
                value={shokh}
              />
              <hr />
              <Text
                text={"ব্যাক্তিগত অন্যান্য তথ্য"}
                value={personalDetails}
              />{" "}
              <hr />
              <Text text={"রক্তের গ্রুপ"} value={bloodGroup} />
              {boyOrGirl === "পাত্র" && (
                <div>
                  <hr />
                  <Text text={"সুন্নতি দাড়ি আছে?"} value={dari} />
                  <hr />
                  <Text
                    text={"বিয়ের পর স্ত্রীকে পর্দায় রাখবেন?"}
                    value={wifePorda}
                  />{" "}
                  <hr />
                  <Text
                    text={"বিয়ের পর স্ত্রীকে পড়াশোনা করতে দিবেন?"}
                    value={wifeEducation}
                  />{" "}
                  <hr />
                  <Text
                    text={"বিয়ের পর স্ত্রীকে চাকরি করতে দিতে চান?"}
                    value={wifeJob}
                  />{" "}
                  <hr />
                  <Text
                    text={"বিয়ের পর স্ত্রীকে নিয়ে কোথায় থাকতে চান?"}
                    value={wifeLeaving}
                  />
                </div>
              )}
            </div>{" "}
            <br /> <br />
            <div className="border-y-4 rounded-lg border-purple-500">
              <h3 className="text-center mt-4 mb-3 text-2xl text-purple-600 underline decoration-wavy underline-offset-4 font-bold">
                ঠিকানা
              </h3>{" "}
              <hr />
              <Text text={"বিভাগ"} value={division} />
              <hr />
              <Text text={"বর্তমান ঠিকানা"} value={address} />
              <hr />
              <Text text={"স্থায়ী ঠিকানা"} value={permanentAddress} />
              <hr />
              <Text text={"কোথায় বড় হয়েছেন?"} value={growupAddress} />
            </div>
            <br /> <br />{" "}
            <div className="border-y-4 rounded-lg border-pink-500">
              <h3 className="text-center mt-4 mb-3 text-2xl text-pink-600 underline decoration-wavy underline-offset-4 font-bold">
                পারিবারিক তথ্য
              </h3>{" "}
              <hr />
              <Text text={"পিতার পেশার বিবরণ"} value={fatherOccupation} />
              <hr />
              <Text text={"মাতার পেশার বিবরণ"} value={motherOccupation} />
              <hr />
              <Text text={"ভাইদের তথ্য"} value={brotherDetails} />
              <hr />
              <Text text={"বোনদের তথ্য"} value={sisterDetails} />
              <hr />
              <Text text={"চাচা এবং মামাদের তথ্য"} value={mamaDetails} />
              <hr />
              <Text
                text={"পারিবারিক অর্থনৈতিক অবস্থার বর্ণনা"}
                value={familyDetails}
              />
              <hr />
              <Text
                text={"পারিবারিক দ্বীনি পরিবেশ"}
                value={familyDiniPoribesh}
              />
            </div>
            <br /> <br />{" "}
            <div className="border-y-4 rounded-lg border-cyan-500">
              <h3 className="text-center mt-4 mb-3 text-2xl text-cyan-600 underline decoration-wavy underline-offset-4 font-bold">
                প্রত্যাশিত জীবনসঙ্গী
              </h3>{" "}
              <hr />
              <Text text={"প্রত্যাশিত জীবনসঙ্গীর বয়স কত চান?"} value={new1} />
              <hr />
              <Text
                text={"প্রত্যাশিত জীবনসঙ্গীর উচ্চতা কত চান?"}
                value={new2}
              />
              <hr />
              <Text text={"প্রত্যাশিত জীবনসঙ্গীর ওজন কত চান?"} value={new3} />
              <hr />
              <Text
                text={"প্রত্যাশিত জীবনসঙ্গীর গায়ের রং কেমন চান?"}
                value={new4}
              />
              <hr />
              <Text
                text={"প্রত্যাশিত জীবনসঙ্গীর জেলা কোথায় চান?"}
                value={new5}
              />
              <hr />
              <Text
                text={"প্রত্যাশিত জীবনসঙ্গীর শিক্ষাগত যোগ্যতা কেমন চান?"}
                value={new6}
              />
              <hr />
              <Text
                text={"প্রত্যাশিত জীবনসঙ্গীর বৈবাহিক অবস্থা কেমন চান?"}
                value={new7}
              />
              <hr />
              <Text
                text={"প্রত্যাশিত জীবনসঙ্গী সম্পর্কে অন্যান্য তথ্য"}
                value={partnerDetails}
              />
              <hr />
              <Text
                text={"অপর পক্ষের কাছ থেকে কোনো উপহার আশা করবেন?"}
                value={marriedGift}
              />
              <hr />
              <Text
                text={"অভিভাবকের সম্মতি আছে কিনা?"}
                value={guardianPermission}
              />
            </div>
            <br /> <br />{" "}
            <div className="border-y-4 rounded-lg border-blue-500">
              <h3 className="text-center mt-4 mb-3 text-2xl text-blue-600 underline decoration-wavy underline-offset-4 font-bold">
                যোগাযোগের তথ্য
              </h3>{" "}
              <hr />
              <Text
                text={"যোগাযোগের তথ্য"}
                value={"যোগাযোগের তথ্য পেতে আমাদের ফেসবুক পেইজে মেসেজ দিন।"}
              />
              <div className="pb-4 pl-2 md:text-center">
                <Link
                  href="/guide"
                  className="text-lg py-2 underline text-blue-700"
                >
                  * যোগাযোগের নিয়ম জানুন
                </Link>{" "}
                <br />
                <Link
                  href="https://www.facebook.com/DeendarPatraPatrisandhan"
                  passHref
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg py-2 underline text-blue-700"
                >
                  * আমাদের ফেসবুক পেইজে যেতে এখানে ক্লিক করুন
                </Link>
              </div>
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}
