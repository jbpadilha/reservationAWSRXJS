import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { MultiRoutes } from "../../interfaces/interfaces";
import generalRoutes from "./generalRoutes";
import Menu from "../Menu";
import { MAIN_ROUTE } from "../../config/constants";

const MainRoutes = () => {
  const routes: MultiRoutes[] = [];
  routes.push(...generalRoutes);

  return (
    <Suspense fallback={<LinearProgress />}>
      <Routes>
        <Route path={MAIN_ROUTE} element={<Menu />} />
        {routes.map((route: MultiRoutes) => (
          <Route key={route.key} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Suspense>
  );
};

export default MainRoutes;
