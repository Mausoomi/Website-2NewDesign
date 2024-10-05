 "use Client"
import { PinContainer } from '@/components/ui/3d-pin';
import React from 'react'


 function EventCard() {
  return (
    <div className=" w-full flex items-center justify-center py-4">
      <PinContainer title="Book Now" href="">
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[24rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Meet Up
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 "></span>
          </div>
          <span className="text-slate-500 ">
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem
          </span>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Timing : 2:00pm - 6:00pm
            </div>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer>
    </div>
  );
}
export default EventCard;