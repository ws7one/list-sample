import cn from "@/utils/classnames";
import React, { ReactNode, forwardRef } from "react";

interface ColProps {
  children: ReactNode;
  className?: string;
}

const Col: React.FC<ColProps> = forwardRef<HTMLDivElement, ColProps>(
  ({ children, className = "", ...props }, ref) => {
    return (
      <div className={cn("flex flex-col", className)} ref={ref} {...props}>
        {children as ReactNode}
      </div>
    );
  }
);
Col.displayName = "Col";

export default Col;
