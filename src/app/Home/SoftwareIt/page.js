import React from "react";
import { Playfair_Display } from "next/font/google";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import topBanner from "../../../../public/councelting.jpg";
import Expertise from "./Expertise";
import BussinessBenefit from "./BussinessBenefit";
import Projects from "./Projects";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
});

function SoftwareIt() {
  return (
    <div>
      <div className="commonContainer md:py-20 py-10">
        <div className="flex flex-col md:flex-row justify-center md:justify-between md:gap-0 gap-4">
          <div className="md:w-[50%] w-[100%] flex flex-col gap-4 md:gap-8">
            <h1
              className={`md:text-5xl text-[rgb(16,29,45)] text-xl font-extrabold ${playfair.className}`}
            >
              Software Development & IT Solutions
            </h1>
            <p className="text-[rgb(148,163,184)] md:text-2xl text-sm">
              Our landing page template works on all devices, so you only have
              to set it up once, and get beautiful results forever.
            </p>
            <div className="flex  gap-4 flex-wrap ">
              <Button className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300  ">
                Schedule a Demo
              </Button>
              <Button className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300  ">
                Request a Quote
              </Button>
            </div>
          </div>

          <div className="md:w-[40%] w-[100%]">
            <Image src={topBanner} alt="businessImage" />
          </div>
        </div>
      </div>

      <section className=" bg-[rgb(147,197,253,0.34)]">
        <Expertise />
      </section>

      <section>
        <BussinessBenefit/>
      </section>

      <section>
        <Projects/>
      </section>
    </div>
  );
}

export default SoftwareIt;
