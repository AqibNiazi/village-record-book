import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { WardPopulation } from "@components/DataTable";
import AppLayout from "@layout";
import { Dashboard } from "@pages";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Dashboard />}>
            <Route index element={<Navigate to="population" />} />
            <Route path="population" element={<WardPopulation />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
