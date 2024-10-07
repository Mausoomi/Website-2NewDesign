"use client"
import { TypewriterEffect } from '@/components/ui/typewriter-effect';
import React from 'react'
import TrainingServices from './TrainingServices';
import TestimonialsTraining from './TestimonialsTraining';
import JobBenefits from './JobBenefits';


function TrainingEducation() {
    //Empower Your Career with Our Expert Training & Job Placement Services
  const words = [
    {
      text: "Empower",
    },
    {
      text: "Your",
    },
    {
      text: "Career",
    },
    {
      text: "with",
    },
    {
      text: "Our",
    },
    {
      text: "Expert",
    },
    {
      text: "Training",
    },
    {
      text: "&",
    },
    {
      text: "Job",
    },
    {
      text: "Placement",
    },
  
    {
      text: "Services.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <>
      <div className="h-auto w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
          <div className="flex flex-col items-center justify-center h-auto md:py-28 py-10 ">
            <p className="text-neutral-600 dark:text-neutral-200 text-base  mb-10">
              The road to freedom starts from here
            </p>
            <TypewriterEffect words={words} />
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
              <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
                Sign Up
              </button>
              <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
                Free Consultation
              </button>
            </div>
          </div>
        </p>
      </div>
      <TrainingServices />
      <TestimonialsTraining />
      <JobBenefits/>
    </>
  );
}

export default TrainingEducation;