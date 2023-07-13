/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const SearchReservations = () => {
  const { t } = useTranslation();
  const [msgErr, setMsgErr] = useState<Map<string, string>>(new Map());

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Grid container sx={{ top: 10, margin: 4 }}>
        <Grid item xs={12}>
          <Typography sx={{ fontSize: 18, fontWeight: "bold" }}>
            Search the reservation by the following criteria:
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ marginTop: 2 }}>
          <Grid container>
            <Grid item xs={2}>
              <Typography sx={{ fontSize: 14, fontWeight: "bold" }}>
                {t("departureDate")}:
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <DatePicker />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </LocalizationProvider>
  );
};

export default SearchReservations;
