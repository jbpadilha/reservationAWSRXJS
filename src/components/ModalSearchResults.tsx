import { useEffect, useState } from "react";
import {
  Button,
  Checkbox,
  Chip,
  CircularProgress,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  MenuItem,
  Modal,
  Radio,
  RadioGroup,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { createSelector } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { CloseIcon } from "./Icons";
import { RootState } from "../store/store";
import { roomSizes } from "../config/constants";
import { CommonTypeOptions } from "../interfaces/interfaces";
import { editReservation } from "../server/genericAPIObservable";

const currentValues = createSelector(
  (state: RootState) => state.generic.loading,
  (loading) => ({
    loading,
  }),
);

const ModalSearchResults = ({
  isOpen,
  onClose,
  currReservation,
}: {
  isOpen: boolean;
  onClose: any;
  currReservation: any;
}) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { loading }: { loading: boolean } = useSelector(currentValues);

  const [arrivalDate, setArrivalDate] = useState<Dayjs>();
  const [departureDate, setDepartureDate] = useState<Dayjs>();

  useEffect(() => {
    if (isOpen && currReservation) {
      setArrivalDate(dayjs(currReservation.stay?.arrivalDate));
      setDepartureDate(dayjs(currReservation.stay?.departureDate));
    }
  }, [currReservation, isOpen]);

  const editReservationHandle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(editReservation(currReservation));
  };

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
            maxHeight: 500,
            background: "white",
            border: "1px solid #DBDBDB",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.05)",
            borderRadius: "20px",
            overflow: "scroll",
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
              <CircularProgress data-testid="loading-spinner" />
            </Grid>
          )}
          {!loading && currReservation && currReservation.length > 0 && (
            <FormControl sx={{ m: 1, width: "100%" }} variant="filled">
              <Grid item xs={12} sx={{ marginTop: 2 }}>
                <Grid container>
                  <Grid item xs={6} sx={{ paddingRight: 2 }}>
                    <DatePicker
                      defaultValue={arrivalDate || undefined}
                      label={t("dateOfArrival")}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <DatePicker
                      defaultValue={departureDate || undefined}
                      label={t("dateOfDeparture")}
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
                      defaultValue={currReservation[0].room?.roomQuantity}
                      helperText={`${t("maximum")}: 5`}
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ marginTop: 2 }}>
                    <TextField
                      label={t("firstName")}
                      FormHelperTextProps={{ style: { textAlign: "end" } }}
                      defaultValue={currReservation[0].firstName}
                      helperText={`${currReservation[0].firstName?.length}/25`}
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ marginTop: 2 }}>
                    <TextField
                      label={t("lastName")}
                      FormHelperTextProps={{ style: { textAlign: "end" } }}
                      defaultValue={currReservation[0].lastName}
                      helperText={`${currReservation[0].lastName?.length}/50`}
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ marginTop: 2 }}>
                    <TextField
                      label={t("email")}
                      defaultValue={currReservation[0].email}
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ marginTop: 2 }}>
                    <TextField
                      label={t("phoneNumber")}
                      defaultValue={`+${currReservation[0].phone}`}
                      helperText={t("addYourCountryCode")}
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={6} sx={{ marginTop: 2 }}>
                    <TextField
                      label={t("streetName")}
                      defaultValue={
                        currReservation[0].addressStreet?.streetName
                      }
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={6} sx={{ marginTop: 2 }}>
                    <TextField
                      label={t("streetNumber")}
                      defaultValue={
                        currReservation[0].addressStreet?.streetNumber
                      }
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={4} sx={{ marginTop: 2 }}>
                    <TextField
                      label={t("zip")}
                      defaultValue={currReservation[0].addressLocation?.zipCode}
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={4} sx={{ marginTop: 2 }}>
                    <TextField
                      label={t("state")}
                      defaultValue={`+${currReservation[0].addressLocation?.state}`}
                      variant="standard"
                      helperText={t("autocomplete")}
                    />
                  </Grid>
                  <Grid item xs={4} sx={{ marginTop: 2 }}>
                    <TextField
                      label={t("city")}
                      defaultValue={currReservation[0].addressLocation?.city}
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ marginTop: 2 }}>
                    <TextField
                      label={t("extras")}
                      defaultValue={currReservation[0].extras?.join(",")}
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ marginTop: 2 }}>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                      value={currReservation[0].payment}
                    >
                      <FormControlLabel
                        value="cc"
                        control={<Radio />}
                        label={t("creditCard")}
                      />
                      <FormControlLabel
                        value="paypal"
                        control={<Radio />}
                        label={t("payPal")}
                      />
                      <FormControlLabel
                        value="cash"
                        control={<Radio />}
                        label={t("Cash")}
                      />
                      <FormControlLabel
                        value="bitcoin"
                        control={<Radio />}
                        label={t("Bitcoin")}
                      />
                    </RadioGroup>
                  </Grid>
                  <Grid item xs={12} sx={{ marginTop: 2 }}>
                    <TextField
                      label={t("personalNote")}
                      defaultValue={currReservation[0].note}
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ marginTop: 2 }}>
                    <FormLabel
                      component="legend"
                      sx={{ paddingBottom: 2, fontSize: 12 }}
                    >
                      {t("tags")}
                    </FormLabel>
                    {currReservation[0].tags &&
                      currReservation[0].tags.map((tag: string) => (
                        <Chip
                          key={tag}
                          label={t(tag)}
                          onDelete={() => {}}
                          sx={{ marginRight: 2 }}
                        />
                      ))}
                  </Grid>
                  <Grid item xs={12} sx={{ marginTop: 2 }}>
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Switch checked={currReservation[0].reminder} />
                        }
                        label={t("sendReminder")}
                      />
                      <FormControlLabel
                        control={
                          <Switch checked={currReservation[0].newsletter} />
                        }
                        label={t("subscribeNewsletter")}
                      />
                    </FormGroup>
                  </Grid>
                  <Grid item xs={12} sx={{ marginTop: 2 }}>
                    <FormControlLabel
                      control={
                        <Checkbox checked={currReservation[0].confirm} />
                      }
                      label={t("iConfirmInfo")}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sx={{ marginTop: 2 }}>
                <Grid container>
                 <Grid item xs={6}>
                    <Button variant="contained" onClick={onClose}>
                      {t("cancel")}
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button variant="contained" onClick={editReservationHandle}>
                      {t("edit")}
                    </Button>
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
