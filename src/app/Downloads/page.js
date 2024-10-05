"use client";

import { Playfair_Display } from "next/font/google";
import { FaArrowDown } from "react-icons/fa6";
import careerPAge from "../../../public/successful-employee.jpg";
import { Button } from "@/components/ui/button";
import { FaFileDownload } from "react-icons/fa";
import { PiDownloadSimpleBold } from "react-icons/pi";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

import Image from "next/image";
import { useRef, useState } from "react";
import { Boxes } from "@/components/ui/background-boxes";
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
});

function Downloads() {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const downloadBtn = useRef(null);
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({ name: "", email: "" });
  };
  const careerData = [
    {
      title: "Study Materials",
      jd: "Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever",
      time: "Full Time ",
      location: "On-site",
    },
    {
      title: "whitepapers",
      jd: "Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever",
      time: "WFH",
      location: "On-site",
    },
    {
      title: " e-books",
      jd: "Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever",
      time: "Full Time ",
      location: "On-site",
    },
    {
      title: "Study Materials",
      jd: "Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever",
      time: "Full Time ",
      location: "On-site",
    },
  ];

  return (
    <div className="  h-auto  relative w-full overflow-hidden    bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="  absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes/>
      <div className="commonContainer">
        <div className="  bg-[rgb(16,29,45)]  rounded-b-[40px] md:pb-20 pb-4 md:pt-44 pt-20 md:px-10 px-6">
          <div className="flex justify-between lg:flex-row flex-col sm:gap-4 items-center ">
            <div className="lg:w-[60%] w-[100%] flex flex-col justify-center items-center  gap-4">
              <h1
                className={`md:text-5xl text-white text-2xl text-center font-extrabold ${playfair.className}`}
              >
                Access Useful Resources !
              </h1>
              <p className="text-[rgb(148,163,184)] md:text-xl text-sm md:w-[70%] w-full text-center">
                Our landing page template works on all devices, so you only have
                to set it up once, and get beautiful results forever.
              </p>
              <div
                className="flex  gap-2 animate-bounce pt-2"
                onClick={() => scrollToSection(downloadBtn)}
              >
                <Button variant="outline">
                  Download Now <FaArrowDown className="pl-1" />
                </Button>
              </div>
            </div>

            <div className="md:w-[40%] w-[100%]">
              <Image
                src={careerPAge}
                alt="career Banner "
                className=" rounded-[30px] "
              />
            </div>
          </div>
        </div>

        <section ref={downloadBtn}>
          <div className="flex items-center md:justify-center justify-between flex-col py-10">
            {careerData.map((item, index) => (
              <div
                key={index}
                className="flex justify-between w-[80%] border-t py-4  items-center"
              >
                <div className=" flex  items-center justify-start gap-4 md:flex-row flex-col  ">
                  <div className=" flex items-center gap-4  ">
                    <div className="w-fit">
                      <FaFileDownload className=" text-2xl" />
                    </div>
                    <div>
                      <h1 className=" font-semibold text-xl">{item.title}</h1>
                      <p className="text-[rgb(101,103,106)] text-sm ">
                        {item.jd}
                      </p>
                    </div>
                  </div>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 text-white rounded-3xl"
                      >
                        Download
                        <PiDownloadSimpleBold className="ml-1" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>
                          {" "}
                          Fill out the form below to access the material.
                        </DialogTitle>
                        <DialogDescription className="text-black"></DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <form
                          onSubmit={handleSubmit}
                          className=" w-full max-w-sm"
                        >
                          <div className="mb-4">
                            <label
                              htmlFor="name"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Name
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                              placeholder="Your Name"
                              required
                            />
                          </div>

                          <div className="mb-4">
                            <label
                              htmlFor="email"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Email
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                              placeholder="Your Email"
                              required
                            />
                          </div>

                          <button
                            type="submit"
                            className="w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
                          >
                            Download Now
                          </button>
                        </form>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Downloads;
