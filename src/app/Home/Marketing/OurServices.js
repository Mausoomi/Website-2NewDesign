import { GlareCard } from "../../../components/ui/glare-card";

function OurServices() {
  return (
    <div className="commonContainer md:py-20 py-10">
      <div>
        
        <h2 className="text-center text-xl md:text-4xl font-bold text-black dark:text-white py-10">
          Our Services
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
        <GlareCard className="flex flex-col items-start justify-end py-8 px-6">
          <p className="font-bold text-white text-lg">Digital marketing</p>
          <p className="font-normal text-base text-neutral-200 mt-4">
            Digital marketing enhances brand visibility and engagement through
            online platforms
          </p>
        </GlareCard>
        <GlareCard className="flex flex-col items-start justify-end py-8 px-6">
          <p className="font-bold text-white text-lg">sales training</p>
          <p className="font-normal text-base text-neutral-200 mt-4">
            Sales training develops essential skills for sales teams, boosting
            confidence and closing rates while fostering lasting customer
            relationships.
          </p>
        </GlareCard>
        <GlareCard className="flex flex-col items-start justify-end py-8 px-6">
          <p className="font-bold text-white text-lg">lead generation</p>
          <p className="font-normal text-base text-neutral-200 mt-4">
            Lead generation attracts potential customers through strategies like
            content marketing and targeted advertising, creating a robust
            pipeline of qualified leads to drive sales growth.
          </p>
        </GlareCard>
      </div>
    </div>
  );
}

export default OurServices;