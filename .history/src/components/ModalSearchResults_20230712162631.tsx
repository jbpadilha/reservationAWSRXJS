/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import {
  CircularProgress,
  FilledInput,
  FormControl,
  FormHelperText,
  Grid,
  MenuItem,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { CloseIcon } from "./Icons";
import { RootState } from "../store/store";
import Reservation from "../models/Reservation";
import { roomSizes } from "../config/constants";
import { CommonTypeOptions } from "../interfaces/interfaces";

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

  const [arrivalDate, setArrivalDate] = useState<Dayjs>();
  const [departureDate, setDepartureDate] = useState<Dayjs>();

  useEffect(() => {
    setArrivalDate(dayjs(reservations.stay.arrivalDate));
    setDepartureDate(dayjs(reservations.stay.departureDate));
  }, [reservations]);

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
            width: 600,
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
          {!loading && reservations && (
            <FormControl sx={{ m: 1, width: "100%" }} variant="filled">
              <Grid item xs={12} sx={{ marginTop: 2 }}>
                <Grid container>
                  <Grid item xs={6} sx={{ paddingRight: 2 }}>
                    <DatePicker
                      value={arrivalDate}
                      label={t("dateOfArrival")}
                      disabled
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <DatePicker
                      value={arrivalDate}
                      label={t("dateOfArrival")}
                      disabled
                    />
                  </Grid>
                  <Grid item xs={6} sx={{ marginTop: 2 }}>
                    <TextField
                      select
                      label={t("roomSize")}
                      defaultValue={roomSizes[0].value}
                      helperText=""
                    >
                      {roomSizes.map((option: CommonTypeOptions) => (
                        <MenuItem key={option.value} value={option.value}>
                          {t(option.label)}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={6} sx={{ marginTop: 2 }}>
                    <TextField
                      label={t("roomQuantity")}
                      defaultValue={reservations.room.roomQuantity}
                      helperText={`${t("maximum")}: 5`}
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ marginTop: 2 }}>
                    <TextField
                      label={t("firstName")}
                      FormHelperTextProps={{ style: { textAlign: "end" }}}
                      defaultValue={reservations.firstName}
                      helperText={`${reservations.firstName.length}/25`}
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ marginTop: 2 }}>
                    <TextField
                      label={t("lastName")}
                      FormHelperTextProps={{ style: { textAlign: "end" }}}
                      defaultValue={reservations.lastName}
                      helperText={`${reservations.lastName.length}/50`}
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ marginTop: 2 }}>
                    <TextField
                      label={t("email")}
                      defaultValue={reservations.email}
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ marginTop: 2 }}>
                    <TextField
                      label={t("phoneNumber")}
                      defaultValue={`+${reservations.phone}`}
                      helperText={t("addYourCountryCode")}
                      variant="standard"
                    />
                  </Grid>
                </Grid>
              </Grid>
            </FormControl>
          )}
        </Grid>
      </Modal>
    </LocalizationProvider>
  );
};

export default ModalSearchResults;
