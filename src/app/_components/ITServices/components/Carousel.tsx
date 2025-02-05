// components/Carousel.js

import React from 'react';

const Carousel = () => {
    return (
        <div className="overflow-hidden w-[100px] h-[50px] relative">
            <div className="flex animate-scroll">
                <div className="w-[100px] h-[50px] flex justify-center items-center bg-gray-300 mr-2">Item 1</div>
                <div className="w-[100px] h-[50px] flex justify-center items-center bg-gray-300 mr-2">Item 2</div>
                <div className="w-[100px] h-[50px] flex justify-center items-center bg-gray-300 mr-2">Item 3</div>
                <div className="w-[100px] h-[50px] flex justify-center items-center bg-gray-300 mr-2">Item 4</div>
                <div className="w-[100px] h-[50px] flex justify-center items-center bg-gray-300 mr-2">Item 5</div>
            </div>
        </div>
    );
};

export default Carousel;
