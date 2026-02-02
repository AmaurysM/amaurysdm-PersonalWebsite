"use client";

import { useEffect, useState } from "react";

type BubbleType = {
  id: number;
  size: number;
  x: number;
  speed: number;
};

export default function Bubble({ maxBubbles = 15 }: { maxBubbles?: number }) {
  const [bubbles, setBubbles] = useState<BubbleType[]>([]);

  useEffect(() => {
    const createBubble = () => ({
      id: Math.random(),
      size: Math.random() * 60 + 30,
      x: Math.random() * window.innerWidth,
      speed: Math.random() * 10 + 10,
    });

    setBubbles(
      Array.from(
        { length: Math.min(maxBubbles, Math.floor(window.innerWidth / 200)) },
        createBubble
      )
    );
  }, [maxBubbles]);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          style={{
            position: "absolute",
            width: bubble.size,
            height: bubble.size,
            left: bubble.x,
            bottom: -100,
            borderRadius: "50%",
            background: "rgba(120,180,255,0.15)",
            animation: `floatUp ${bubble.speed}s linear infinite`,
          }}
        />
      ))}

      <style>{`
        @keyframes floatUp {
          from {
            transform: translateY(0);
            opacity: 1;
          }
          to {
            transform: translateY(-120vh);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}