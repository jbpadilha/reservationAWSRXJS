/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Grid } from "@mui/material";
import React, { useState } from "react";

const SearchReservations = () => {
  const [msgErr, setMsgErr] = useState<Map<string, string>>(new Map());

  return <Grid container sx={{ top: 10}}> Search</Grid>;
};

export default SearchReservations;
