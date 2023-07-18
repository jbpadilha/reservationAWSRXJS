import React, { useState } from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useDispatch } from "react-redux";
import { Dayjs } from "dayjs";
import { getReservations } from "../server/genericAPIObservable";
import ResultsTable from "./ResultsTable";

const SearchReservations = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [departureDate, setDepartureDate] = useState<Dayjs | string>("");
  const [lastName, setLasName] = useState<string>("");
  const [isShowResults, setIsShowResults] = useState(false);
  const searchReservationHandle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(getReservations({ departureDate, lastName }));
    if (departureDate !== "" && lastName !== "") {
      setIsShowResults(false);
    } else {
      setIsShowResults(true);
    }
  };

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
              <DateTimePicker
                value={departureDate}
                onChange={(newDate) => setDepartureDate(newDate || "")}
                slotProps={{
                  textField: {
                    InputProps: {
                      name: "departureDateInput",
                    },
                  },
                }}
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
            <Grid item xs={10} sx={{ marginTop: 2 }}>
              <TextField
                id="outlined-controlled"
                value={lastName}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setLasName(event.target.value);
                }}
                sx={{ width: 230 }}
                label={t("enterLastName")}
                name="enterLastName"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ marginTop: 2 }}>
          <Grid container>
            <Grid item xs={2} />
            <Grid item xs={10} sx={{ paddingLeft: 14 }}>
              <Button variant="contained" onClick={searchReservationHandle}>
                {t("btnSearch")}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {isShowResults && <ResultsTable />}
    </LocalizationProvider>
  );
};

export default SearchReservations;
