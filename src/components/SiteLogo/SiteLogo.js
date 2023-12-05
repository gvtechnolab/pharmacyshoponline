import React from "react";
import Box from "@mui/material/Box";
import { assetsPrefix } from "../../utills/constants";

const SiteLogo = ({ name, light = false, inlineBlocked }) => {
  return (
    <Box
      sx={{
        color: light === false ? "#198754" : "white",
        // display: 'flex',
        // justifyContent: 'center',
        fontWeight: "bold",
        textAlign: "center",
        margin: "8px 0",
        cursor: "default",
        fontSize: "18px",
        display: inlineBlocked ? "inline-block" : "block",
      }}
    >
      <Box
        component="img"
        sx={{
          height: 35,
          width: 35,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
        }}
        alt="PharmacyShop"
        src={
          light === false
            ? `${assetsPrefix}/assets/images/pharmacyshoplogo96.png`
            : `${assetsPrefix}/assets/images/pharmacyshoplogo96white.png`
        }
      />
      <span>{name}</span>
    </Box>
  );
};

export default SiteLogo;
