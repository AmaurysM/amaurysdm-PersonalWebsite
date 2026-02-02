"use client";

import { TrendingUp, Users, Shield } from "lucide-react";
import Bubble from "./Bubble";

export function HeroShard() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-linear-to-br from-blue-900 via-blue-800 to-blue-700">
      <Bubble maxBubbles={20} />
      {/* Content */}
      <div className="relative flex flex-col items-center justify-center h-full px-6 py-5 text-white text-center">
        {/* Title */}
        <h1 className="text-[20px] font-bold leading-tight bg-linear-to-r from-blue-200 to-white bg-clip-text text-transparent">
          Trade Smarter, Together
        </h1>

        {/* Subtitle */}
        <p className="mt-1.5 max-w-[320px] text-[12px] text-blue-100 leading-snug">
          Join the community where social insights meet smart investing
        </p>

        {/* Feature Grid */}
        <div className="mt-4 grid grid-cols-3 gap-3 w-full max-w-90">
          {[
            {
              icon: TrendingUp,
              title: "Real-time",
              desc: "Live data",
            },
            {
              icon: Users,
              title: "Social",
              desc: "Top traders",
            },
            {
              icon: Shield,
              title: "Secure",
              desc: "Bank-grade",
            },
          ].map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex flex-col items-center rounded-xl bg-white/10 px-2.5 py-3 backdrop-blur-sm"
            >
              <Icon className="h-4 w-4 mb-1.5 text-blue-200" />
              <span className="text-[11px] font-semibold leading-none">
                {title}
              </span>
              <span className="mt-0.5 text-[10px] text-blue-200 leading-none">
                {desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}