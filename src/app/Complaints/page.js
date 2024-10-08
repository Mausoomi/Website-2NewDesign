"use client";

import { Boxes } from "../../components/ui/background-boxes";
import { cn } from "@/lib/utils";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
function Complaints() {
  return (
    <div>
      <div className="  h-auto  relative w-full overflow-hidden    bg-slate-900 flex flex-col items-center justify-center rounded-lg">
        <div className="  absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

        <Boxes />
        <div className="commonContainer flex justify-center flex-col items-center py-20 lg:py-40">
          <h1 className={cn("md:text-4xl text-xl text-white relative z-20 ")}>
            We are here to assist you!
          </h1>
          <p className="  text-center mt-2 text-neutral-300 relative z-20 md:w-[50%] pb-10">
            Please complete the form below for your complaints?
          </p>
          <div className="md:w-[80%] w-full bg-black z-20   rounded-lg ">
            <div className="py-10 px-10 flex flex-col gap-6 ">
              <div className=" paraContact max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
                <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
                  Contact Us
                </h2>
                <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
                  Please reach out to us and we will get back to you at the
                  speed of light.
                </p>
                <form className="my-8">
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

                  
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Complaints;
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