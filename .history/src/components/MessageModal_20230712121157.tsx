/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import {
  AlertProps,
  AlertColor,
  IconButton,
  Slide,
  SlideProps,
  Snackbar,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Close } from "@mui/icons-material";
import MuiAlert from "@mui/material/Alert";
import { useTranslation } from "react-i18next";
import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { closeMessageModal } from "../store/genericActions";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>((props, ref) => (
  <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
));

const SlideTransition = (props: SlideProps) => (
  <Slide {...props} direction="right" />
);

const genericValues = createSelector(
  (state: RootState) => state.generic.openMessageModal,
  (state: RootState) => state.generic.typeMessage,
  (state: RootState) => state.generic.messageModal,
  (openMessageModal, typeMessage, messageModal) => ({
    openMessageModal,
    typeMessage,
    messageModal,
  })
);

const MessageModal = () => {
  const { t } = useTranslation();
  const openMessageModal = useSelector(genericValues);
  const typeMessage = "";
  const messageModal = "";
  const dispatch = useDispatch();

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(closeMessageModal());
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={openMessageModal}
        autoHideDuration={4000}
        onClose={handleClose}
        TransitionComponent={SlideTransition}
        action={
          <IconButton
            aria-label={t("Close")}
            color="inherit"
            sx={{ p: 0.5 }}
            onClick={handleClose}
          >
            <Close />
          </IconButton>
        }
      >
        <Alert
          onClose={handleClose}
          severity={typeMessage as AlertColor}
          sx={{ width: "100%" }}
        >
          {t(messageModal || "")}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default MessageModal;
