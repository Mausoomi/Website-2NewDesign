"use client";

import { motion } from "framer-motion";
import React from "react";
import Expertise from "./Expertise";
import BussinessBenefit from "./BussinessBenefit";
import Projects from "./Projects";
import { AuroraBackground } from "@/components/ui/aurora-background";

function SoftwareIt() {
  return (
    <div>
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <div className="text-3xl md:text-5xl font-bold dark:text-white text-center">
            Tailored Software Solutions for Your Business
          </div>
          <div className="font-extralight text-base md:text-2xl dark:text-neutral-200 py-4 w-full md:w-[60%] text-center ">
            We build custom software tailored to your business needs, optimizing
            operations and supporting your unique goals to drive success!
          </div>
          <div className="flex md:flex-row flex-col items-center gap-4 ">
            <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
              Schedule a Demo
            </button>
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              Request a Quote
            </button>
          </div>
        </motion.div>
      </AuroraBackground>

      <section className="md:py-20 py-10">
        <div className="md:px-8 pb-8 commonContainer">
          <h4 className=" TestHd text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
            Our Expertise
          </h4>

          <p className="paraTest text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
            Every AI is used by millions of people around the globe.Our APIs
            have fan bases and people fight for us over twitter.
          </p>
        </div>
        <Expertise />
      </section>

      {/* <section>
        <BussinessBenefit />
      </section> */}

      <section>
        <Projects />
      </section>
    </div>
  );
}

export default SoftwareIt;
