"use client";

import React from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { FaArrowLeft } from "react-icons/fa";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['700'] });

const P5Component = dynamic(() => import("../components/asteroids"), {
  ssr: false,
  loading: () => <div className="w-[800px] h-[600px] flex items-center justify-center bg-gray-800/50 rounded-lg">
    <div className="animate-pulse text-gray-400 text-lg">Loading game...</div>
  </div>
});

const AsteroidsPage = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-space-900 to-gray-900 text-white relative overflow-hidden">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="absolute top-6 left-6 flex items-center gap-2 group transition-all duration-300 hover:scale-105"
      >
        <FaArrowLeft className="text-blue-400 group-hover:text-blue-300 transition-colors duration-200" />
        <span className="text-blue-400 group-hover:text-blue-300 font-medium tracking-wide transition-colors duration-200">
          Return to Portfolio
        </span>
      </button>

      {/* Content Container */}
      <div className="flex flex-col items-center px-4 py-8 max-w-4xl w-full">
        {/* Title Section */}
        <div className="mb-8 text-center">
          <h1 className={`text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 bg-clip-text text-transparent ${spaceGrotesk.className} drop-shadow-[0_2px_4px_rgba(251,191,36,0.4)]`}>
            ASTEROIDS
          </h1>
          <p className="text-lg text-gray-300 mb-6 max-w-2xl leading-relaxed">
            Navigate through the asteroid field using arrow keys, 
            press <kbd className="px-2 py-1 bg-gray-800 rounded-md text-amber-300">SPACE</kbd> to shoot. 
            Avoid collisions and survive as long as possible!
          </p>
        </div>

        {/* Game Canvas Container */}
        <div className="relative border-2 border-gray-700 rounded-xl overflow-hidden shadow-2xl hover:border-amber-400/50 transition-all duration-300 group">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/30 to-gray-800/30" />
          <div className="relative z-10">
            <P5Component />
          </div>
          
          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-xl pointer-events-none border-2 border-transparent group-hover:border-amber-400/20 group-hover:shadow-[0_0_40px_5px_rgba(251,191,36,0.1)] transition-all duration-300" />
        </div>

      </div>
    </div>
  );
};

export default AsteroidsPage;