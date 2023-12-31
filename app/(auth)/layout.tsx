import React from "react";

type childrenProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: childrenProps) => {
  return (
    <main className="flex min-h-screen w-full items-center justify-center">
      {children}
    </main>
  );
};

export default Layout;
