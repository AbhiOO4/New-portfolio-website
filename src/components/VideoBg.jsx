import React from "react";
import videoBg from "../assets/bg-video.mp4";

function VideoBg({ children }) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">

      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={videoBg} type="video/mp4" />
      </video>

       <div className="absolute inset-0 bg-base-300/50"></div>

      <div className="relative z-10">
        {children}
      </div>

    </div>
  );
}

export default VideoBg;