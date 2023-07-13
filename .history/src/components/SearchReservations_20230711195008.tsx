/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const SearchReservations = () => {
  const { t } = useTranslation();
  const [msgErr, setMsgErr] = useState<Map<string, string>>(new Map());

  return (
    <Grid container sx={{ top: 10, margin: 4 }}>
      <Grid item xs={12}>
        <Typography sx={{ fontSize: 18, fontWeight: "bold" }}>
          Search the reservation by the following criteria:
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ marginTop: 2 }}>
        <Grid container>
          <Grid item xs={4}>
            <Typography sx={{ fontSize: 14, fontWeight: "bold" }}>
              {t("departureDate")}
            </Typography>
          </Grid>
          <Grid item xs={8} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SearchReservations;
