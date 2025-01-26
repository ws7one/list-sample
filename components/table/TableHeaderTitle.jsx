import cn from "@/utils/classnames";

const TableHeaderTitle = ({ children, className, ...props }) => {
  return (
    <div
      className={cn(
        className,
        "text-bold-b4 2xl:text-bold-b3 text-darkgray-80 shrink-0"
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default TableHeaderTitle;
