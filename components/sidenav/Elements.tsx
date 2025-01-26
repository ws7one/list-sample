import { ReactNode } from "react";
import cn from "@/utils/classnames";
import { AnimatePresence, motion } from "framer-motion";
import { useWindowSize } from "@/hooks/useWindowSize";
import { usePathname } from "next/navigation";
import RouterLink from "next/link";

const BREAKPOINTS = {
  MOBILE: 961,
};

export const MenuItem = ({
  children,
  href,
  isSelected,
  onClick,
  ...props
}: {
  children: ReactNode;
  href?: string;
  isSelected?: boolean;
  onClick?: () => void;
}) => {
  const pathname = usePathname();
  const selected = isSelected ?? pathname === href;
  const className = cn(
    "flex items-center gap-2 text-regular-b2 rounded-xl  cursor-pointer hover:bg-lightgray-200 transition-colors",
    selected ? "bg-lightgray-200 text-blue" : "text-darkgray-500",
    "px-3 py-2"
  );
  const { width } = useWindowSize();
  const onClickMenuItem = () => {
    if (width <= BREAKPOINTS.MOBILE) return;
    onClick?.();
  };

  return (
    <div className="group/menu items-center z-[2]" {...props}>
      {href ? (
        <RouterLink className={className} href={href}>
          {children}
        </RouterLink>
      ) : (
        <div className={className} onClick={onClickMenuItem}>
          {children}
        </div>
      )}
    </div>
  );
};

export const MenuLabel = ({ children }: { children: ReactNode }) => {
  return (
    <span className={cn("whitespace-nowrap text-medium-b2")}>{children}</span>
  );
};

export const SubMenu = ({
  children,
  isOpen,
}: {
  children: ReactNode;
  isOpen: boolean;
}) => {
  const { width } = useWindowSize();

  const shouldSubMenuOpen = width > BREAKPOINTS.MOBILE;

  if (!shouldSubMenuOpen) return null;

  return (
    <AnimatePresence>
      {shouldSubMenuOpen && isOpen && (
        <motion.div
          animate={{ height: "auto", opacity: 1, top: 0 }}
          className={cn("whitespace-nowrap hidden lg:block z-1")}
          exit={{ height: "0", opacity: 0, top: "-40px" }}
          initial={{
            height: "0",
            opacity: 0,
            position: "relative",
            top: "-40px",
          }}
          transition={{ duration: 0.35 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MenuSlideOut = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className={cn(
        "absolute left-20 invisible -translate-x-6 opacity-0 transition-all ease-in cursor-default",
        "group-hover/menu:visible group-hover/menu:translate-x-0 group-hover/menu:opacity-100"
      )}
    >
      <div className="p-2.5 mx-10 bg-lightgray-200 text-medium-b2 text-darkgray-500 rounded-xl whitespace-nowrap">
        {children}
      </div>
    </div>
  );
};
