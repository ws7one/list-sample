import React from "react";

import cn from "@/utils/classnames";

const Main = ({ children, className = "" }) => {
  return (
    <main
      className={cn(
        className,
        "w-full transition-all duration-200 ease-in-out py-4 sm:py-8"
      )}
      id="main"
    >
      {children}
    </main>
  );
};

export default Main;
