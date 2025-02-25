export function SubmitBtnDisable() {
  return (
    <>
      <div className="">
        <button
          type="button"
          onClick={() => alert("আপনাকে অবশ্যই উক্ত শর্তের সাথে সম্মত হতে হবে।")}
          className="w-full text-3xl  bg-gradient-to-r from-blue-300 to-purple-300 text-white py-3 rounded-xl hover:shadow-lg transform hover:scale-105 transition-transform duration-300 hover:underline cursor-not-allowed"
        >
          জমা দিন
        </button>
      </div>
    </>
  );
}

export default function SubmitBtn() {
  return (
    <>
      <div className="">
        <button
          type="submit"
          className="w-full text-3xl  bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl hover:shadow-lg transform hover:scale-105 transition-transform duration-300 hover:underline"
        >
          জমা দিন
        </button>
      </div>
    </>
  );
}
