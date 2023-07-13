import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Main = React.lazy(() => import("../Main"));
const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};
export default RoutesComponent;
