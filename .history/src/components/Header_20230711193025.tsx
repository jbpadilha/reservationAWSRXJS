import React from "react";
import { AppBar, CardMedia, Toolbar, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import AdbIcon from "@mui/icons-material/Adb";

const Header = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            RESERVATIONS
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
