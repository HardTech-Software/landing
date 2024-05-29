import {
  Box,
  Button,
  IconButton,
  SxProps,
  TextField,
  Typography,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { Facebook, YouTube, LinkedIn, Instagram } from "@mui/icons-material";
import React from "react";
import ColumnLinks from "../column-links";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import { styles } from "./styles";
const Footer = () => {
  return (
    <>
      <Box sx={styles.containerTop}>
        <Box sx={styles.sectionLeft}>
          <Typography sx={styles.textTop}>Subscribe Newsletter</Typography>
          <Typography sx={styles.textBottom}>
            We understand the complexities of modern markets and translate them
            into real business solutions for automotive, financial, insuranc.
          </Typography>

          <Box sx={{ display: "flex" }}>
            <TextField
              sx={styles.input}
              id="outlined-basic"
              label="Enter your email"
              variant="outlined"
              fullWidth
              InputProps={{ sx: { borderRadius: 0 } }}
              InputLabelProps={{ sx: { fontWeight: 500 } }}
            />

            <Button sx={styles.button}>
              <ArrowForwardIcon />
            </Button>
          </Box>
        </Box>

        <Box sx={styles.sectionCenter}>
          <ColumnLinks />
        </Box>

        <Box sx={styles.sectionRight}>
          <Typography sx={styles.title}>Subscribe newsletter</Typography>
          <Box sx={styles.iconContainer}>
            <IconButton
              sx={
                {
                  ...styles.iconButton,
                  ...styles.iconButtonFacebook,
                } as SxProps
              }
            >
              <Facebook />
            </IconButton>
            <IconButton
              sx={
                { ...styles.iconButton, ...styles.iconButtonYoutube } as SxProps
              }
            >
              <YouTube />
            </IconButton>

            <IconButton
              sx={
                {
                  ...styles.iconButton,
                  ...styles.iconButtonLinkedin,
                } as SxProps
              }
            >
              <LinkedIn />
            </IconButton>

            <IconButton
              sx={
                {
                  ...styles.iconButton,
                  ...styles.iconButtonInstagram,
                } as SxProps
              }
            >
              <Instagram />
            </IconButton>
          </Box>
        </Box>
      </Box>

      <Box>
        <h1>copy</h1>
      </Box>
    </>
  );
};

export default Footer;
