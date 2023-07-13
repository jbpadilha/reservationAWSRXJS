import React from "react";
import { MultiRoutes } from "../../interfaces/interfaces";
import eneralRoutes from "./routes";

const MainRoutes = () => {
    const routes: MultiRoutes[] = [];
    routes.push(...generalRoutes)

};

export default MainRoutes;
