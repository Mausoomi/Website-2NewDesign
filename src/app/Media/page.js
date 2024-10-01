import { Button } from "@/components/ui/button";
import mediaBanner from "../../../public/mediaPg.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Playfair_Display } from "next/font/google";
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
});

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Blog from "./Blog";
import News from "./News";
import Podcast from "./Podcast";

export function Media() {
  const TabDetails = [
    { value: "Blog", tabName: "Blog", component: "" },
    { value: "Vlog", tabName: "Vlog", component: "" },
    { value: "Podcast", tabName: "Podcast", component: "" },
    { value: "News", tabName: "News", component: "" },
  ];
  return (
    <>
      <div>
        <div className="bg-[rgb(16,29,45)]  md:pt-20 py-10 md:pb-48 ">
          <div className="commonContainer">
            <div className="flex flex-col md:flex-row justify-center md:justify-between md:gap-0 gap-4">
              <div className="md:w-[50%] w-[100%] flex flex-col gap-4 md:gap-8">
                <h1
                  className={`md:text-5xl text-white text-xl font-extrabold ${playfair.className}`}
                >
                  Create stunning web experiences
                </h1>
                <p className="text-[rgb(148,163,184)] md:text-2xl text-sm">
                  Our landing page template works on all devices, so you only
                  have to set it up once, and get beautiful results forever.
                </p>
                <div className="flex  gap-2">
                  <Button variant="outline">Subscribe to Our Newsletter</Button>
                </div>
              </div>

              <div className="md:w-[40%] w-[100%]">
                <Image src={mediaBanner} alt="media banner" />
              </div>
            </div>
          </div>
        </div>
        <div className="commonContainer bg-[#F1B1ED] rounded-2xl p-8   marginT">
          <Tabs defaultValue="Blog">
            <div className="w-full flex items-center justify-center">
              <TabsList>
                <TabsTrigger value="Blog" className=" text-lg">
                  Blog
                </TabsTrigger>
                <TabsTrigger value="Vlog" className=" text-lg">
                  Vlog
                </TabsTrigger>
                <TabsTrigger value="Podcast" className=" text-lg">
                  Podcast
                </TabsTrigger>
                <TabsTrigger value="News" className=" text-lg">
                  News
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="Blog">
              <Blog />
            </TabsContent>
            <TabsContent value="Vlog">
         
              <Blog />
            </TabsContent>
            <TabsContent value="Podcast">
              <Podcast/>
            </TabsContent>
            <TabsContent value="News">
              <News />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
export default Media;
