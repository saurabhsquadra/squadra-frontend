import React from "react";
import BrandingCarousel from "./components/BrandingCarousel";
import OurServices from "./components/OurServices";
import ScrollQuoteSelector from "./components//ScrollableQuoteNavigation";
import OurLatestWork from "./components/OurLatestWork";
import { InfiniteSliderBasic } from "./components/TrustedBy";
const DesktopUi = () => {
  return (
    <>
      <div className="relative w-full h-screen bg-white">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="https://s3-figma-videos-production-sig.figma.com/video/1312412244029964973/TEAM/40ab/f6c3/-c046-4a85-b01f-f4b2e876f479?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=f382H9uE8kL9YX4415M9F5c~yQfzciP2J2Bw9Kei6GWX4bO3LHn1~aKQ98GNDGekdJoSdCPFYk0y0p02OeGk1ZU-49HJ-~vwczI7HPhk82fqpxX81a5VnyArqWGAspgCi3kYSNkhZEMYQIQ6IPKTCtTRNIcB2SQqnVNQRg~gtE3G5KuVy~LClanBHaj3KwOila3Cbk7qXb8DUUIGYl3BDabB7BfzshufyrILThxycsJxW2S-03LbTsKLwE-7EJ0s441T9~SPZaiheNxfqLzT-FI2qtQrpfBGB6Tm0R0TMPuUOe8kVS4d0tFn1rvX69ROla~0DMJvIsDLCO3zSIhc1w__"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="h-fit flex flex-col  w-full  items-center bg-black">
        <div
          className="max-w-[1200px] flex flex-col items-center py-[57px] lg:py-[161px] bg-black"
          // style={{ height: "655px" }}
        >
          <p className="text-white text-[32px] md:text-[42px] lg:text-[62px] px-[20px] md:px-10 text-center md:text-start font-semibold">
            Crafting visually stunning, strategically sound solutions{" "}
            <strong className="font-semibold text-gray-500">
              that elevate your brand to the next level.
            </strong>
          </p>
        </div>
        <BrandingCarousel />
        <OurServices />
        <div className="hidden md:flex md:flex-col w-full">
          <ScrollQuoteSelector />
        </div>
        <OurLatestWork />
        <div className="flex flex-col pt-10">
          <p className="w-full text-center text-white text-[12px]">Trusted by</p>
          <InfiniteSliderBasic />
        </div>
      </div>
    </>
  );
};

export default DesktopUi;
