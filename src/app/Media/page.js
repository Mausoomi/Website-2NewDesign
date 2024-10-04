import { Button } from "@/components/ui/button";
import mediaBanner from "../../../public/mediaPg.png";

import { Playfair_Display } from "next/font/google";
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
});

import Image from "next/image";
import Blog from "./Blog";
import News from "./News";
import Podcast from "./Podcast";
import { Tabs } from "@/components/ui/tabs";
import Vlog from "./Vlog";

export function Media() {
  const TabDetails = [
    { value: "Blog", tabName: "Blog", component: "" },
    { value: "Vlog", tabName: "Vlog", component: "" },
    { value: "Podcast", tabName: "Podcast", component: "" },
    { value: "News", tabName: "News", component: "" },
  ];
  const tabs = [
    {
      title: "Blog",
      value: "Blog",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <div className="px-8 py-10">
            <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
              Your Daily Dose of Knowledge and Inspiration
            </h4>

            <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
              Explore blogs on everything from tech to lifestyle, featuring
              practical advice, innovative ideas, and stories to spark your
              passion and broaden your horizons.
            </p>
          </div>
          <Blog />
        </div>
      ),
    },
    {
      title: "Vlog",
      value: "Vlog",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          {/* <p>Life in Motion: Capturing Moments, Sharing Stories</p> */}
          <Vlog />
        </div>
      ),
    },
    {
      title: "News",
      value: "News",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <div className="px-8 py-10">
            <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
              Stay Informed: Latest News & Updates
            </h4>

            <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
              Get up-to-the-minute news and insights on topics that matter, with
              breaking headlines and in-depth analysis to keep you informed and
              engaged
            </p>
          </div>
          <News />
        </div>
      ),
    },
    {
      title: "Podcast",
      value: "Podcast",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <div className="px-8 py-10">
            <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
              Discover, Listen, and Connect
            </h4>

            <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
              Our podcasts go beyond audio—they’re experiences. Hear stories
              that resonate and insights that make you think, keeping you
              engaged and inspired wherever you are.
            </p>
          </div>
          <Podcast />
        </div>
      ),
    },
  ];
  return (
    <>
      <div>
        {/* <div className="bg-[rgb(16,29,45)]  md:pt-20 py-10 md:pb-48 ">
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
        </div> */}

        <div className=" [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
          <Tabs tabs={tabs} />
        </div>
        {/* <div className="commonContainer bg-[#F1B1ED] rounded-2xl p-8   marginT">
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
              <Podcast />
            </TabsContent>
            <TabsContent value="News">
              <News />
            </TabsContent>
          </Tabs>
        </div> */}
      </div>
    </>
  );
}
export default Media;

const DummyContent = () => {
  return (
    <Image
      src="/linear.webp"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
