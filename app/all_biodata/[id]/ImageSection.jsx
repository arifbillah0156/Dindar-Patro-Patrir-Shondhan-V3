import Image from "next/image";
import Link from "next/link";
import React from "react";
import ZoomIcon from "@/public/Images/ZoomIcon.png";

const ImageSection = ({ img, formID }) => {
  return (
    <div className="flex justify-center mt-2">
      <br />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 w-max">
        {img.map((imgUrl) => {
          return (
            <div
              key={imgUrl}
              className="rounded-lg shadow p-2 text-center relative h-max"
            >
              <Image
                src={`/BiodataImages/${formID}/${imgUrl}`}
                alt="Image"
                width={300}
                height={300}
                className="object-cover"
              />
              <div className="absolute inset-0  text-white text-start text-3xl p-4">
                <Link
                  href={`/BiodataImages/${formID}/${imgUrl}`}
                  passHref
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  <div className="text-sm border w-max p-2 rounded-md bg-white text-blue-600">
                    {/* <p>
                      <span>◤</span>
                      <span>◥</span>
                    </p>
                    <p>
                      <span>◣</span>
                      <span>◢</span>
                    </p> */}
                    <Image src={ZoomIcon} alt="Zoom" width={16} height={16} />
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageSection;
