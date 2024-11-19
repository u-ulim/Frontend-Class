import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div>임시서치바</div>
      {children}
    </>
  );
};

export default Layout;
