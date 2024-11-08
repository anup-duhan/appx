// components/Preloader.js
import React from 'react';

const Preloader = () => {
    return (
        <div className="flex items-center justify-center w-screen h-screen bg-gray-100">
            <div className="relative flex items-center justify-center space-x-2">
                {/* Rotating and Scaling Rectangles */}
                <div className="w-6 h-12 bg-pink-400 animate-grow-shrink"></div>
                <div className="w-6 h-12 bg-purple-500 animate-grow-shrink delay-150"></div>
                <div className="w-6 h-12 bg-orange-400 animate-grow-shrink delay-300"></div>

            </div>
        </div>
    );
};

export default Preloader;
