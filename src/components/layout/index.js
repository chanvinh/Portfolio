import React from "react";
import Home from "../home";
import "./layout.scss";
import About from "../about";

const Layout = () => {
  return (
    <div className="layout">
      <Home />
      <About />
    </div>
  );
};

export default Layout;
