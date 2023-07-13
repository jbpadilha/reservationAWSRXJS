import React from "react";
import "./App.css";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers";
import RoutesComponent from "./components/routes/RoutesComponent";

const App = () => (
  <LocalizationProvider dateAdapter={AdapterDateFns}>
    <div className="App">
      <RoutesComponent />
    </div>
  </LocalizationProvider>
);

export default App;
