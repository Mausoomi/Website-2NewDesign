import React from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
});
function BenefitSection() {
  const benefitArray = [
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  ];
  return (
    <div className="commonContainer py-10 ">
      <h1 className={`${playfair.className} text-center md:text-7xl text-lg `}>
        Why Choose Us
      </h1>
      <div className="py-10 flex justify-center flex-col items-center">
        {benefitArray.map((item, index) => (
          <div
            key={index}
            className="flex   gap-4 items-center py-4  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
          >
            <FaRegArrowAltCircleRight className="md:text-2xl text-lg" />
            <p className="text-[rgb(148,163,184)] md:text-2xl text-sm">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BenefitSection;
