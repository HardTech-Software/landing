import { Box, Link, Typography } from "@mui/material";
import React from "react";
import { styles } from "./styles";

const ColumnLinks = () => {
  return (
    <Box sx={styles.links}>
      <Box
        sx={{
          minWidth: 200,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography sx={styles.title}>Quick Links</Typography>

        <Link sx={styles.item}>My Account</Link>
        <Link sx={styles.item}>My Account</Link>
        <Link sx={styles.item}>My Account</Link>
      </Box>

      <Box
        sx={{
          minWidth: 200,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography sx={styles.title}>Quick Links</Typography>

        <Link sx={styles.item}>My Account</Link>
        <Link sx={styles.item}>My Account</Link>
        <Link sx={styles.item}>My Account</Link>
      </Box>

      <Box
        sx={{
          minWidth: 200,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography sx={styles.title}>Quick Links</Typography>

        <Link sx={styles.item}>My Account</Link>
        <Link sx={styles.item}>My Account</Link>
      </Box>
    </Box>
  );
};

export default ColumnLinks;
