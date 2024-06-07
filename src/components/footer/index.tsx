import {
  Box,
  Button,
  Divider,
  IconButton,
  SxProps,
  TextField,
  Typography,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Facebook, YouTube, LinkedIn, Instagram } from '@mui/icons-material';
import React from 'react';
import ColumnLinks from '../column-links';
import { styles } from './styles';
import { columns } from '@/utils/constants/column-links';

const Footer = () => {
  return (
    <Box
      sx={{
        paddingLeft: '5%',
        paddingRight: '5%',
        paddingTop: '100px',
      }}
      bgcolor="background.default"
    >
      <Box sx={styles.containerTop}>
        <Box sx={styles.sectionLeft}>
          <Typography sx={{ ...styles.textTop }} color="primary">
            Subscribe Newsletter
          </Typography>
          <Typography sx={styles.textBottom} color="text.primary">
            We understand the complexities of modern markets and translate them
            into real business solutions for automotive, financial, insuranc.
          </Typography>

          <Box sx={{ display: 'flex' }}>
            <TextField
              sx={styles.input}
              id="outlined-basic"
              label="Enter your email"
              variant="outlined"
              fullWidth
              InputProps={{ sx: { borderRadius: 0 } }}
              InputLabelProps={{ sx: { fontWeight: 500 } }}
            />

            <Button sx={styles.button} variant="contained">
              <ArrowForwardIcon />
            </Button>
          </Box>
        </Box>

        <Box sx={styles.sectionCenter}>
          {columns.map((column, index) => (
            <ColumnLinks key={index} {...column} />
          ))}
        </Box>

        <Box sx={styles.sectionRight}>
          <Typography sx={styles.title} color="primary">
            Subscribe newsletter
          </Typography>
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

      <Divider variant="middle" />

      <Box sx={styles.copyContainer}>
        <Typography sx={styles.copy} color="secondary.main">
          Copyright ©2024 All rights reserved | HardTech
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
