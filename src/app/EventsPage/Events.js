"use client"
import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import EventCard from "./EventCard";


 function Events() {
  const data = [
    {
      title: "5 October 2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem
          </p>
          <EventCard />
        </div>
      ),
    },
    {
      title: "10 October 2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem
          </p>
          <EventCard />
        </div>
      ),
    },
    {
      title: "15 October 2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem
          </p>
          <EventCard />
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}

export default Events;
