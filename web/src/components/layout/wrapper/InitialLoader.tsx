"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import animationData from "@/../public/lottie-animation/loading-data.json";

export function InitialLoader({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <div className="
          fixed inset-0 z-50 flex items-center justify-center
          bg-white dark:bg-black
        ">
          <div className="w-48 h-48">
            <Lottie animationData={animationData} loop={true} />
          </div>
        </div>
      )}

      <div
        className={`transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}
      >
        {children}
      </div>
    </div>
  );
}
