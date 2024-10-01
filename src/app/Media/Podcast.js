"use client";

import React, { useState } from "react";
import podcastImg from "../../../public/potCast.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { GiSoundWaves } from "react-icons/gi";
import { Button } from "@/components/ui/button";
import { MdOutlinePlayCircleOutline } from "react-icons/md";
import { Playfair_Display } from "next/font/google";
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
});

function Podcast() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const PodcastData = [
    {
      title: "1By the future",
      image: podcastImg,
      by: "1 name",
    },
    {
      title: "2By the future",
      image: podcastImg,
      by: "2 name",
    },
    {
      title: "3 By the future",
      image: podcastImg,
      by: "3 name",
    },
    {
      title: "4 By the future",
      image: podcastImg,
      by: "4 name",
    },
    {
      title: "5 By the future",
      image: podcastImg,
      by: "5 name",
    },
    {
      title: "6 By the future",
      image: podcastImg,
      by: "6 name",
    },
    {
      title: "7 By the future",
      image: podcastImg,
      by: "7 name",
    },
  ];
   console.log(currentIndex)

  return (
    <>
      <div>
        <div>
          <div className="flex flex-col md:flex-row justify-center md:justify-between md:gap-0 gap-4 items-center py-10">
            <div className="md:w-[40%] w-[100%]">
              <Image
                src={PodcastData[currentIndex].image}
                alt="media banner"
                className=" rounded-2xl"
              />
            </div>
            <div className="md:w-[50%] w-[100%] flex flex-col gap-4 ">
              <h1
                className={`md:text-4xl text-[rgb(16,29,45)] text-2xl font-extrabold ${playfair.className}`}
              >
                {PodcastData[currentIndex].title}
              </h1>
              <p className="text-[rgb(98,108,120)] text-sm">
                Our landing page template works on all devices, so you only have
                to set it up once, and get beautiful results forever.
              </p>
              <div className="flex  gap-2">
                <Button
                  variant="outline"
                  className="flex gap-2 animate-bounce transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500  border-0"
                >
                  <p> Listen Now</p> <MdOutlinePlayCircleOutline />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-yellow py-10 rounded-lg  bg-[rgb(250,241,123,0.25)] mb-10">
        <Carousel className="md:w-[90%] w-[80%]  flex justify-center">
          <CarouselContent className=" flex justify-center ">
            {PodcastData.map((item, index) => (
              <CarouselItem key={index} className="md:basis-2/6 basis-full   ">
                <div className="p-1" onClick={() => setCurrentIndex(index)}>
                  <Card>
                    <div>
                      <Image
                        src={item.image}
                        alt="blogImage"
                        className="rounded-t-lg "
                      />
                    </div>
                    <CardContent className="flex p-2 ">
                      <p className="font-medium  text-sm flex items-center gap-2 ">
                        <snap className=" text-[39px]">
                          <GiSoundWaves />
                        </snap>
                        <snap>By-{item.by}</snap>
                      </p>
                    </CardContent>
                    <CardContent className="flex p-0">
                      <span className="md:text-2xl font-semibold text-xl pb-4 pl-2 ">
                        {item.title}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
}

export default Podcast;
