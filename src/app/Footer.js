import React from "react";
 import { IoLogoDropbox } from "react-icons/io";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
});

function Footer() {
  return (
    <section className="  ">
      <div className="commonContainer md:py-20 py-10 border-b border-blue-500 ">
        <div className="flex md:flex-row flex-col items-start md:justify-between justify-center  gap-10 md:gap-0">
          <div className=" w-[100%] md:w-[30%] flex items-center md:items-start gap-6 flex-col">
            <div>
              <div className="  py-2 flex ">
                <IoLogoDropbox className="text-[rgb(33,116,234)] text-7xl" />
              </div>
            </div>
            <p className="  text-lg font-bold">
              The smarter way to start your next idea.
            </p>
          </div>
          <div className=" w-[100%] md:w-[15%] flex  gap-6 flex-col items-center md:items-start ">
            <p
              className={`${playfair.className} md:text-[20px] text-[18px] font-bold`}
            >
              Social
            </p>
            <ul className=" flex items-center md:items-start flex-col gap-4">
              <li>Insta</li>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>YouTube</li>
            </ul>
          </div>
          <div className=" w-[100%] md:w-[15%] flex items-center md:items-start gap-6 flex-col">
            <p className={`${playfair.className} md:text-[20px] text-[18px] `}>
              Links
            </p>
            <ul className=" flex items-center md:items-start flex-col gap-4">
              <li>Insta</li>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>YouTube</li>
            </ul>
          </div>
          <div className=" w-[100%] md:w-[30%] flex items-center md:items-start  gap-6 flex-col">
            <p
              className={`${playfair.className}  md:text-[20px] text-[18px] justify-center md:justify-start text-center md:text-start w-[100%] items-center md:items-start  `}
            >
              Legal
            </p>
            <ul className=" flex items-center md:items-start flex-col gap-4">
              <li>
                <Link href="/Terms&Conditions">Terms and Conditions</Link>
              </li>
              <li>
                <Link href="/PrivacyPolicy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/CookiePolicy">Cookie Policy</Link>
              </li>
              <li>
                <Link href="/Disclaimer">Disclaimer</Link>
              </li>
              <li>
                <Link href="/Complaints">Complaints</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="commonContainer">
        <p className="text-center text-slate-500 py-4">
          © Cruip.com. All rights reserved.
        </p>
      </div>
    </section>
  );
}

export default Footer;
