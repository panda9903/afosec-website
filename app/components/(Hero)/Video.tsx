"use client";
import React from "react";
import { useWindowWidth } from '@react-hook/window-size'

const Video = () => {
  const width = useWindowWidth()
  const isDesktop = width > 720;

  return (
    <div className="mb-4">
      {isDesktop ? (
        <video
          autoPlay
          controls={false}
          muted
          playsInline
          preload="true"
          loop
          className="w-screen h-screen object-cover"
        >
          <source src="../../../landscape.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      ) : (
        <video
          autoPlay
          controls={false}
          muted
          playsInline
          preload="true"
          loop
          className="w-screen h-screen object-cover"
        >
          <source src="../../../potrait.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      )}
    </div>
  );
};

export default Video;