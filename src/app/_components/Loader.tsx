'use client';
import React, { useEffect, useState } from 'react';
import initialLoader from '@/utilities/images/squadra-loader.gif';
import Image from 'next/image';

const InitialVideoLoader: React.FC = () => {
  const [isVideoPlayed, setIsVideoPlayed] = useState(false);

  useEffect(() => {

    setIsVideoPlayed(true);


  }, []);

  if (!isVideoPlayed) {
    return null;
  }

  return (
    <div className="initial-video-loader min-h-screen flex items-center justify-center bg-[#FDFDFD]">
      {/* <video
        autoPlay
        muted
        playsInline
        className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3"
        preload="auto"
        onEnded={handleVideoEnd}
      >
        <source
          src="https://squadra-media.s3.ap-south-1.amazonaws.com/Saurabh+Ubale%27s+Video+-+Jan+12%2C+2025-VEED+%28online-video-cutter.com%29.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video> */}
      <Image
        src={initialLoader}
        alt="Initial Video Loader"
        className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3"
      />
    </div>
  );
};

export default InitialVideoLoader;
