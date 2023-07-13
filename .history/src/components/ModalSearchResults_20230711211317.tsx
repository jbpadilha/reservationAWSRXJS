import { Grid, Modal, Typography } from "@mui/material";
import { Container } from "@mui/system";
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
      <Container>
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
      </Container>
    </Modal>
  );
};

export default ModalSearchResults;
