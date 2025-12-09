"use client";
import ToolsLottieData from "@/../public/lottie-animation/tools-lottie.json";
import Lottie from "lottie-react";

export function ToolsLottieAnimation() {
  return (
    <div>
      <Lottie animationData={ToolsLottieData} />
    </div>
  );
}
