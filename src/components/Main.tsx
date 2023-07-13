import React from "react";
import { Grid } from "@mui/material";
import Header from "./Header";
import MainRoutes from "./routes/MainRoutes";
import MessageModal from "./MessageModal";

const Main = () => {
  return (
    <Grid
      container
      sx={{ width: "100%", height: "100%", flexDirection: "row" }}
    >
      <Grid component="header" item xs={12} sx={{ fontSize: 24 }}>
        <Header />
      </Grid>
      <Grid item xs={12} component="main">
        <MainRoutes />
      </Grid>
      <MessageModal />
    </Grid>
  );
};

export default Main;
