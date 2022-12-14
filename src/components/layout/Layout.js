import React from "react";
import Header from "./header/Header";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <main className="layout">
        <Header />
        <div className="page_container">{children}</div>
      </main>
    </>
  );
};

export default Layout;
