"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const ParallaxScroll = ({
  images,
  className
}) => {
  const gridRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: gridRef, // remove this if your container is not fixed height
    offset: ["start start", "end start"], // remove this if your container is not fixed height
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(images.length / 3);

  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);
 
  return (
    <div
      className={cn(
        "h-[40rem] z-20 items-start overflow-y-auto w-full",
        className
      )}
      ref={gridRef}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start  max-w-5xl mx-auto gap-10 py-40 px-10"
        ref={gridRef}
      >
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <motion.div
              // Apply the translateY motion value here
              style={{ y: translateFirst }}
              key={"grid-1" + idx}
            >
              <motion.div
                key={el.id}
                className=" dark:bg-black z-1000 bg-white h-60 w-60 md:h-60 md:w-80 rounded-3xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1]  shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between"
                style={{
                  transformOrigin: "top center",
                }}
                // animate={{
                //   top: idx * -CARD_OFFSET,
                //   scale: 1 - idx * SCALE_FACTOR, // decrease scale for cards that are behind
                //   zIndex: el.length - idx, //  decrease z-index for the cards that are behind
                // }}
              >
                <div className="font-normal text-neutral-700 dark:text-neutral-200">
                  {el.content}
                </div>
                <div>
                  <p className="text-neutral-500 font-medium dark:text-white">
                    {el.name}
                  </p>
                  <p className="text-neutral-400 font-normal dark:text-neutral-200">
                    {el.designation}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
              <motion.div
                key={el.id}
                className=" dark:bg-black bg-white h-60 w-60 md:h-60 md:w-80  rounded-3xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1]  shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between"
                style={{
                  transformOrigin: "top center",
                }}
                // animate={{
                //   top: idx * -CARD_OFFSET,
                //   scale: 1 - idx * SCALE_FACTOR, // decrease scale for cards that are behind
                //   zIndex: el.length - idx, //  decrease z-index for the cards that are behind
                // }}
              >
                <div className="font-normal text-neutral-700 dark:text-neutral-200">
                  {el.content}
                </div>
                <div>
                  <p className="text-neutral-500 font-medium dark:text-white">
                    {el.name}
                  </p>
                  <p className="text-neutral-400 font-normal dark:text-neutral-200">
                    {el.designation}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
              <motion.div
                key={el.id}
                className=" dark:bg-black bg-white h-60 w-60 md:h-60 md:w-80  rounded-3xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1]  shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between"
                style={{
                  transformOrigin: "top center",
                }}
                // animate={{
                //   top: idx * -CARD_OFFSET,
                //   scale: 1 - idx * SCALE_FACTOR, // decrease scale for cards that are behind
                //   zIndex: el.length - idx, //  decrease z-index for the cards that are behind
                // }}
              >
                <div className="font-normal text-neutral-700 dark:text-neutral-200">
                  {el.content}
                </div>
                <div>
                  <p className="text-neutral-500 font-medium dark:text-white">
                    {el.name}
                  </p>
                  <p className="text-neutral-400 font-normal dark:text-neutral-200">
                    {el.designation}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
