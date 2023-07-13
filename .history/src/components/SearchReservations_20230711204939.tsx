/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const SearchReservations = () => {
  const { t } = useTranslation();

  const [departureDate, setDepartureDate] = useState<string | null>("");
  const [lastName, setLasName] = useState<string | null>("");

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
            <Grid item xs={2} sx={{ margin: "auto", textAlign: "center" }}>
              <Typography sx={{ fontSize: 14, fontWeight: "bold" }}>
                {t("departureDate")}:
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <DatePicker
                value={departureDate}
                onChange={(newDate) => setDepartureDate(newDate)}
              />
            </Grid>
            <Grid
              item
              xs={2}
              sx={{ marginTop: 2, margin: "auto", textAlign: "center" }}
            >
              <Typography sx={{ fontSize: 14, fontWeight: "bold" }}>
                {t("lastName")}:
              </Typography>
            </Grid>
            <Grid item xs={10} sx={{ marginTop: 2, paddingLeft: 4 }}>
              <TextField
                id="outlined-controlled"
                value={lastName}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setLasName(event.target.value);
                }}
                sx={{ width: 200 }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ marginTop: 2 }}>
          <Grid container>
            <Grid item xs={2} />
            <Grid item xs={10} sx={{ paddingLeft: 14 }}>
              <Button variant="contained">Contained</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </LocalizationProvider>
  );
};

export default SearchReservations;
