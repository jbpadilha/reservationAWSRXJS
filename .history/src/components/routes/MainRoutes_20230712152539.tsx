import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { MultiRoutes } from "../../interfaces/interfaces";
import generalRoutes from "./generalRoutes";

const MainRoutes = () => {
  const routes: MultiRoutes[] = [];
  routes.push(...generalRoutes);

  return (
    <Suspense fallback={<LinearProgress />}>
      <Routes>
        {routes.map((route: MultiRoutes) => (
          <Route key={route.key} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Suspense>
  );
};

export default MainRoutes;
