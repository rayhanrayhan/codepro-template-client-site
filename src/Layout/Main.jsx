import React from "react";
import Navber from "./Home/Navber/Navber";
import { Outlet } from "react-router-dom";
import Footer from "./Home/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Navber></Navber>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
