"use client";
import React, { useState } from "react";
import blog1 from "../../../public/blog-2.jpg";
import blog2 from "../../../public/blog-2.jpg";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
});


function Blog() {
  const [selectCurrentIndex, setSelectedCurrentIndex] = useState(1);

  const blogData = [
    {
      image: blog1,
      title: "1across time zones, best tools for 2024",
      para: "Working with a distributed team located across multiple time zones can be a logistical nightmare. Trying to calculate time differences, find meeting times that work for everyone, and avoid scheduling conflicts is enough to make even the most organized professionals pull their hair out. If you've ever found yourself drowning in a sea of world clocks, time zone converters, and endless email threads just to schedule an internal meeting, you're not alone. Coordinating schedules across time zones is one of the biggest challenges remote teams face. The good news? There are some incredibly helpful free tools out there designed to make converting times across time zones and scheduling meetings for remote teams a breeze. From simple time zone checkers to full-fledged meeting scheduling platforms, these tools can streamline the process and save you hours of frustration.",
    },
    {
      image: blog2,
      title: "2across time zones, best tools for 2024",
      para: "Working with a distributed team located across multiple time zones can be a logistical nightmare. Trying to calculate time differences, find meeting times that work for everyone, and avoid scheduling conflicts is enough to make even the most organized professionals pull their hair out. If you've ever found yourself drowning in a sea of world clocks, time zone converters, and endless email threads just to schedule an internal meeting, you're not alone. Coordinating schedules across time zones is one of the biggest challenges remote teams face. The good news? There are some incredibly helpful free tools out there designed to make converting times across time zones and scheduling meetings for remote teams a breeze. From simple time zone checkers to full-fledged meeting scheduling platforms, these tools can streamline the process and save you hours of frustration.",
    },
    {
      image: blog1,
      title: "3across time zones, best tools for 2024",
      para: "Working with a distributed team located across multiple time zones can be a logistical nightmare. Trying to calculate time differences, find meeting times that work for everyone, and avoid scheduling conflicts is enough to make even the most organized professionals pull their hair out. If you've ever found yourself drowning in a sea of world clocks, time zone converters, and endless email threads just to schedule an internal meeting, you're not alone. Coordinating schedules across time zones is one of the biggest challenges remote teams face. The good news? There are some incredibly helpful free tools out there designed to make converting times across time zones and scheduling meetings for remote teams a breeze. From simple time zone checkers to full-fledged meeting scheduling platforms, these tools can streamline the process and save you hours of frustration.",
    },
    {
      image: blog2,
      title: "4across time zones, best tools for 2024",
      para: "Working with a distributed team located across multiple time zones can be a logistical nightmare. Trying to calculate time differences, find meeting times that work for everyone, and avoid scheduling conflicts is enough to make even the most organized professionals pull their hair out. If you've ever found yourself drowning in a sea of world clocks, time zone converters, and endless email threads just to schedule an internal meeting, you're not alone. Coordinating schedules across time zones is one of the biggest challenges remote teams face. The good news? There are some incredibly helpful free tools out there designed to make converting times across time zones and scheduling meetings for remote teams a breeze. From simple time zone checkers to full-fledged meeting scheduling platforms, these tools can streamline the process and save you hours of frustration.",
    },
    {
      image: blog1,
      title: "5across time zones, best tools for 2024",
      para: "Working with a distributed team located across multiple time zones can be a logistical nightmare. Trying to calculate time differences, find meeting times that work for everyone, and avoid scheduling conflicts is enough to make even the most organized professionals pull their hair out. If you've ever found yourself drowning in a sea of world clocks, time zone converters, and endless email threads just to schedule an internal meeting, you're not alone. Coordinating schedules across time zones is one of the biggest challenges remote teams face. The good news? There are some incredibly helpful free tools out there designed to make converting times across time zones and scheduling meetings for remote teams a breeze. From simple time zone checkers to full-fledged meeting scheduling platforms, these tools can streamline the process and save you hours of frustration.",
    },
  ];

  console.log(selectCurrentIndex);

  return (
    <div className="flex justify-between py-6">
      <div className="w-[65%] py-8 flex flex-col items-start justify-start gap-8 bg-[rgb(255,255,255,0.44)] rounded-2xl px-6">
        <div>
          <Image
            src={blogData[selectCurrentIndex].image}
            alt="blog"
            width={300}
            height={300}
          />
        </div>
        <h1
          className={`md:text-2xl text-lg font-extrabold underline ${playfair.className}`}
        >
          {blogData[selectCurrentIndex].title}
        </h1>
        <p className="text-gray-600 text-justify">
          {blogData[selectCurrentIndex].para}
        </p>
      </div>
      <div className="w-[30%] py-10">
        <Carousel
          opts={{
            align: "start",
          }}
          orientation="vertical"
          className="w-full max-w-xs"
        >
          <CarouselContent className="-mt-1 h-[500px] ">
            {blogData.map((item, index) => (
              <CarouselItem key={index} className="pt-1 md:basis-1/4">
                <div
                  className="p-1"
                  onClick={() => setSelectedCurrentIndex(index)}
                >
                  <Card>
                    <CardContent className="flex items-center justify-center p-6">
                      <span className="text-lg font-semibold w-[70%]">
                        {item.title}
                      </span>
                      <div className="w-[20%]">
                        <Image
                          src={item.image}
                          alt="item"
                          className=" rounded-full w-[50px] h-[50px]"
                        />
                      </div>
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
    </div>
  );
}

export default Blog;
