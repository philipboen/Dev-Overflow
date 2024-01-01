import Navbar from "@/components/shared/Nav/Navbar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-container background-light850_dark100 text-dark100_light900 relative">
      <Navbar />
      <div>
        {/* Left Sidebar */}
        <div className="flex min-h-screen">
          <main>{children}</main>
        </div>
        {/* Right Sidebar */}
      </div>
    </div>
  );
};

export default Layout;
