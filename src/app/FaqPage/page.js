"use client";
"use client";

import { Boxes } from "../../components/ui/background-boxes";
import { cn } from "@/lib/utils";
import React from "react";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Playfair_Display } from "next/font/google";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
});

function FAQPage() {
  const topic1Ref = useRef(null);
  const topic2Ref = useRef(null);
  const topic3Ref = useRef(null);

  // State to track the active topic
  const [activeTopic, setActiveTopic] = useState("topic-1");

  const scrollToSection = (ref, topic) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setActiveTopic(topic); 
  };

  return (
    <div>
      <div className="  h-auto  relative w-full overflow-hidden    bg-slate-900 flex flex-col items-center justify-center rounded-lg">
        <div className="  absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

        <Boxes />
        <div className="commonContainer flex justify-center flex-col items-center py-20 lg:py-40">
          <h1 className={cn("md:text-4xl text-xl text-white relative z-20 ")}>
            Frequently Asked Questions
          </h1>
          <p className="  text-center mt-2 text-neutral-300 relative z-20 md:w-[50%] pb-10">
            Have questions? We&apos;ve got answers! Browse through our FAQs to
            find quick and helpful information about our services, features, and
            more. If you can&apos;t find what you&apos;re looking for, feel free
            to reach out to us.
          </p>
          <div className="commonContainer bg-black    drop-shadow-2xl shadow-md rounded-lg ">
            <div className="py-10 px-10 flex justify-between">
              <div className="w-[20%] border-r-2 border-solid">
                <ul>
                  <li
                    onClick={() => scrollToSection(topic1Ref, "topic-1")}
                    className={`cursor-pointer py-2 font-bold ${
                      activeTopic === "topic-1" ? "text-[rgb(33,116,234)] " : ""
                    }`}
                  >
                    Topic 1
                  </li>
                  <li
                    onClick={() => scrollToSection(topic2Ref, "topic-2")}
                    className={`cursor-pointer py-2 font-bold ${
                      activeTopic === "topic-2" ? "text-[rgb(33,116,234)] " : ""
                    }`}
                  >
                    Topic 2
                  </li>
                  <li
                    onClick={() => scrollToSection(topic3Ref, "topic-3")}
                    className={`cursor-pointer py-2 font-bold ${
                      activeTopic === "topic-3" ? "text-[rgb(33,116,234)] " : ""
                    }`}
                  >
                    Topic 3
                  </li>
                </ul>
              </div>

              <div className="w-[75%] ">
                <div
                  ref={topic1Ref}
                  id="topic-1"
                  className="py-10 border-b-4 border-double "
                >
                  <h1
                    className={`text-xl font-bold underline ${
                      playfair.className
                    }  ${
                      activeTopic === "topic-1"
                        ? "text-[rgb(33,116,234)] font-bold"
                        : ""
                    }`}
                  >
                    Topic-1
                  </h1>

                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Is it accessible?</AccordionTrigger>
                      <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Is it styled?</AccordionTrigger>
                      <AccordionContent>
                        Yes. It comes with default styles that matches the other
                        components&apos; aesthetic.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Is it animated?</AccordionTrigger>
                      <AccordionContent>
                        Yes. It&apos;s animated by default, but you can disable
                        it if you prefer.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
                <div
                  ref={topic2Ref}
                  id="topic-2"
                  className="py-10 border-b-4 border-double"
                >
                  <h1
                    className={`text-xl font-bold underline ${
                      playfair.className
                    }  ${
                      activeTopic === "topic-2"
                        ? "text-[rgb(33,116,234)] font-bold"
                        : ""
                    }`}
                  >
                    Topic-2
                  </h1>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Is it accessible?</AccordionTrigger>
                      <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Is it styled?</AccordionTrigger>
                      <AccordionContent>
                        Yes. It comes with default styles that matches the other
                        components&apos; aesthetic.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Is it animated?</AccordionTrigger>
                      <AccordionContent>
                        Yes. It&apos;s animated by default, but you can disable
                        it if you prefer.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
                <div
                  ref={topic3Ref}
                  id="topic-3"
                  className="py-10 border-b-4 border-double"
                >
                  <h1
                    className={`text-xl font-bold underline ${
                      playfair.className
                    }  ${
                      activeTopic === "topic-3"
                        ? "text-[rgb(33,116,234)] font-bold"
                        : ""
                    }`}
                  >
                    Topic-3
                  </h1>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Is it accessible?</AccordionTrigger>
                      <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Is it styled?</AccordionTrigger>
                      <AccordionContent>
                        Yes. It comes with default styles that matches the other
                        components&apos; aesthetic.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Is it animated?</AccordionTrigger>
                      <AccordionContent>
                        Yes. It&apos;s animated by default, but you can disable
                        it if you prefer.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQPage;

