"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";


export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      {/* <p className="text-black dark:text-white">
        The Navbar will show on top of the page
      </p> */}
    </div>
  );
}

function Navbar({ className }) {
  const [active, setActive] = useState(null);
    const navItem = [
      { item: "Home", Link: "/" },
      // { item: "About us", Link: "/AboutUs" },
      { item: "Careers", Link: "/Careers" },
      { item: "Media", Link: "/Media" },
      { item: "Downloads", Link: "/Downloads" },
      { item: "FAQ", Link: "/FaqPage" },
      { item: "Events", Link: "/EventsPage" },
    ];
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-3xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <div className="px-4">LOGO</div>
        {navItem.map((item, index) => (
          <div key={index}>
            <Link href={item.Link}>
              <MenuItem
                setActive={setActive}
                active={active}
                item={item.item}
              ></MenuItem>
            </Link>
          </div>
        ))}
        <div className="px-4">
          <button className="bg-[rgb(33,116,234)]  border-gray-800 rounded px-4 py-1 text-white text-[12px]">
            Sign in
          </button>
        </div>
      </Menu>
    </div>
  );
}
