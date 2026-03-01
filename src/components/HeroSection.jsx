import TimeLine from "./TimeLine";
import Links from "./Links";

const HeroSection = () => {
  return (
    <div className="w-full max-w-6xl px-6 mx-auto grid grid-cols-1 lg:grid-cols-2 mt-30 backdrop-blur-md">
      <div className="p-20 border border-b-0 lg:border-r-0  bg-base-300/40">
        <h1 className="text-[clamp(1.5rem,4vw,3rem)] font-bold mb-2">Hi I am Abhinav </h1>
        <p className="text-[clamp(0.95rem,1.2vw,1.15rem)] leading-relaxed text-base-content/80">I am a Full stack web developer currently looking for a job.
        <span className="hidden md:inline"> Eventhough i am a fresher, i have built cool fullstack projects check it out in the projects section.
          And yes i like minimal designs with no clutter.</span>
        </p>
      </div>
      <div className="border bg-base-300/40 p-10 h-[400px] overflow-y-auto">
        <TimeLine />
      </div>
      <Links />
    </div>
  );
};

export default HeroSection;