import ApproveButton from "./approveButton.jsx";
import DeleteButton from "./deleteButton.jsx";
import DeleteButtonForEditBiodata from "./deleteBtnForEditBiodata.jsx";
import EditButton from "./editButton.jsx";
import data from "./getData.jsx";
import Text from "./single_text.jsx";

export default async function SingleBiodata({ params }) {
  const { id } = await params;

  const fullData = await data(id);

  const {
    date,
    boyOrGirl,
    name,
    mobile,
    email,
    age,
    height,
    weight,
    birthID,
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
    guardianPermission,
    shokh,
    wifePorda,
    wifeEducation,
    wifeJob,
    wifeLeaving,
    marriedGift,
    personalDetails,
    familyDetails,
    partnerDetails,
    fbLink,
    extra,
    fatherName,
    fatherOccupation,
    motherOccupation,
    brotherDetails,
    sisterDetails,
    mamaDetails,
    familyDiniPoribesh,
    new1,
    new2,
    new3,
    new4,
    new5,
    new6,
    new7,
    new8,
    new9,
  } = fullData;

  return (
    <div>
      <div className="flex flex-col items-center justify-center bg-gray-100 p-4 text-center border rounded-3xl">
        {/* সংশোধনের আবেদন */}
        {fullData.edit === "true" && (
          <div className="text-2xl text-red-600 p-2">
            <p>
              এটি একটি সংশোধনের আবেদন, এটিকে এপ্রুভ করার পূর্বে প্রথমে আগের
              এপ্রুভ করা বায়োডাটাটি ডিলিট করো।
            </p>
            <p className="text-lg">{fullData.editID}</p>
            <p className="text-blue-600 font-bold text-[28px] underline mb-2">
              ফরম আইডি: {fullData.formID}{" "}
            </p>
            <DeleteButtonForEditBiodata
              dataName={fullData.editID}
              dataUserName={name}
            />
          </div>
        )}

        <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl w-full">
          <h1 className="text-2xl font-bold text-center mb-4 underline underline-offset-8 decoration-double text-gray-900">
            সম্পূর্ণ বায়োডাটা
          </h1>
          <div className="">
            {" "}
            <hr />
            <Text text={"তারিখ"} value={date} />
            <hr />
            <Text text={"পাত্র/পাত্রী"} value={boyOrGirl} />
            <hr />
            <Text text={"নাম"} value={name} />
            <hr />
            <Text text={"বয়স"} value={age} />
            <hr />
            <Text text={"উচ্চতা"} value={height} />
            <hr />
            <Text text={"বৈবাহিক অবস্থা"} value={marriedStatus} />
            <hr />
            <Text text={"শিক্ষা মাধ্যম"} value={selectMediumOfEducation} />
            <hr />
            <Text text={"শিক্ষাগত যোগ্যতা"} value={sscEducation} />
            <hr />
            <Text text={"শিক্ষাগত যোগ্যতা"} value={hscEducation} />
            <hr />
            <Text text={"শিক্ষাগত যোগ্যতা"} value={honorsEducation} />
            <hr />
            <Text text={"শিক্ষাগত যোগ্যতা"} value={education} />
            <hr />
            <Text text={"পেশা"} value={selectOccupation} />
            <hr />
            <Text text={"পেশার বিস্তারিত বিবরণ"} value={occupation} />
            <hr />
            <Text text={"মাসিক ইনকাম"} value={monthlyIncome} />
            <hr />
            <Text text={"আপনার ওজন"} value={weight} />
            <hr />
            <Text text={"গায়ের রং"} value={bodyColor} />
            <hr />
            <Text text={"মাহরাম/নন মাহরাম মেনে পর্দা"} value={porda} />
            <hr />
            <Text text={"সুন্নতি দাড়ি"} value={dari} />
            <hr />
            <Text text={"সহিহ-শুদ্ধভাবে কোরআন তেলোয়াত"} value={quran} />
            <hr />
            <Text text={"নিয়মিত পাচঁ ওয়াক্ত নামাজ"} value={namaj} />
            <hr />
            <Text text={"মাযহাব অনুসরণ"} value={mazhab} />
            <hr />
            <Text
              text={"অন্যান্য ইসলামি শরিয়াহ্ বিধিবিধান মেনে চলা"}
              value={islamiShoriah}
            />
            <hr />
            <Text
              text={"দ্বীনের কোনো বিশেষ মেহনতে যুক্ত থাকা"}
              value={dinerKaj}
            />
            <hr />
            <Text
              text={"নাটক/সিনেমা/সিরিয়াল/গান দেখা বা শুনা"}
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
            <Text text={"ব্যাক্তিগত অন্যান্য তথ্য"} value={personalDetails} />
            <hr />
            <Text text={"রক্তের গ্রুপ"} value={bloodGroup} />
            <hr />
            <Text text={"বিভাগ"} value={division} />
            <hr />
            <Text text={"বর্তমান ঠিকানা"} value={address} />
            <hr />
            <Text text={"স্থায়ী ঠিকানা"} value={permanentAddress} />
            <hr />
            <Text text={"কোথায় বড় হয়েছেন"} value={growupAddress} />
            <hr />
            <Text text={"অভিভাবকের সম্মতি"} value={guardianPermission} />
            <hr />
            <Text text={"বিয়ের পর স্ত্রীকে পর্দায় রাখবেন?"} value={wifePorda} />
            <hr />
            <Text
              text={"বিয়ের পর স্ত্রীকে পড়াশোনা করতে দিবেন?"}
              value={wifeEducation}
            />
            <hr />
            <Text
              text={"বিয়ের পর স্ত্রীকে চাকরি করতে দিতে চান?"}
              value={wifeJob}
            />
            <hr />
            <Text
              text={"বিয়ের পর স্ত্রীকে নিয়ে কোথায় থাকতে চান?"}
              value={wifeLeaving}
            />
            <hr />
            <Text
              text={"অপর পক্ষের কাছ থেকে কোনো উপহার আশা করবেন?"}
              value={marriedGift}
            />
            <hr />
            <Text text={"প্রত্যাশিত জীবনসঙ্গীর বয়স কত চান?"} value={new1} />
            <hr />
            <Text text={"প্রত্যাশিত জীবনসঙ্গীর উচ্চতা কত চান?"} value={new2} />
            <hr />
            <Text text={"প্রত্যাশিত জীবনসঙ্গীর ওজন কত চান?"} value={new3} />
            <hr />
            <Text
              text={"প্রত্যাশিত জীবনসঙ্গীর গায়ের রং কেমন চান?"}
              value={new4}
            />
            <hr />
            <Text text={"প্রত্যাশিত জীবনসঙ্গীর জেলা কোথায় চান?"} value={new5} />
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
            <Text text={"পিতার নাম"} value={fatherName} />
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
            <Text text={"পারিবারিক দ্বীনি পরিবেশ"} value={familyDiniPoribesh} />
            <hr />
            <Text text={"অভিভাবকের সম্মতি"} value={guardianPermission} />
            <hr />
            <Text text={"জন্ম নিবন্ধন নাম্বার"} value={birthID} />
            <hr />
            <Text text={"জন্ম তারিখ"} value={birthDate} />
            <hr />
            <Text text={"মোবাইল নাম্বার"} value={mobile} />
            <hr />
            <Text text={"ই-মেইল"} value={email} />
            <hr />
            <Text text={"ফেসবুক"} value={fbLink} />
            <hr />
            <Text text={"এক্সট্রা কথা"} value={extra} />
            <hr />
          </div>{" "}
          <br /> <br />
          <div className="w-full grid justify-between grid-cols-2 gap-4 items-center">
            <ApproveButton dataObj={fullData} dataName={id} />
            <DeleteButton dataName={id} dataUserName={name} />
          </div>
          <div>
            <EditButton dataObj={fullData} dataName={id} />
          </div>
        </div>
      </div>
    </div>
  );
}
