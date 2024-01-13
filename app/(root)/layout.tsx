import Navbar from "@/components/shared/Nav/Navbar";
import LeftSidebar from "@/components/shared/Sidebar/LeftSidebar";
import RightSidebar from "@/components/shared/Sidebar/RightSidebar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-container background-light850_dark100 text-dark100_light900 relative">
      <Navbar />
      <div className="flex">
        <LeftSidebar />
        <div className="flex min-h-screen flex-1 flex-col px-8 pb-6 pt-[120px] max-md:pb-14 max-sm:px-0">
          <div className="mx-auto w-full">
            <main>{children}</main>
          </div>
        </div>
        <RightSidebar />
      </div>
    </div>
  );
};

export default Layout;
