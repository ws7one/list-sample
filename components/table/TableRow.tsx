import { MouseEvent, ReactNode, forwardRef } from "react";

import cn from "@/utils/classnames";

interface TableRowProps {
  bordered?: boolean;
  children: ReactNode;
  className?: string;
  dataTestId?: string;
  hovered?: boolean;
  isHeader?: boolean;
  onClick?: (e: MouseEvent) => void;
}

const TableRow = forwardRef<HTMLDivElement, TableRowProps>(
  (
    { children, className, dataTestId = "", hovered, isHeader, ...props },
    ref
  ) => {
    return (
      <div
        className={cn(
          className || "",
          "row flex items-center p-4 transition-all gap-1 rounded-xl mb-3",
          hovered ? "hover:bg-lightgray-60" : "",
          isHeader
            ? "bg-lightgray-200 border-0 mb-8"
            : "border-1 border-lightgray"
        )}
        data-testid={dataTestId}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);
TableRow.displayName = "TableRow";

export default TableRow;
