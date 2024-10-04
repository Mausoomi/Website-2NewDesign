"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../../components/ui/hero-highlight";
import JobList from "./JobList";
import Gallery from "./Gallery";
function Careers() {
  return (
    <>
     
        <HeroHighlight>
           <div className="py-10 md:pt-40 md:pb-20 ">
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
          >
            Be part of a dynamic workplace where your ideas matter, growth is
            encouraged, and success is shared.{" "}
            <Highlight className="text-black dark:text-white">
              Let&apos;s build the future together!
            </Highlight>
          </motion.h1>
            </div>
        </HeroHighlight>
    

      <JobList />
      <Gallery/>
    </>
  );
}

export default Careers;

// import { Playfair_Display } from "next/font/google";
// import { FaArrowDown } from "react-icons/fa6";
// import careerPAge from "../../../public/successful-employee.jpg";
// import { Button } from "@/components/ui/button";
// import { FaLocationArrow } from "react-icons/fa6";
// import { IoLocationOutline } from "react-icons/io5";
// import { IoIosTimer } from "react-icons/io";
// import Image from "next/image";
// const playfair = Playfair_Display({
//   subsets: ["latin"],
//   weight: ["700"],
// });

// function Careers() {
//   const careerData = [
//     {
//       title: "Product Manager",
//       jd: "Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever",
//       time: "Full Time ",
//       location: "On-site",
//     },
//     {
//       title: "FrontEnd Developer",
//       jd: "Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever",
//       time: "WFH",
//       location: "On-site",
//     },
//     {
//       title: "Product Manager",
//       jd: "Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever",
//       time: "Full Time ",
//       location: "On-site",
//     },
//   ];

//   return (
//     <div className="commonContainer">
//       <div className="  bg-[rgb(16,29,45)]  rounded-b-[40px] pb-10">
//         <div className="">
//           <div className=" flex flex-col justify-center items-center py-20 px-10 gap-4">
//             <h1
//               className={`md:text-5xl text-white text-2xl font-extrabold ${playfair.className}`}
//             >
//               Come Work with us !
//             </h1>
//             <p className="text-[rgb(148,163,184)] md:text-xl text-sm md:w-[70%] w-full text-center">
//               Our landing page template works on all devices, so you only have
//               to set it up once, and get beautiful results forever.
//             </p>
//             <div className="flex  gap-2 animate-bounce">
//               <Button variant="outline">
//                 View Openings <FaArrowDown className="pl-1" />
//               </Button>
//             </div>
//           </div>

//           <div className="md:w-[40%] w-[100%]">
//             {/* <Image src={topBanner} alt="businessImage" /> */}
//           </div>
//         </div>
//       </div>
//       <div className="-mt-20 flex items-center justify-center ">
//         <Image
//           src={careerPAge}
//           width={600}
//           height={300}
//           alt="career Banner "
//           className=" rounded-[40px] "
//         />
//       </div>
//       <section>
//         <div className="py-10 flex flex-col justify-center items-center gap-4">
//           <h1
//             className={`md:text-3xl  text-xl font-extrabold ${playfair.className} text-center underline`}
//           >
//             Be the part of our mission
//           </h1>
//           <p className="text-[rgb(148,163,184)] md:text-lg text-sm md:w-[70%] w-full text-center ">
//             Our landing page template works on all devices, so you only have to
//             set it up once, and get beautiful results forever.
//           </p>
//         </div>
//         <div className="flex items-center justify-center flex-col pb-10">
//           {careerData.map((item, index) => (
//             <div
//               key={index}
//               className="flex justify-between w-[80%] border-t py-4  "
//             >
//               <div className="w-[75%] flex flex-col items-start justify-start gap-4 ">
//                 <h1 className=" font-semibold text-xl">{item.title}</h1>
//                 <p className="text-[rgb(101,103,106)] ">{item.jd}</p>
//                 <div className="flex gap-4">
//                   <Button
//                     variant="outline"
//                     className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 text-white rounded-3xl"
//                   >
//                     {" "}
//                     <IoLocationOutline />
//                     {item.location}{" "}
//                   </Button>
//                   <Button
//                     variant="outline"
//                     className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 text-white rounded-3xl"
//                   >
//                     <IoIosTimer />
//                     {item.time}
//                   </Button>
//                 </div>
//               </div>
//               <div className="flex gap-2 ">
//                 <p className="text-lg hover:underline  font-bold">Apply </p>
//                 <p className="text-xl pt-1 hover:underline  font-bold ">
//                   <FaLocationArrow />
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Careers;
