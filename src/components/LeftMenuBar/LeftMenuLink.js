import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Link from "next/link";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useRouter } from "next/navigation";
import styles from "./LeftMenuDrawer.module.css";

const LinkElement = styled(Link)(({ theme }) => ({
  color: "#4c4c4c",
  "&:hover": {
    color: "#4c4c4c",
  },
}));

const LeftMenuLink = ({ icon, name, url }) => {
  const router = useRouter();

  const [ismatch, setIsMatch] = useState(false);

  useEffect(() => {
    if (router?.pathname?.includes(url)) {
      setIsMatch(true);
    }
  }, [router]);

  return (
    <>
      <LinkElement href={url}>
        <ListItem
          disablePadding
          className={`${ismatch ? styles.listItemActive : ""}`}
        >
          <ListItemButton>
            <ListItemIcon sx={{ color: "#198754" }}>{icon}</ListItemIcon>
            <ListItemText primary={name} />
          </ListItemButton>
        </ListItem>
      </LinkElement>
    </>
  );
};

export default LeftMenuLink;
