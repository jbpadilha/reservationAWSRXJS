import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { Button, CircularProgress, Grid } from "@mui/material";
import dayjs from "dayjs";
import Reservation from "../models/Reservation";
import { RootState } from "../store/store";
import ModalSearchResults from "./ModalSearchResults";

const currentValues = createSelector(
  (state: RootState) => state.generic.reservations,
  (state: RootState) => state.generic.loading,
  (reservations, loading) => ({
    reservations,
    loading,
  }),
);

const ResultsTable = () => {
  const { t } = useTranslation();
  const {
    reservations,
    loading,
  }: { reservations: Reservation[]; loading: boolean } =
    useSelector(currentValues);

  const [isOpen, setIsOpen] = useState(false);
  const [currReservation, setCurrReservation] = useState<Reservation[] | null>(
    null,
  );

  const searchReservationHandle =
    (departureDate: string, lastName: string) =>
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      const resFilter = reservations.filter(
        (r) =>
          r.stay?.departureDate === departureDate && r.lastName === lastName,
      );
      setCurrReservation(resFilter);
      setIsOpen(true);
    };

  return (
    <Grid container>
      <Grid item xs={12} sx={{ fontSize: 18, fontWeight: "bold" }}>
        {t("listOfReservations")}
      </Grid>
      <Grid container sx={{ marginTop: 2 }}>
        <Grid item xs={5} sx={{ fontSize: 14, fontWeight: "bold" }}>
          {t("departureDate")}
        </Grid>
        <Grid item xs={5} sx={{ fontSize: 14, fontWeight: "bold" }}>
          {t("lastName")}
        </Grid>
        <Grid item xs={2} sx={{ fontSize: 14, fontWeight: "bold" }}>
          {t("actions")}
        </Grid>
        {loading && (
          <Grid xs={12} sx={{ marginTop: 2 }}>
            <CircularProgress />
          </Grid>
        )}
        {reservations &&
          reservations.length > 0 &&
          reservations.map((res: Reservation) => (
            <Grid key={res.stay?.departureDate} container sx={{ marginTop: 2 }}>
              <Grid item xs={5}>
                {dayjs(res.stay?.departureDate).format("dd-MM-YYYY hh:mm")}
              </Grid>
              <Grid item xs={5}>
                {res.lastName}
              </Grid>
              <Grid item xs={2}>
                <Button
                  variant="contained"
                  onClick={searchReservationHandle(
                    res.stay?.departureDate,
                    res.lastName,
                  )}
                >
                  {t("Edit")}
                </Button>
              </Grid>
            </Grid>
          ))}
      </Grid>
      <ModalSearchResults
        isOpen={isOpen}
        onClose={() => setIsOpen(!isOpen)}
        currReservation={currReservation}
      />
    </Grid>
  );
};

export default ResultsTable;
