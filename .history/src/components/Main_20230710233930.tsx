import { Grid } from "@mui/material";
import React from "react";

const Main = () => {
  return (
    <Grid container sx={{width: "100%", height: "100%", flexDirection: "row",}}>
      <Grid item xs={12} sx={{fontSize: 24}}>
        Reservations
      </Grid>
    </Grid>
  );
};

export default Main;
