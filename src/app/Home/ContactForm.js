"use client";

import { cn } from "@/lib/utils";
import {
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandTwitter,
} from "@tabler/icons-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger); 
function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

      useGSAP(() => {
        var tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".boxContact", // Element that triggers the animation
            start: "top 80%", // Trigger when the top of .box-1 is 75% from the top of the viewport
            end: "bottom 25%",
            toggleActions: "play none none none",
          },
        });

        tl.from(".contactHd", {
          y: -30,
          duration: 1,
          opacity: 0,
          delay: 0.5,
          scale: 0.2,
        });
        tl.from(".paraContact", {
          x: -50,
          duration: 1,
          opacity: 0,
          delay: 0.5,
        });
      });

  return (
    <>
      <div className="boxContact h-auto w-full py-10 md:py-20 dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className=" absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]"></div>

        <div className="commonContainer flex md:flex-row flex-col-reverse justify-between items-center">
          <div className=" paraContact max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
            <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
              Contact Us
            </h2>
            <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
              Please reach out to us and we will get back to you at the speed of
              light.
            </p>
            <form className="my-8" onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                <LabelInputContainer>
                  <Label htmlFor="firstname">First name</Label>
                  <Input id="firstname" placeholder="Tyler" type="text" />
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label htmlFor="lastname">Last name</Label>
                  <Input id="lastname" placeholder="Durden" type="text" />
                </LabelInputContainer>
              </div>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  placeholder="projectmayhem@fc.com"
                  type="email"
                />
              </LabelInputContainer>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="email">Add Message </Label>
                <textarea
                  rows="4"
                  cols="50"
                  placeholder="Add Message here"
                  type="text"
                  className={cn(
                    `flex  w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent 
        file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
        focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
         disabled:cursor-not-allowed disabled:opacity-50
         dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
         group-hover/input:shadow-none transition duration-400`
                  )}
                />
              </LabelInputContainer>
              {/* <LabelInputContainer className="mb-4">
              <Label htmlFor="password">Password</Label>
              <Input id="password" placeholder="••••••••" type="password" />
            </LabelInputContainer> */}
              {/* <LabelInputContainer className="mb-8">
              <Label htmlFor="twitterpassword">Your twitter password</Label>
              <Input
                id="twitterpassword"
                placeholder="••••••••"
                type="twitterpassword"
              />
            </LabelInputContainer> */}

              <button
                className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                type="submit"
              >
                Submit &rarr;
                <BottomGradient />
              </button>

              <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

              <div className="flex flex-col space-y-4">
                <button
                  className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                  type="submit"
                >
                  <IconBrandInstagram className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                  <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                    Instagram
                  </span>
                  <BottomGradient />
                </button>
                <button
                  className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                  type="submit"
                >
                  <IconBrandFacebook className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                  <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                    Facebook
                  </span>
                  <BottomGradient />
                </button>
                <button
                  className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                  type="submit"
                >
                  <IconBrandTwitter className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                  <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                    Twitter
                  </span>
                  <BottomGradient />
                </button>
              </div>
            </form>
          </div>
          <div className="md:px-8 pb-8 ">
            <h4 className="contactHd text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
              We&apos;re Just a Message Away!
            </h4>

            <p className="paraContact text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
              We&apos;d love to hear from you! Whether you have questions,
              feedback, or just want to say hello, feel free to reach out.
              Simply fill out the form below or contact us directly, and
              we&apos;ll get back to you as soon as possible. Your input is
              important, and we look forward to connecting!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactForm;

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
