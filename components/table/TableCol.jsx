import cn from "@/utils/classnames";

const TableCol = ({ children, className, ...props }) => {
  return (
    <div className={cn(className, "text-regular-b3 text-body")} {...props}>
      {children}
    </div>
  );
};

export default TableCol;
