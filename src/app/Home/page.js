"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import ServiceOverview from "./ServiceOverview";
import BenefitSection from "./BenefitSection";
import ContactForm from "./ContactForm";
import topBanner from "../../../public/bannerTop.jpg";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
});

function HomePage() {
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    var tl = gsap.timeline();
    tl.from(".hding", { y: -30, duration: 1, opacity: 0, delay: 0.5, scale:0.2 });
    tl.from(".paraTop", { x: -50, duration: 1, opacity: 0, delay: 0.5 });
    tl.from(".btn1", { y: 50, duration: 1, opacity: 0, delay: 0.5 });
    tl.from(".btn2", { y: 50, duration: 1, opacity: 0, delay: 0.5 });
  });
  return (
    <>
      <div className="topSectionHome md:py-32 py-10 ">
        <div className="commonContainer">
          <div className="flex flex-col md:flex-row justify-center md:justify-between md:gap-0 gap-4">
            <div className="md:w-[50%] w-[100%] flex flex-col gap-4 md:gap-8 ">
              <h1
                className={`md:text-7xl text-white text-2xl font-extrabold hding ${playfair.className}`}
              >
                Create stunning web experiences
              </h1>
              <p className="text-[rgb(148,163,184)] md:text-2xl text-sm paraTop">
                Our landing page template works on all devices, so you only have
                to set it up once, and get beautiful results forever.
              </p>
              <div className="flex  gap-2 ">
                {" "}
                <Button variant="outline ">Button</Button>
                <div className="btn2">
                  {" "}
                  <Button variant="outline ">Button</Button>
                </div>
              </div>
            </div>

            <div className="md:w-[40%] w-[100%]">
              <Image src={topBanner} alt="businessImage" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <ServiceOverview />
      </div>
      <div className="bg-[#e1e1ef85]">
        <BenefitSection />
      </div>
      <div>
        <ContactForm />
      </div>
    </>
  );
}

export default HomePage;
