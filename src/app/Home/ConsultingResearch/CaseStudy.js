import React from "react";
import caseImg from "../../../../public/teamwork.jpg";

import { Playfair_Display } from "next/font/google";
import Image from "next/image";
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
});

function CaseStudy() {
  const caseStudiesData = [
    {
      title: "Consulting & Research",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      image: caseImg,
      link: "",
    },
    {
      title: "Consulting & Research",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      image: caseImg,
      link: "",
    },
    {
      title: "Consulting & Research",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      image: caseImg,
      link: "",
    },
  ];

  return (
    <div className="md:py-20 py-10  commonContainer">
      <h1
        className={`md:text-7xl text-[rgb(16,29,45)] text-2xl font-extrabold text-center underline pb-10 ${playfair.className}`}
      >
        Case Studies
      </h1>
      <div className="flex gap-10 flex-col">
        {caseStudiesData.map((item, index) => (
          <div
            key={index}
            className={` flex gap-10 ${
              index % 2 === 0 ? " justify-end" : " justify-start"
            }`}
          >
            <div
              className={`flex md:w-[60%] w-[100%] md:flex-row flex-col  justify-between bg-white  drop-shadow-2xl shadow-md rounded-lg  p-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 `}
            >
              <div className=" md:w-[60%] w-full flex gap-4 flex-col items-start">
                <h1
                  className={`md:text-2xl text-[rgb(16,29,45)] text-lg font-extrabold ${playfair.className}`}
                >
                  {item.title}
                </h1>
                <p className=" text-justify text-[rgb(148,163,184)]">
                  {item.para}
                </p>
              </div>
              <div className="md:w-[35%] w-full h-full">
                <Image src={caseImg} alt="caseImage" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CaseStudy;
