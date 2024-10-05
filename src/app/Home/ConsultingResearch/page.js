"use client"
import React from "react";
import CaseStudy from "./CaseStudy";
import Benefit from "./Benefit";
import TopSection from "./TopSection";
import { useRouter } from "next/navigation";

function ConsultingResearch() {
  const router = useRouter();
  return (
    <div>
      <TopSection />

      <section>
        <CaseStudy />
      </section>

      <section className="Benefits py-20 lg:py-40 h-auto rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden ">
        <div className="md:px-8 pb-8 commonContainer">
          <h4 className=" TestHd text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
            Driving Social Impact for Governments
          </h4>

          <p className="paraTest text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
            We empower governments to drive social impact through data-driven
            strategies. Our solutions enhance service delivery, optimize
            resources, and address community needs for sustainable growth.
          </p>
        </div>
        <Benefit />
        <button className="p-[3px] relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
          <div
            className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent "
            onClick={() => router.push("/Downloads")}
          >
            Download Our Whitepaper
          </div>
        </button>
      </section>
    </div>
  );
}

export default ConsultingResearch;
