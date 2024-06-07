import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const ProgressPage = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "red",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: "url('/background.png')",
        backgroundSize: "cover",
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(13, 13, 13, 0.95)",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      />
      <Box sx={{ display: "flex", zIndex: 1 }}>
        <Box>
          <Image src="/logo.png" alt="logo" width={270} height={300} />
        </Box>
        <Box sx={{ paddingLeft: "110px" }}>
          <h1>Página bajo construcción</h1>
          <Typography
            variant="body1"
            fontSize={21}
            lineHeight="21px"
            mt="43px"
            maxWidth="586px"
            color="white"
          >
            Nuestro sitio web está en desarrollo. Estamos trabajando arduamente
            para brindarle la mejor experiencia. Si desea comunicarse con
            nosotros, por favor, envíe un mensaje a nuestro correo electrónico.
          </Typography>
          <Typography
            variant="body1"
            fontSize={23}
            color="secondary.main"
            mt="30px"
          >
            CORREOBACÁN@GMAIL.COM
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ProgressPage;
