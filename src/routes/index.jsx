import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "@layout";
import { Dashboard } from "@pages";
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoutes;
