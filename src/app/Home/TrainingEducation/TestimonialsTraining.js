"use client";

import { CardStack } from "@/components/ui/card-stack";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import React from "react";

function TestimonialsTraining() {
   const [hovered, setHovered] = React.useState(false);
  return (
    <>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className=" py-10 md:py-28 flex flex-col lg:flex-row  overflow-hidden items-center justify-center bg-black w-full gap-4 mx-auto px-8 relative"
      >
        <div className="flex flex-col lg:flex-row commonContainer justify-center gap-8">
          <div className=" flex flex-col items-center justify-center gap-4">
            <p className="md:text-2xl text-2xl font-medium text-center text-white relative z-20 ">
              Real Journeys to Career Achievement
            </p>
            <p className="text-lg  text-center text-zinc-400 relative z-20 ">
              Discover how our training and guidance have transformed careers.
              Read stories from individuals who achieved their professional
              goals with our support.
            </p>
          </div>

          <div className=" flex items-center justify-center w-full">
            <CardStack items={CARDS} />
          </div>
        </div>

        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-full w-full absolute inset-0"
            >
              <CanvasRevealEffect
                animationSpeed={5}
                containerClassName="bg-transparent"
                colors={[
                  [59, 130, 246],
                  [139, 92, 246],
                ]}
                opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
                dotSize={2}
              />
            </motion.div>
          )}
        </AnimatePresence>
        {/* Radial gradient for the cute fade */}
        <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
      </div>
    </>
  );
}
export default TestimonialsTraining;

export const Highlight = ({ children, className }) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Manu Arora",
    designation: "Senior Software Engineer",
    content: (
      <p>
        These cards are amazing, <Highlight>I want to use them</Highlight> in my
        project. Framer motion is a godsend ngl tbh fam 🙏
      </p>
    ),
  },
  {
    id: 1,
    name: "Elon Musk",
    designation: "Senior Shitposter",
    content: (
      <p>
        I dont like this Twitter thing,{" "}
        <Highlight>deleting it right away</Highlight> because yolo. Instead, I
        would like to call it <Highlight>X.com</Highlight> so that it can easily
        be confused with adult sites.
      </p>
    ),
  },
  {
    id: 2,
    name: "Tyler Durden",
    designation: "Manager Project Mayhem",
    content: (
      <p>
        The first rule of
        <Highlight>Fight Club</Highlight> is that you do not talk about fight
        club. The second rule of
        <Highlight>Fight club</Highlight> is that you DO NOT TALK about fight
        club.
      </p>
    ),
  },
];
