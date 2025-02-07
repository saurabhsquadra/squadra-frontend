'use client'

import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

const images = [
  "https://squadra-media.s3.ap-south-1.amazonaws.com/tinified+(1)/cimg.webp",
  "https://squadra-media.s3.ap-south-1.amazonaws.com/tinified+(1)/cimg2.webp",
  "https://squadra-media.s3.ap-south-1.amazonaws.com/tinified+(1)/cimg3.webp",
  "https://squadra-media.s3.ap-south-1.amazonaws.com/tinified+(1)/cimg4.webp",
]

const texts = [
  " Our team is the foundation of innovation.",
  "Creativity fuels our vision and growth.",
  "Collaboration turns ideas into reality.",
  "Excellence drives everything we create."
]

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  useEffect(() => {
    resetTimeout()
    timeoutRef.current = setTimeout(
      () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
      },
      3000
    )

    return () => {
      resetTimeout()
    }
  }, [currentIndex])

  return (
    <div className="bg-gray-200 rounded-[24px] relative w-full max-w-3xl mx-auto">
      <div className="relative xl:w-[452px] xl:h-[518px] lg:w-full lg:h-[818px] md:w-full md:h-[818px] sm:w-full sm:h-[818px] w-[335px] h-[383.92px] overflow-hidden rounded-[24px]">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            style={{ zIndex: index === currentIndex ? 1 : 0 }}
          >
            <Image src={src} alt={`Slide ${index + 1}`} layout="fill" objectFit="cover" />

            {/* Text Box (Bottom Left Start) */}
            {index === currentIndex && (
              <div className="absolute bottom-3 left-0 w-full bg-black bg-opacity-20 text-white px-4 py-3 font-semibold text-start text-[13px]">
                {texts[currentIndex]}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Indicators with Progress Bar */}
      <div className="absolute bottom-4 lg:left-[24%] md:left-[15%] sm:left-[15%] left-[33%] transform -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <div
            key={index}
            className={`relative w-10 h-1 bg-gray-400 rounded-full overflow-hidden`}
          >
            {/* Progress Fill */}
            <div
              className={`absolute left-0 top-0 h-full bg-white transition-all duration-[3000ms]`}
              style={{
                width: index === currentIndex ? '100%' : '0%',
                transition: index === currentIndex ? 'width 3s linear' : 'none',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
