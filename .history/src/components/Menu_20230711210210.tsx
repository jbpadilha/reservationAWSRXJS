import React from "react";
import { Button, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";

const Menu = () => {
  const { t } = useTranslation();
  return (
    <Grid container sx={{ margin: 2 }}>
      <Grid item xs={12}>
        {t("selectMenu")}:
      </Grid>
      <Grid item xs={12} sx={{ marginTop: 5 }}>
        <Button variant="outlined" size="medium">
          {t("btnSearchRoute")}
        </Button>
      </Grid>
    </Grid>
  );
};

export default Menu;
