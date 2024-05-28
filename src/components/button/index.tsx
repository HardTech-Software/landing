import React from "react";
import { styles } from "./styles";
import { Button, ButtonProps } from "@mui/material";

const ButtonComponent = (props: ButtonProps) => {
  const { variant = "contained" } = props;

  return <Button sx={styles[variant]} {...props} />;
};

export default ButtonComponent;
