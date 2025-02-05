import React from "react";
import Image from "next/image";
// import { ArrowUpRight } from "lucide-react";

const LifeAtSquadra = () => {
  return (
    <section className="life-at-squadra py-12 px-0 mb-6 bg-gray-100 max-w-fit mx-auto h-full">
      {/* Heading and Subheading */}
    <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-8 text-center">
  <h1 className="text-3xl sm:text-4xl md:text-6xl font-light text-gray-800 mb-4">
    Life at <span className="text-yellow-500">Squadra Media</span>
  </h1>
  <p className="text-base sm:text-lg md:text-md text-gray-500 max-w-2xl mx-auto">
    A space to unlock your true potential, chase your dreams, and embrace your passion 
    all while enjoying every moment with fun and laughter!
  </p>
</div>

<div className="px-0 sm:px-8 md:px-16 lg:px-20 xl:px-40">
 



      {/* Image Block 1 */}
 <div className="grid grid-cols-10 gap-4 mb-5">
  <div className="col-span-6">
  <div className="relative w-full h-full">
    <Image width={860} height={480}
                src={"https://squadra-media.s3.ap-south-1.amazonaws.com/tinified+(1)/444.webp"}
      priority
      alt="Left Placeholder Image"
      className="w-full h-full object-cover"
    />
  </div>
</div>

 <div className="col-span-4">
  <div className="relative w-full h-full">
    <Image width={860} height={480}
                src={"https://squadra-media.s3.ap-south-1.amazonaws.com/tinified+(1)/5555.webp"}
      priority
      alt="Left Placeholder Image"
      className="w-full h-full object-cover"
    />
  </div>
</div>
</div>

      {/* Image Block 2 */}
     <div className="grid grid-cols-10 gap-4 my-5">
<div className="col-span-3">
  <div className="relative w-full h-full">
    <Image width={860} height={480}
                src={"https://squadra-media.s3.ap-south-1.amazonaws.com/tinified+(1)/DSC_8285+2.webp"}
      priority
      alt="Left Placeholder Image"
      className="w-full h-full object-cover"
    />
  </div>
</div>


  <div className="col-span-7">
  <div className="aspect-w-7 aspect-h-3">
    <Image width={860} height={480}
                src={"https://squadra-media.s3.ap-south-1.amazonaws.com/tinified+(1)/DSC_2971+2.webp"}
      alt="Right Placeholder Image"
      className="w-full h-full object-cover"
    />
  </div>
</div>


  
 
</div>
     <div className="grid grid-cols-10 gap-10 my-5">
{/* change this line after adding join us section md:col-span-10 to col-span-10 */}
  <div className="col-span-10 md:col-span-10">
  <div className="relative w-full h-full">
    <Image width={860} height={480}
                src={"https://squadra-media.s3.ap-south-1.amazonaws.com/tinified+(1)/2.1.webp"}
      priority
      alt="Left Placeholder Image"
      className="w-full h-full object-cover"
    />
  </div>
</div>

 {/* <div className="col-span-10  md:col-span-3 space-y-20 flex flex-col justify-center items-start  text-start">
 <div className="space-y-2">

  <p className="text-3xl md:text-4xl lg:text-5xl font-light">Join Us</p>
<p className="text-base md:text-md lg:text-md font-light text-gray-500">
  View open positions <br />
  if you want to join the team.
</p>
 </div>

   <div className="join-us-button w-[163px] text-start bg-[#6D6D6D] text-white px-6 py-3 rounded-full mt-4 transition relative">
  VIEW JOBS
  <div className="w-8 h-8 absolute bg-white rounded-full top-2 right-2 flex items-center justify-center">
    <ArrowUpRight color="#FBAE17" className="h-6 w-6" />
  </div>
</div>

 </div> */}
  
 
</div>
</div>
      {/* Join Us Section */}
      {/* <div className="image-block-2 md:flex justify-between gap-4 mb-8 md:h-70  h-36 md:h-[480px]">
        <Image
          src={img}
          alt="Image 4"
          layout="intrinsic"
          width={800}
          height={533}
          className="shadow-lg object-cover md:w-2/3 w-full md:h-70  h-36 md:h-[380px]"
        />
        <div className="join-us-text flex flex-col justify-center w-full md:w-1/2 px-12">
          <h1 className="text-[#131313] text-4xl lg:text-4xl font-[300]">Join Us</h1>
          <h2 className="md:text-[20px] w-full text-start font-[300] text-gray-800 lg:mb-24 md:mb-16 mb-8">
            Join Us and View Open Positions
          </h2>
          <div className="join-us-button w-[163px] text-start bg-[#6D6D6D] text-white px-6 py-3 rounded-full mt-4 transition relative">
            VIEW JOBS
            <div className="w-8 h-8 absolute bg-white rounded-full top-2 right-2"> 

            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default LifeAtSquadra;
