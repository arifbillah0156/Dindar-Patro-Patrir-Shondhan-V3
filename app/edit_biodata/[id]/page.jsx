import React from "react";
import FormSectionForEdit from "./FormSection";
import GetBiodataWithId from "./GetData";

const page = async ({ params }) => {
  const { id } = await params;

  const fullData = await GetBiodataWithId(id);

  return (
    <div className="min-h-screen">
      {fullData && <FormSectionForEdit biodata={fullData} uid={id} />}
    </div>
  );
};

export default page;
