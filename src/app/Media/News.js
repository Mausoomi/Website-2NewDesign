"use client";

import * as React from "react";
// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import blog1 from "../../../public/blog-2.jpg";
import blog2 from "../../../public/blog-2.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

 function News() {
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

  return (
    <div className="flex justify-center bg-yellow py-10 rounded-lg  bg-[rgb(250,241,123,0.25)] mb-10">
      <Carousel className="md:w-[90%] w-[80%]  flex justify-center">
        <CarouselContent className=" flex justify-center ">
          {blogData.map((item, index) => (
            <CarouselItem
              key={index}
              className="md:basis-2/6 basis-full  "
              onClick={() => handleBlogClick(item)}
            >
              <div className="p-1">
                <Card>
                  <div>
                    <Image
                      src={item.image}
                      alt="blogImage"
                      className="rounded-t-lg "
                    />
                  </div>
                  <CardContent className="flex ">
                    <span className="md:text-2xl font-semibold text-xl ">
                      {item.title}
                    </span>
                  </CardContent>
                  <CardContent className="flex ">
                    <span className="font-medium md:text-lg text-sm ">
                      sub title
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
  );
}
export default News;