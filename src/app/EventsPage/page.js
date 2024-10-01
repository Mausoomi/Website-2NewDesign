import Image from "next/image";
import React from "react";
import eventimg from "../../../public/events.jpg";
import event1 from "../../../public/eventImg-1.jpg";
import { FaLocationDot } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";

function EventsPage() {
  const eventDetails = [
    {
      title: "my meeting with xtz",
      date: "12 sept 2024",
      details:
        "Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.",
      img: event1,
      venue: "new place",
      timing: "2:00 pm",
    },
    {
      title: "my meeting with xtz",
      date: "12 sept 2024",
      details:
        "Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.",
      img: event1,
      venue: "new place",
      timing: "2:00 pm",
    },
  ];
  return (
    <div>
      <div>
        <Image src={eventimg} alt="eventimage" />
      </div>
      <div className="-mt-20">
        <div className="commonContainer bg-[rgb(138,138,147,0.21)]   drop-shadow-2xl shadow-md rounded-lg p-10 gap-8 flex flex-col">
          {eventDetails.map((item, index) => (
            <div
              key={index}
              className="bg-white    drop-shadow-2xl shadow-md rounded-lg p-8 flex  gap-4"
            >
              <div>
                <Image src={item.img} width={200} alt="image" />
              </div>
              <div className=" flex flex-col items-start gap-4">
                <h1 className=" font-bold">{item.title}</h1>
                <div className="flex gap-4">
                  <p className="flex items-center gap-2">
                    <FaLocationDot /> {item.venue}
                  </p>
                  <p className="flex items-center gap-2">
                    <IoTime />
                    {item.timing}
                  </p>
                </div>
                <p>{item.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EventsPage;
