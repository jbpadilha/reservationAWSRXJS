import { Grid } from "@mui/material";
import { makeStyles } from '@mui/styles';
import React from "react";

const styles: any = makeStyles(() => ({
  root: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
  },
  mainTitle: {
    fontSize: 24,
  },
}));

const Main = () => {
  const css = styles();
  return (
    <Grid container className={css.root}>
      <Grid item xs={12} className={css.mainTitle}>
        Reservations
      </Grid>
    </Grid>
  );
};

export default Main;
