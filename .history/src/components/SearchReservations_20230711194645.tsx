/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";

const SearchReservations = () => {
  const [msgErr, setMsgErr] = useState<Map<string, string>>(new Map());

  return (<Grid container sx={{ top: 10, margin: 4}}>
    <Grid item xs={12}>
        <Typography sx={{ fontSize: 18, fontWeight: 'bold'}}>Search the reservation by the following criteria</Typography>
    </Grid>
  </Grid>);
};

export default SearchReservations;
