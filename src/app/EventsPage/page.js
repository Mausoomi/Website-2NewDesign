
"use client"

import { Vortex } from "@/components/ui/vortex";
import React from "react";
import Events from "./Events";


export function EventsPage() {
  return (
    <>
      <div className="w-full mx-auto rounded-md  h-auto md:py-28 py-10 overflow-hidden">
        <Vortex
          backgroundColor="black"
          className="flex  flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
        >
          <div className="commonContainer flex flex-col items-center justify-center pt-6">
            <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
              Join Us for Unforgettable Experiences!
            </h2>
            <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
              Get ready for exciting events that spark inspiration and
              connections!
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
                Book Now
              </button>
            </div>
          </div>
        </Vortex>
      </div>
      <Events/>
    </>
  );
}
export default EventsPage;