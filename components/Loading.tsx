"use client";
import Lottie from "lottie-react";

import Loader from "@/resources/lottie-files/loading-lottie.json";

const Loading = () => {
  return (
    <div className="w-full h-[calc(100vh-10rem)] sm:h-screen flex items-center justify-center">
      <Lottie animationData={Loader} loop style={{ height: 300 }} />
    </div>
  );
};

export default Loading;
