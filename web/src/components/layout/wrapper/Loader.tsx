import Lottie from "lottie-react";

import animationData from "@/../public/lottie-animation/loading-data.json";

export function Loader() {
  return (
    <div
      className="
          fixed inset-0 z-50 flex items-center justify-center
          bg-white dark:bg-black
        "
    >
      <div className="w-48 h-48">
        <Lottie animationData={animationData} loop={true} />
      </div>
    </div>
  );
}
