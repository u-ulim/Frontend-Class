import React from "react";
import Searchbar from "./searchbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Searchbar />
      {children}
    </>
  );
};

export default Layout;
