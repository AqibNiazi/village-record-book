import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
const AppLayout = () => {
  return (
    <Fragment>
      <Navbar />
      <Outlet />
    </Fragment>
  );
};
export default AppLayout;
