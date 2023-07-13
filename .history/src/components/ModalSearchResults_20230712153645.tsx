import React from "react";
import { CircularProgress, Grid, Modal, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { CloseIcon } from "./Icons";
import { RootState } from "../store/store";
import Reservation from "../models/Reservation";

const currentValues = createSelector(
  (state: RootState) => state.generic.reservations,
  (state: RootState) => state.generic.loading,
  (reservations, loading) => ({
    reservations,
    loading,
  }),
);

const ModalSearchResults = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: any;
}) => {
  const { t } = useTranslation();
  const {
    reservations,
    loading,
  }: { reservations: Reservation; loading: boolean } =
    useSelector(currentValues);

  // eslint-disable-next-line no-console
  console.log("reservations", reservations);
  // eslint-disable-next-line no-console
  console.log("days:", dayjs(reservations.stay.arrivalDate));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Modal
        open={isOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Grid
          container
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            padding: "30px 50px",
            gap: "10px",
            width: 560,
            height: "auto",
            background: "white",
            border: "1px solid #DBDBDB",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.05)",
            borderRadius: "20px",
          }}
        >
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={11}>
                <Typography
                  id="modal-modal-title"
                  sx={{ fontSize: 24, lineHeight: "29px" }}
                >
                  {t("resultsSearch")}
                </Typography>
              </Grid>
              <Grid item xs={1} textAlign="right" sx={{ cursor: "pointer" }}>
                <CloseIcon onClick={onClose} />
              </Grid>
            </Grid>
          </Grid>
          {loading && (
            <Grid item xs={12}>
              <CircularProgress />
            </Grid>
          )}
          {/* !loading && reservations && (
            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={4}>
                  <DatePicker
                    value={dayjs(reservations.stay?.arrivalDate).toISOString()}
                    defaultValue={dayjs(
                      reservations.stay?.arrivalDate,
                    ).toISOString()}
                    label={t("dateOfArrival")}
                  />
                </Grid>
                <Grid item xs={8}>
                  <DatePicker
                    value={reservations.stay?.departureDate}
                    defaultValue={reservations.stay?.departureDate}
                    label={t("dateOfArrival")}
                  />
                </Grid>
              </Grid>
            </Grid>
                    ) */}
        </Grid>
      </Modal>
    </LocalizationProvider>
  );
};

export default ModalSearchResults;
