import React, { ReactNode, Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import Loading from "@/components/Loading";
import DesktopMenu from "@/components/DesktopMenu";

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="sm:flex h-full fixed top-0 left-0 w-full overflow-y-auto">
      <DesktopMenu />
      <div className="transition-all duration-300 ease-in-out flex-1 relative top-16 sm:top-0 min-h-full dashboard">
        <div
          className="w-11/12 sm:w-10/12 mx-auto my-0 relative max-w-6xl h-full xs:pb-30"
          id="layout"
        >
          <AnimatePresence>
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
