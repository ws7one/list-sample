"use client";

import cn from "@/utils/classnames";
import { ReactNode } from "react";

const Header = ({
  children,
  className = "flex",
}: {
  children: ReactNode;
  className: string;
}) => {
  return (
    <div className={cn("justify-between items-center mb-4 sm:mb-8", className)}>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default Header;
