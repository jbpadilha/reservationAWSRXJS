import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MAIN_ROUTE } from "../../config/constants";

const Main = React.lazy(() => import("../Main"));
const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={MAIN_ROUTE} element={<Main />} />
        <Route path="*" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};
export default RoutesComponent;
