import React from "react";
import ProjectImg from "../../../../public/projectImg.jpg";
import { Playfair_Display } from "next/font/google";
import { Button } from "@/components/ui/button";
import Image from "next/image";
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
});

function Projects() {
  const projectData = [
    {
      title: "New project",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem",
      link: "",
      image: ProjectImg,
    },
    {
      title: "New project",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem",
      link: "",
      image: ProjectImg,
    },
    {
      title: "New project",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem",
      link: "",
      image: ProjectImg,
    },
  ];

  return (
    <>
      <div className="commonContainer py-10">
        <h1
          className={`md:text-5xl text-[rgb(16,29,45)] text-2xl font-extrabold text-center underline pb-10 ${playfair.className}`}
        >
          Our Projects
        </h1>
        <div className="flex justify-between">
          {projectData.map((item, index) => (
            <div
              key={index}
              className="w-[30%] border border-[rgb(191,184,184,0.72)] rounded-lg flex flex-col gap-4"
            >
              <div className="rounded-lg">
                <Image
                  src={item.image}
                  alt="project image"
                  className="rounded-t-lg"
                />
              </div>
              <div className="flex flex-col gap-4 pb-2 ">
                <h1 className=" font-bold text-xl text-center text-[rgb(16,29,45)]">
                  {item.title}
                </h1>
                <div className="   flex flex-col  items-center justify-center gap-4">
                  <p className="  w-[80%] text-[rgb(107,114,128)] ">
                    {item.para}
                  </p>
                  <Button className="bg-[rgb(16,29,45)]   transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
                    View Project
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
