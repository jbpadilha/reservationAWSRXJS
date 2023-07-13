import React from "react";
import { Grid } from "@mui/material";
import { useTranslation } from "react-i18next";

const Menu = () => {
  const { t } = useTranslation();
  return (
    <Grid container sx={{ margin: 2 }}>
      <Grid item xs={12}>
        {t("selectMenu")}
      </Grid>
    </Grid>
  );
};

export default Menu;
