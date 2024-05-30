import React from 'react';
import { styles } from './styles';
import { Button, ButtonProps, SxProps } from '@mui/material';

const ButtonComponent = (props: ButtonProps) => {
  const { variant = 'contained', sx } = props;

  return <Button {...props} sx={{ ...styles[variant], ...sx } as SxProps} />;
};

export default ButtonComponent;
