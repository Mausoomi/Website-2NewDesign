"use client";

import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import ServiceOverview from "./ServiceOverview";
import BenefitSection from "./BenefitSection";
import ContactForm from "./ContactForm";
import topBanner from "../../../public/bannerTop.jpg";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import TopImg from "../../../public/cube-helix 1.png"

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
});

function HomePage() {
   const imageRef = useRef(null);
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    var tl = gsap.timeline();
    tl.from(".hding", { y: -30, duration: 1, opacity: 0, delay: 0.5, scale:0.2 });
    tl.from(".paraTop", { x: -50, duration: 1, opacity: 0, delay: 0.5 });


    gsap.from(".btn1", { y: 50, duration: 1, opacity: 0, delay: 0.5 });
    gsap.from(".btn2", { y: 50, duration: 1, opacity: 0, delay: 0.5 });

     gsap.to(imageRef.current, {
       rotate: 360,
       duration: 15,
       repeat: -1, 
       ease: "linear",
     });
  });


  return (
    <>
      <div className=" md:py-32 py-10 ">
        {/* <div className="commonContainer">
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
        </div> */}
        <BackgroundBeamsWithCollision className="h-auto">
          <div className="flex commonContainer items-center flex-col gap-6">
            <div>
              <h2 className="hding text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
                What&apos;s cooler than Beams?{" "}
                <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                  <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                    <span className="">Exploding beams.</span>
                  </div>
                  <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                    <span className="">Exploding beams.</span>
                  </div>
                </div>
              </h2>
            </div>
            <div className="flex md:gap-6 gap-3 btn1 flex-col md:flex-row">
              <button className=" inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                Schedule a Free Consultation
              </button>

              <button className=" shadow-[0_4px_14px_0_rgb(0,0,0,10%)] hover:shadow-[0_6px_20px_rgba(93,93,93,23%)] px-6 py-3 bg-[#fff] text-[#696969] rounded-md font-light transition duration-200 ease-linear">
                Discover Our Services
              </button>
            </div>
            <div ref={imageRef}>
              <Image src={TopImg} alt="cube" width={300} />
            </div>
          </div>
        </BackgroundBeamsWithCollision>
      </div>

      <div>
        <ServiceOverview />
      </div>
      <div >
        <BenefitSection />
      </div>
      <div>
        <ContactForm />
      </div>
    </>
  );
}

export default HomePage;





