"use client";

import { Boxes } from "../../components/ui/background-boxes";
import { cn } from "@/lib/utils";
import React from "react";

function PrivacyPolicy() {
  return (
    <div>
      <div className="  h-auto  relative w-full overflow-hidden    bg-slate-900 flex flex-col items-center justify-center rounded-lg">
        <div className="  absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

        <Boxes />
        <div className="commonContainer flex justify-center flex-col items-center py-20 lg:py-40">
          <h1
            className={cn("md:text-4xl text-xl text-white relative z-20 py-10")}
          >
            Privacy Policy
          </h1>
          {/* <p className="  text-center mt-2 text-neutral-300 relative z-20 md:w-[50%] pb-10">
            Have questions? We&apos;ve got answers! Browse through our FAQs to
            find quick and helpful information about our services, features, and
            more. If you can&apos;t find what you&apos;re looking for, feel free
            to reach out to us.
          </p> */}
          <div className="md:w-[80%] w-full bg-black z-20   rounded-lg ">
            <div className="py-10 px-10 flex flex-col gap-6 ">
              <div>
                <h1 className="text-xl pb-2">
                  Welcome to [Your Website/App Name]!
                </h1>
                <p className="text-zinc-400 ">
                  These terms and conditions outline the rules and regulations
                  for the use of [Your Website/App Name]’s website, located at
                  [Website URL]. By accessing this website, we assume you accept
                  these terms and conditions in full. Do not continue to use
                  [Your Website/App Name] if you do not accept all of the terms
                  and conditions stated on this page
                </p>
              </div>

              <div>
                <h1>1. Intellectual Property Rights</h1>
                <p className="text-zinc-400 ">
                  Unless otherwise stated, [Your Website/App Name] and/or its
                  licensors own the intellectual property rights for all
                  material on this website. All intellectual property rights are
                  reserved. You may view and/or print pages from [Website URL]
                  for your own personal use, subject to restrictions set in
                  these terms and conditions.
                </p>
              </div>
              <div>
                <h1>2. Restrictions</h1>
                <p className="text-zinc-400 ">
                  You are specifically restricted from all of the following:
                </p>
                <ul className="list-disc text-zinc-400 py-4 flex flex-col gap-4">
                  <li>
                    {" "}
                    Publishing any material from the website in any media.
                  </li>
                  <li>
                    {" "}
                    Publishing any material from the website in any media.
                  </li>
                  <li>
                    {" "}
                    Publishing any material from the website in any media.
                  </li>
                  <li>
                    {" "}
                    Publishing any material from the website in any media.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
