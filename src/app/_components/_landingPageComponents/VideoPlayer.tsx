"use client";

export default function VideoPlayer() {
    return (
        <div className="absolute inset-0 h-full w-full">
       <video 
        autoPlay 
        muted 
        loop 
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        src="https://squadra-media.s3.ap-south-1.amazonaws.com/video.webm"
      />
        </div>
    );
}
