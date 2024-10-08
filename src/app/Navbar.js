"use client";

import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { IoLogoDropbox } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { NavbarDemo } from "@/app/NavBarMenu";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "../components/ui/navbar-menu";

function NavBar() {
  const [active, setActive] = useState(null);
  const [showSideBar, setShowSideBar] = useState(false);
  const pathname = usePathname();
  console.log(pathname);

  const navItem = [
    { item: "Home", Link: "/" },
    // { item: "About us", Link: "/AboutUs" },
    { item: "Careers", Link: "/Careers" },
    {
      item: "Media",
      Link: "/Media",
      // subItem: [
      //   { subNav: "Blog", SubLink: "/Media/Blog" },
      //   { subNav: "Vlog", SubLink: "/Media/Vlog" },
      //   { subNav: "News", SubLink: "/Media/News" },
      // ],
    },
    { item: "Downloads", Link: "/Downloads" },
    { item: "FAQ", Link: "/FaqPage" },
    { item: "Events", Link: "/EventsPage" },
    { item: "Wall of Love", Link: "/WallOfLove" },
  ];
  console.log(navItem);
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    var tl = gsap.timeline();
    gsap.from(".logo", { y: -30, duration: 1, opacity: 0 });
    gsap.from(".navBox", {
      y: -50,
      duration: 1,
      opacity: 0,

      stagger: 0.3,
    });
    gsap.from(".signInBtn", {
      y: -50,
      duration: 1,
      opacity: 0,
    });
  });
  return (
    <>
      <div
        className={` relative md:block hidden shadow-lg shadow-black-500/50 bg-[rgb(16,29,45)]   `}
      >
        <NavbarDemo navItem={navItem} />
      </div>

      {/* Phone View NabBar */}
      <div className="md:hidden flex justify-between items-start  py-2 px-4 ">
        <div className=" relative">
          <IoReorderThreeOutline
            className=" text-lg"
            onClick={() => setShowSideBar(!showSideBar)}
          />
          <div
            className={`bg-[rgb(33,116,234)] border-b-[1px] absolute flex-col gap-3 px-8 z-10 ${
              showSideBar ? "flex" : "hidden"
            } `}
          >
            <div className=" py-4 flex flex-col gap-10">
              <nav className="bg-[rgb(33,116,234)]   md:w-[60%]">
                <ul className=" flex flex-col gap-2">
                  {navItem.map((item, index) => (
                    <li
                      key={index}
                      className="text-[14px]  transition-transform duration-300 ease-in-out hover:scale-110 "
                    >
                      <Link href={item.Link}>{item.item}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="socialLinks md:w-[35%] border-t-4 pt-4 ">
                <ul className=" text-[12px] flex justify-evenly  ">
                  <li>
                    <AiFillInstagram className="transition-transform duration-300 ease-in-out hover:scale-110" />
                  </li>
                  <li>
                    <FaFacebookSquare className="transition-transform duration-300 ease-in-out hover:scale-110" />
                  </li>
                  <li>
                    <IoLogoYoutube className="transition-transform duration-300 ease-in-out hover:scale-110" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div>
          <button className="bg-[rgb(33,116,234)]  border-gray-800 rounded px-4 py-1 text-white text-[12px]">
            Sign in
          </button>
        </div>
        {/* <div className="fixed top-10 inset-x-0 max-w-3xl mx-auto z-50 ">
          <Menu setActive={setActive}>
            <div className="px-4">LOGO</div>
            {navItem?.map((item, index) => (
              <div key={index}>
                <Link href={item.Link}>
                  <MenuItem
                    setActive={setActive}
                    active={active}
                    item={item.item}
                  >
                    {item.subItem && (
                      <div className="flex flex-col space-y-4 text-sm">
                        {item.subItem.map((Sub, index) => (
                          <HoveredLink href={Sub.SubLink} key={index}>
                            {Sub.subNav}
                          </HoveredLink>
                        ))}
                      </div>
                    )}
                  </MenuItem>
                </Link>
              </div>
            ))}
            <div className="px-4">
              <button className="bg-[rgb(33,116,234)]  border-gray-800 rounded px-4 py-1 text-white text-[12px]">
                Sign in
              </button>
            </div>
          </Menu>
        </div> */}
      </div>
    </>
  );
}

export default NavBar;
