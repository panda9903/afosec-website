"use client";
import React, { useEffect } from "react";
import { useState } from "react";

const Video = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setWidth(window.innerWidth);
  };


  useEffect(() => {
    console.log(width);
  
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  return (
    <div className="mb-4">
      <video
        autoPlay
        controls={false}
        muted
        playsInline
        preload="true"
        loop
        className="w-screen h-screen object-cover"
      >
        {width > 768 ? ( // 768px is the breakpoint for mobile
          <source src="../../../landscape.mp4" type="video/mp4" />
        ) : (
          <source src="../../../potrait.mp4" type="video/mp4" />
        )}
        Your browser does not support HTML5 video.
      </video>
    </div>
  );
};

export default Video;
