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
import { BackgroundBeams } from "@/components/ui/background-beams";

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
    <div className="bg-[#262626]">
     
      <FeaturesSectionDemo />
    </div>
  );
}

export default BenefitSection;
