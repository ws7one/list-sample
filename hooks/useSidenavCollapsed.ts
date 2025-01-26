"use client";

import { APP_LOCAL_STORAGE_KEYS } from "@/constants/storage";
import { useEffect, useState } from "react";
import { SIDENAV_STATUS } from "@/constants/storage";

const useSidenavCollapsed = () => {
  const storedStatus = !!localStorage
    ? localStorage.getItem(APP_LOCAL_STORAGE_KEYS.SIDENAV_STATUS) ||
      SIDENAV_STATUS.OPEN
    : SIDENAV_STATUS.OPEN;

  const [sidenavStatus, setSidenavStatus] = useState(storedStatus);

  useEffect(() => {
    localStorage.setItem(APP_LOCAL_STORAGE_KEYS.SIDENAV_STATUS, sidenavStatus);
  }, [sidenavStatus]);

  const toggleSidenav = () => {
    setSidenavStatus((prev) =>
      prev === SIDENAV_STATUS.OPEN ? SIDENAV_STATUS.CLOSED : SIDENAV_STATUS.OPEN
    );
  };

  return { status: sidenavStatus === SIDENAV_STATUS.CLOSED, toggleSidenav };
};

export default useSidenavCollapsed;
