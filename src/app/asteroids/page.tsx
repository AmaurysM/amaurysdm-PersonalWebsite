"use client";

import React from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const P5Component = dynamic(() => import("../components/asteroids"), {
  ssr: false,
});

const AsteroidsPage = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <button
        onClick={() => router.back()}
        className="absolute top-4 left-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        ← Back
      </button>
      <h1 className="text-4xl font-bold mb-4 text-yellow-400">Asteroids Game</h1>
      <p className="text-lg text-gray-300 mb-6">
        Use arrow keys to navigate and spacebar to shoot. Click &quot;Start&quot; to begin!
      </p>
      <div className="border-4 border-yellow-500 rounded-lg shadow-lg">
        <P5Component />
      </div>
    </div>
  );
};

export default AsteroidsPage;
