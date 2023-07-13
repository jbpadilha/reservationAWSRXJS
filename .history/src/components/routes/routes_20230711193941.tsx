import React from "react";
import { MultiRoutes } from "../../interfaces/interfaces";

const SearchReservations = React.lazy(() => import("../SearchReservations"));

const generalRoutes: MultiRoutes[] = [
  {
    path: "/search",
    key: "SearchReservations",
    element: <SearchReservations />,
  },
];

export default generalRoutes;
