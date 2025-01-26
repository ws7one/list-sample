import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const twcn = (...args: string[]) => {
  return twMerge(clsx(args));
};

const cn = (...args: string[]) => {
  return clsx(args);
};

export default cn;
