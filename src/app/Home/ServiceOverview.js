"use client";

import { useRouter } from "next/navigation";
import { GiArchiveResearch } from "react-icons/gi";
import { Playfair_Display } from "next/font/google";
import { HoverEffect } from "../../components/ui/card-hover-effect";
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger with gsap


function ServiceOverview() {
  const router = useRouter();
  const servicesData = [
    {
      icon: <GiArchiveResearch />,
      title: "Consulting & Research",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      link: "/Home/ConsultingResearch",
    },
    {
      icon: <GiArchiveResearch />,
      title: "Software Development & IT Solutions",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",

      link: "/Home/SoftwareIt",
    },
    {
      icon: <GiArchiveResearch />,
      title: "Training, Education & Job Guidance",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      link: "",
    },
    {
      icon: <GiArchiveResearch />,
      title: "Marketing & Sales Consultancy",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      link: "",
    },
  ];
 

    useGSAP(() => {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".box-1", // Element that triggers the animation
        start: "top 80%", // Trigger when the top of .box-1 is 75% from the top of the viewport
        end: "bottom 25%", 
        toggleActions: "play none none none", 
      },
    });
      
       tl.from(".servicesHd", {
         y: -30,
         duration: 1,
         opacity: 0,
         delay: 0.5,
         scale: 0.2,
       });
       tl.from(".paraServices", { x: -50, duration: 1, opacity: 0, delay: 0.5 });
    });

  return (
    <>
      <div>
      
      </div>

      <div className="commonContainer  box-1 ">
        {/* <div className="flex flex-wrap  gap-10 justify-center ">
        {servicesData.map((item, index) => (
          <div
            key={index}
            className="md:w-[40%] w-[100%] mt-10 flex flex-col gap-4  items-center md:items-start   bg-white  drop-shadow-2xl shadow-md rounded-lg  p-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300"
            onClick={() => router.push(item.navigateTo)}
          >
            <div className="text-lg md:text-5xl p-2 bg-[rgb(33,116,234)] w-fit  rounded-full text-white">
              {item.icon}
            </div>

            <div>
              <h1
                className={`${playfair.className} text-lg md:text-2xl text-bold`}
              >
                {item.title}
              </h1>
            </div>
            <div>
              <p className="text-[rgb(148,163,184)] md:text-lg text-sm text-justify">
                {item.para}
              </p>
            </div>
          </div>
        ))}
      </div> */}
        <div className=" flex justify-center flex-col items-center gap-4 ">
          <h1 className=" servicesHd md:w-[70%] w-full bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
            Streamlined for easy management
          </h1>
          <p className=" paraServices max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
            Enjoy customizable lists, team work tools, and smart tracking all in
            one place. Set tasks, get reminders, and see your progress simply
            and quickly.
          </p>
        </div>

        <div className="max-w-5xl mx-auto md:px-8">
          <HoverEffect items={servicesData} />
        </div>
      </div>
    </>
  );
}

export default ServiceOverview;
export const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];