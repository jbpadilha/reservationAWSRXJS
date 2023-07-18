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
import { useDispatch } from "react-redux";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { CloseIcon } from "./Icons";
import { roomSizes } from "../config/constants";
import { CommonTypeOptions } from "../interfaces/interfaces";
import { editReservation } from "../server/genericAPIObservable";
import Reservation from "../models/Reservation";

const ModalSearchResults = ({
  isOpen,
  onClose,
  currReservation,
}: {
  isOpen: boolean;
  onClose: any;
  currReservation: Reservation | null;
}) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [newReservation, setNewReservation] = useState<Reservation | null>(
    currReservation,
  );

  const [arrivalDate, setArrivalDate] = useState<Dayjs | string>("");
  const [departureDate, setDepartureDate] = useState<Dayjs | string>("");

  useEffect(() => {
    if (isOpen && currReservation) {
      // setArrivalDate(dayjs(currReservation.stay?.arrivalDate || ""));
      // setDepartureDate(dayjs(currReservation.stay?.departureDate || ""));
      setIsLoading(false);
    }
  }, [currReservation, isOpen]);

  const editReservationHandle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (newReservation) {
      const reservationPayload: Reservation = {
        ...newReservation,
        departureDateFind: currReservation?.stay?.departureDate,
        lastNameFind: currReservation?.lastName,
      };
      dispatch(editReservation({ reservation: reservationPayload }));
    }
  };

  const handleChangeHandle = (type: string) => (e: any) => {
    e.preventDefault();
    const selectedValue = e.target.value;
    switch (type) {
      case "dateOfArrival": {
        setArrivalDate(dayjs(selectedValue));
        break;
      }
      case "dateOfDeparture": {
        setDepartureDate(dayjs(selectedValue));
        break;
      }
      case "roomSize": {
        setNewReservation({
          ...newReservation,
          room: {
            roomSize: selectedValue,
          },
        });
        break;
      }
      case "roomQuantity": {
        setNewReservation({
          ...newReservation,
          room: {
            roomQuantity: selectedValue,
          },
        });
        break;
      }
      case "firstName": {
        setNewReservation({
          ...newReservation,
          firstName: selectedValue,
        });
        break;
      }
      case "lastName": {
        setNewReservation({
          ...newReservation,
          lastName: selectedValue,
        });
        break;
      }
      case "email": {
        setNewReservation({
          ...newReservation,
          email: selectedValue,
        });
        break;
      }
      case "phoneNumber": {
        setNewReservation({
          ...newReservation,
          phone: selectedValue,
        });
        break;
      }
      case "streetName": {
        setNewReservation({
          ...newReservation,
          addressStreet: {
            streetName: selectedValue,
          },
        });
        break;
      }
      case "streetNumber": {
        setNewReservation({
          ...newReservation,
          addressStreet: {
            streetNumber: selectedValue,
          },
        });
        break;
      }
      case "zip": {
        setNewReservation({
          ...newReservation,
          addressLocation: {
            zipCode: selectedValue,
          },
        });
        break;
      }
      case "state": {
        setNewReservation({
          ...newReservation,
          addressLocation: {
            state: selectedValue,
          },
        });
        break;
      }
      case "city": {
        setNewReservation({
          ...newReservation,
          addressLocation: {
            city: selectedValue,
          },
        });
        break;
      }
      case "extras": {
        setNewReservation({
          ...newReservation,
          extras: selectedValue,
        });
        break;
      }
      case "payment": {
        setNewReservation({
          ...newReservation,
          payment: selectedValue,
        });
        break;
      }
      case "personalNote": {
        setNewReservation({
          ...newReservation,
          note: selectedValue,
        });
        break;
      }
      case "tags": {
        break;
      }

      default:
    }
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
          {isLoading && (
            <Grid item xs={12}>
              <CircularProgress data-testid="loading-spinner" />
            </Grid>
          )}
          {!isLoading && currReservation && (
            <FormControl sx={{ m: 1, width: "100%" }} variant="filled">
              <Grid item xs={12} sx={{ marginTop: 2 }}>
                <Grid container>
                  <Grid item xs={6} sx={{ paddingRight: 2 }}>
                    <DatePicker
                      value={arrivalDate}
                      label={t("dateOfArrival")}
                      onChange={handleChangeHandle("dateOfArrival")}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <DatePicker
                      value={departureDate || undefined}
                      label={t("dateOfDeparture")}
                      onChange={handleChangeHandle("dateOfDeparture")}
                    />
                  </Grid>
                  <Grid item xs={6} sx={{ marginTop: 2 }}>
                    <TextField
                      select
                      label={t("roomSize")}
                      value={roomSizes[0].value}
                      helperText=""
                      onChange={handleChangeHandle("roomSize")}
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
                      value={currReservation.room?.roomQuantity}
                      helperText={`${t("maximum")}: 5`}
                      variant="standard"
                      onChange={handleChangeHandle("roomQuantity")}
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ marginTop: 2 }}>
                    <TextField
                      label={t("firstName")}
                      FormHelperTextProps={{ style: { textAlign: "end" } }}
                      value={currReservation.firstName}
                      helperText={`${currReservation.firstName?.length}/25`}
                      variant="standard"
                      onChange={handleChangeHandle("firstName")}
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ marginTop: 2 }}>
                    <TextField
                      label={t("lastName")}
                      FormHelperTextProps={{ style: { textAlign: "end" } }}
                      value={currReservation.lastName}
                      helperText={`${currReservation.lastName?.length}/50`}
                      variant="standard"
                      onChange={handleChangeHandle("lastName")}
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ marginTop: 2 }}>
                    <TextField
                      label={t("email")}
                      value={currReservation.email}
                      variant="standard"
                      onChange={handleChangeHandle("email")}
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ marginTop: 2 }}>
                    <TextField
                      label={t("phoneNumber")}
                      value={`+${currReservation.phone}`}
                      helperText={t("addYourCountryCode")}
                      variant="standard"
                      onChange={handleChangeHandle("phoneNumber")}
                    />
                  </Grid>
                  <Grid item xs={6} sx={{ marginTop: 2 }}>
                    <TextField
                      label={t("streetName")}
                      value={currReservation.addressStreet?.streetName}
                      variant="standard"
                      onChange={handleChangeHandle("streetName")}
                    />
                  </Grid>
                  <Grid item xs={6} sx={{ marginTop: 2 }}>
                    <TextField
                      label={t("streetNumber")}
                      value={currReservation.addressStreet?.streetNumber}
                      variant="standard"
                      onChange={handleChangeHandle("streetNumber")}
                    />
                  </Grid>
                  <Grid item xs={4} sx={{ marginTop: 2 }}>
                    <TextField
                      label={t("zip")}
                      value={currReservation.addressLocation?.zipCode}
                      variant="standard"
                      onChange={handleChangeHandle("zip")}
                    />
                  </Grid>
                  <Grid item xs={4} sx={{ marginTop: 2 }}>
                    <TextField
                      label={t("state")}
                      value={`+${currReservation.addressLocation?.state}`}
                      variant="standard"
                      helperText={t("autocomplete")}
                      onChange={handleChangeHandle("state")}
                    />
                  </Grid>
                  <Grid item xs={4} sx={{ marginTop: 2 }}>
                    <TextField
                      label={t("city")}
                      value={currReservation.addressLocation?.city}
                      variant="standard"
                      onChange={handleChangeHandle("city")}
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ marginTop: 2 }}>
                    <TextField
                      label={t("extras")}
                      value={currReservation.extras?.join(",")}
                      variant="standard"
                      onChange={handleChangeHandle("extras")}
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ marginTop: 2 }}>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                      value={currReservation.payment}
                      onChange={handleChangeHandle("payment")}
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
                      value={currReservation.note}
                      variant="standard"
                      onChange={handleChangeHandle("personalNote")}
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ marginTop: 2 }}>
                    <FormLabel
                      component="legend"
                      sx={{ paddingBottom: 2, fontSize: 12 }}
                    >
                      {t("tags")}
                    </FormLabel>
                    {currReservation.tags &&
                      currReservation.tags.map((tag: string) => (
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
                        control={<Switch checked={currReservation.reminder} />}
                        label={t("sendReminder")}
                      />
                      <FormControlLabel
                        control={
                          <Switch checked={currReservation.newsletter} />
                        }
                        label={t("subscribeNewsletter")}
                      />
                    </FormGroup>
                  </Grid>
                  <Grid item xs={12} sx={{ marginTop: 2 }}>
                    <FormControlLabel
                      control={<Checkbox checked={currReservation.confirm} />}
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
