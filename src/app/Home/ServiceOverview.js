"use client";

import { useRouter } from "next/navigation";
import { GiArchiveResearch } from "react-icons/gi";
import { Playfair_Display } from "next/font/google";
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
});

function ServiceOverview() {
  const router = useRouter();
  const servicesData = [
    {
      icon: <GiArchiveResearch />,
      title: "Consulting & Research",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      navigateTo: "/Home/ConsultingResearch",
    },
    {
      icon: <GiArchiveResearch />,
      title: "Software Development & IT Solutions",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",

      navigateTo: "/Home/SoftwareIt",
    },
    {
      icon: <GiArchiveResearch />,
      title: "Training, Education & Job Guidance",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    {
      icon: <GiArchiveResearch />,
      title: "Marketing & Sales Consultancy",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
  ];

  return (
    <div className="commonContainer py-10 ">
      <div className="flex flex-wrap  gap-10 justify-center ">
        {servicesData.map((item, index) => (
          <div
            key={index}
            className="md:w-[40%] w-[100%] mt-10 flex flex-col gap-4  items-center md:items-start   bg-white  drop-shadow-2xl shadow-md rounded-lg  p-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300"
            onClick={() => router.push(item.navigateTo)}
          >
            <div className="text-lg md:text-5xl p-2 bg-[rgb(33,116,234)] w-fit  rounded-full text-white">
              {item.icon}
            </div>

            <div>
              <h1
                className={`${playfair.className} text-lg md:text-2xl text-bold`}
              >
                {item.title}
              </h1>
            </div>
            <div>
              <p className="text-[rgb(148,163,184)] md:text-lg text-sm text-justify">
                {item.para}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceOverview;
