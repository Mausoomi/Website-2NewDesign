import React from "react";
import { Playfair_Display } from "next/font/google";
import { FaInfo } from "react-icons/fa";
import { FaCloud } from "react-icons/fa";
import { GiSpiderWeb } from "react-icons/gi";
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
});

function Expertise() {
  const ExpertiseData = [
    {
      icon: <FaInfo />,
      title: "cloud solutions",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
    },
    {
      icon: <FaCloud />,
      title: "AI",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
    },
    {
      icon: <GiSpiderWeb />,
      title: "web",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
    },
  ];

  return (
    <div className="commonContainer py-10">
      <h1
        className={`md:text-5xl text-[rgb(16,29,45)] text-2xl font-extrabold text-center underline pb-10 ${playfair.className}`}
      >
        Our Expertise
      </h1>

      <p className="text-[rgb(148,163,184)] md:text-lg text-sm text-center">
        Our landing page template works on all devices, so you only have to set
        it up once, and get beautiful results forever. so you only have to set
        it up once, and get beautiful results forever.
      </p>

      <div className=" flex justify-between  gap-6 md:flex-row  flex-col py-10 md:py-20 ">
        {ExpertiseData.map((item, index) => (
          <div
            key={index}
            className="  flex flex-col md:w-[30%] w-[100%] gap-6 border-[0.5px] border-[rgb(223,233,255)] p-4 rounded-lg shadow-[0_0_10px_rgba(29,78,216,0.6)]  "
          >
            <div className=" flex gap-4">
              <div className="text-3xl  text-blue-600 ">{item.icon}</div>
              <p className=" font-bold  md:text-2xl text-lg">{item.title}</p>
            </div>
            <div>
              <p className=" text-justify text-sm"> {item.para}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Expertise;
