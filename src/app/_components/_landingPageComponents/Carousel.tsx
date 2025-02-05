'use client'

import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

const images = [
"https://squadra-media.s3.ap-south-1.amazonaws.com/tinified+(1)/cimg.webp",
"https://squadra-media.s3.ap-south-1.amazonaws.com/tinified+(1)/cimg2.webp",
"https://squadra-media.s3.ap-south-1.amazonaws.com/tinified+(1)/cimg3.webp",
"https://squadra-media.s3.ap-south-1.amazonaws.com/tinified+(1)/cimg4.webp",
]

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
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
        setDirection(1)
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        )
      },
      2000
    )

    return () => {
      resetTimeout()
    }
  }, [currentIndex])

//   const goToPrevious = () => {
//     resetTimeout()
//     const isFirstSlide = currentIndex === 0
//     const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1
//     setDirection(-1)
//     setCurrentIndex(newIndex)
//   }

//   const goToNext = () => {
//     resetTimeout()
//     const isLastSlide = currentIndex === images.length - 1
//     const newIndex = isLastSlide ? 0 : currentIndex + 1
//     setDirection(1)
//     setCurrentIndex(newIndex)
//   }

//   const goToSlide = (index: number) => {
//     resetTimeout()
//     setDirection(index > currentIndex ? 1 : -1)
//     setCurrentIndex(index)
//   }

  return (
    <div className="bg-gray-200 rounded-[24px] relative w-full  max-w-3xl mx-auto">
      <div className="relative xl:w-[452px] xl:h-[518px] lg:w-full lg:h-[818px] md:w-full md:h-[818px] sm:w-[335px] sm:h-[383.92px] w-[335px] h-[383.92px] overflow-hidden rounded-[24px]">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out ${
              index === currentIndex
                ? 'translate-x-0'
                : index < currentIndex
                ? '-translate-x-full'
                : 'translate-x-full'
            } ${
              direction > 0
                ? 'animate-slide-left'
                : direction < 0
                ? 'animate-slide-right'
                : ''
            }`}
            style={{ zIndex: index === currentIndex ? 1 : 0 }}
          >
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </div>
      {/* <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button> */}
      {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full focus:outline-none ${
              index === currentIndex ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div> */}
    </div>
  )
}

