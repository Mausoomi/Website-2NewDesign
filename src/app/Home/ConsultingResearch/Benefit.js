"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { GiAutoRepair } from "react-icons/gi";
import Autoplay from "embla-carousel-autoplay";
import approchImg from "../../../../public/Phases_Of_Consulting_Methodology_With_Icons_Ppt_PowerPoint_Presentation_Summary_Samples_Slide_1.jpg";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
});

function Benefit() {
  const govtBenefitData = [
    {
      icon: <GiAutoRepair />,
      title: "",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    {
      icon: <GiAutoRepair />,
      title: "Development of web",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    {
      icon: <GiAutoRepair />,
      title: "Development of web",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    {
      icon: <GiAutoRepair />,
      title: "Development of web",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    {
      icon: <GiAutoRepair />,
      title: "Development of web",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    {
      icon: <GiAutoRepair />,
      title: "Development of web",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    {
      icon: <GiAutoRepair />,
      title: "Development of web",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
  ];

  return (
    <div>
      <div className=" py-10 ">
        <h1
          className={`md:text-7xl text-[rgb(16,29,45)] text-2xl font-extrabold text-center underline pb-10 ${playfair.className}`}
        >
          Benefits for Governments
        </h1>
        <div className="flex justify-center bg-yellow py-10 rounded-lg  bg-[rgb(189,207,253,0.29)] mb-10">
          <Carousel
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
            className="md:w-[90%] w-[80%]  flex justify-center"
          >
            <CarouselContent className=" flex justify-center   ">
              {govtBenefitData.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-2/6 basis-full  "
                  onClick={() => handleBlogClick(item)}
                >
                  <div className=" ">
                    <Card className="p-4  flex flex-col items-center gap-4">
                      <div className=" w-fit text-4xl">{item.icon}</div>
                      <CardContent className="flex ">
                        <span className="md:text-xl font-bold text-lg ">
                          {item.title}
                        </span>
                      </CardContent>
                      <CardContent>
                        <p className=" md:text-lg text-sm text-gray-500 text-justify">
                          {item.para}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>

      <div>
        <h1
          className={`md:text-7xl text-[rgb(16,29,45)] text-2xl font-extrabold text-center underline pb-10 ${playfair.className}`}
        >
          Our Approach
        </h1>
        <div className=" flex justify-center">
          <Image src={approchImg} alt="img" />
        </div>
      </div>
    </div>
  );
}

export default Benefit;
