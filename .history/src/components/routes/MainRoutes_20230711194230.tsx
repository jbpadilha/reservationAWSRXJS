import { MultiRoutes } from "../../interfaces/interfaces";
import generalRoutes from "./generalRoutes";

const MainRoutes = () => {
    const routes: MultiRoutes[] = [];
    routes.push(...generalRoutes)

};

export default MainRoutes;
