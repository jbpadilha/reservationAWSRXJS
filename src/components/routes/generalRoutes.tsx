import React from "react";
import { MultiRoutes } from "../../interfaces/interfaces";
import { SEARCH_ROUTE } from "../../config/constants";

const SearchReservations = React.lazy(() => import("../SearchReservations"));

const generalRoutes: MultiRoutes[] = [
  {
    path: SEARCH_ROUTE,
    key: "SearchReservations",
    element: <SearchReservations />,
  },
];

export default generalRoutes;
