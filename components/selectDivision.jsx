import React from "react";

export default function SelectDivision({ all }) {
  return (
    <>
      {all ? <option value="">সকল</option> : ""}
      <option value="ঢাকা">ঢাকা বিভাগ</option>
      <option value="চট্টগ্রাম">চট্টগ্রাম বিভাগ</option>
      <option value="রাজশাহী">রাজশাহী বিভাগ</option>
      <option value="খুলনা">খুলনা বিভাগ</option>
      <option value="বরিশাল">বরিশাল বিভাগ</option>
      <option value="সিলেট">সিলেট বিভাগ</option>
      <option value="রংপুর">রংপুর বিভাগ</option>
      <option value="ময়মনসিংহ">ময়মনসিংহ বিভাগ</option>
    </>
  );
}
