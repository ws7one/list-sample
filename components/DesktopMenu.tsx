"use client";

import React from "react";
import Col from "./layout/Col";
import cn from "@/utils/classnames";
import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";
import { MenuItem, MenuLabel } from "./sidenav/Elements";

const DesktopMenu = () => {
  return (
    <aside
      aria-label="Sidebar"
      className={cn(
        "h-full box-border min-h-screen sticky top-0 z-40 p-6 transition-all duration-300 ease-in-out hidden sm:flex justify-center sidenav border-r-2 border-r-slate-400",
        "lg:w-72"
      )}
      id="sidenav"
    >
      <Col className="gap-2 overflow-hidden grow">
        <Link href={ROUTES.HOME}>
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
        </Link>
        <Col
          className={cn(
            "2xl:mb-8 xl:mb-4 mb-0 transition-all grow sm:w-fit lg:w-auto",
            "mt-4",
            "2xl:gap-4 xl:gap-3 lg:gap-2 md:gap-1 gap-0"
          )}
        >
          <MenuItem href={ROUTES.HOME}>
            <MenuLabel>People</MenuLabel>
          </MenuItem>
          <MenuItem href={ROUTES.CONTACT}>
            <MenuLabel>Contact</MenuLabel>
          </MenuItem>
          <MenuItem href={ROUTES.ABOUT}>
            <MenuLabel>About</MenuLabel>
          </MenuItem>
        </Col>
      </Col>
    </aside>
  );
};

export default DesktopMenu;
