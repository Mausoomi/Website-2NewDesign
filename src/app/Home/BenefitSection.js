import React from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { Playfair_Display } from "next/font/google";
import { cn } from "@/lib/utils";
import Image from "next/image";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { IconBrandYoutubeFilled } from "@tabler/icons-react";
import Link from "next/link";
import FeaturesSectionDemo from "@/components/blocks/features-section-demo-1";

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
      {/* <h1 className={`${playfair.className} text-center md:text-7xl text-lg `}>
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
      </div> */}
      <div className="px-8">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
          Packed with thousands of features
        </h4>

        <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
          From Image generation to video generation, Everything AI has APIs for
          literally everything. It can even create this website copy for you.
        </p>
      </div>
      <FeaturesSectionDemo />
    </div>
  );
}

export default BenefitSection;
