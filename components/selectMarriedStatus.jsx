import React from "react";

export default function SelectMarriedStatus({ all }) {
  return (
    <>
      {all ? <option>সকল</option> : ""}
      <option value="অবিবাহিত">অবিবাহিত</option>
      <option value="মাসনা/দ্বিতীয় বিবাহ">মাসনা/দ্বিতীয় বিবাহ</option>
      <option value="ডিভোর্সড">ডিভোর্সড</option>
      <option value="বিধবা/বিপত্নীক">বিধবা/বিপত্নীক</option>
    </>
  );
}
