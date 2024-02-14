"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import {
  useWindowWidth,
} from '@react-hook/window-size'

const Video = () => {
  const width = useWindowWidth()
  
  const isDesktop = width > 768;

  //alert(isDesktop)

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
        {/*{width > 768 ? ( 
          <source src="../../../landscape.mp4" type="video/mp4" />
        ) : (
          <source src="../../../potrait.mp4" type="video/mp4" />
        )}*/}
        {
          isDesktop && <source src="../../../landscape.mp4" type="video/mp4" />
        }
        {
          !isDesktop && <source src="../../../potrait.mp4" type="video/mp4" />
        }
        Your browser does not support HTML5 video.
      </video>
    </div>
  );
};

export default Video;
