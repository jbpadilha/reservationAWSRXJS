import React from "react";
import { Button, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { SEARCH_ROUTE } from "../config/constants";

const Menu = () => {
const history = useNavigate();
  const { t } = useTranslation();

  const changeRoute = () => {
    history(SEARCH_ROUTE);
  };

  return (
    <Grid container sx={{ margin: 2 }}>
      <Grid item xs={12}>
        {t("selectMenu")}:
      </Grid>
      <Grid item xs={12} sx={{ marginTop: 5 }}>
        <Button variant="outlined" size="medium" onClick={changeRoute}>
          {t("btnSearchRoute")}
        </Button>
      </Grid>
    </Grid>
  );
};

export default Menu;
