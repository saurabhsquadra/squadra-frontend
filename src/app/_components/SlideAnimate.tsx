"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

const messages = [
    "Media",
    "Tech",
    "Digital marketing",
    "Branding",
    "Animations"
]

const textVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -50, opacity: 0 }
}

export default function TextSlideUp({ isScroll, isSidebarOpen }: { isScroll: boolean; isSidebarOpen: boolean }) {
    const [currentIndex, setCurrentIndex] = useState(0)
     const pathname = usePathname();
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length)
        }, 2000) // Change text every 3 seconds

        return () => clearInterval(interval)
    }, [])
    if (isSidebarOpen) {
        return null
    }

    return (
        <div className="pl-2 pt-2 rounded-lg flex items-center justify-center h-12  overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.div style={{
                    fontFamily: 'Sofia Pro, sans-serif',
                    fontWeight: 700,
                    color: isScroll ? '#08115b' : pathname.includes("/contact-us") ? '#08115b' : 'white'
                }}
                    key={currentIndex}
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{
                        y: { type: 'spring', stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                    }}
                    className={`text-center text-${isScroll ? 'black' : pathname.includes("/contact-us") ? 'black' : 'white'} text-sm font-semibold`}
                >
                    {messages[currentIndex]}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

