
 function AboutUsHeroSection() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        src="https://squadra-media.s3.ap-south-1.amazonaws.com/4914730_Colleagues_Job_1920x1080_b0ce926804.mp4"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Content */}
      <div className="relative flex h-full items-center">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24">
          <div className="max-w-3xl pt-60 md:pt-60 lg:pt-72"> {/* Added padding-top here */}
           <h1 className="text-left text-4xl font-extralight tracking-tight text-white sm:text-5xl sm:leading-tight md:text-6xl lg:text-7xl lg:leading-[70px] md:leading-relaxed">
      Expertise Meets<br className="md:inline" />
        Excellence!
</h1>

            <p className="mt-2 text-left text-lg text-gray-200 sm:text-xl md:text-xl">
             Our team united by passion and innovation            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUsHeroSection