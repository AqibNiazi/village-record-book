import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
export default AppLayout;
