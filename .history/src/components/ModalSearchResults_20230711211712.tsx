import { Grid, Modal, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { CloseIcon } from "./Icons";

const ModalSearchResults = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: any;
}) => {
  const { t } = useTranslation();

  return (
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
      </Grid>
    </Modal>
  );
};

export default ModalSearchResults;
