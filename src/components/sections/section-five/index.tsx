/* eslint-disable @next/next/no-img-element */
import { Button } from '@/components';
import { Box, Divider, Typography, useTheme } from '@mui/material';
import React from 'react';

const SectionFive = () => {
  const { palette } = useTheme();
  return (
    <Box
      sx={{
        height: '90vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: '16%',
        paddingRight: '16%',
      }}
      bgcolor="background.default"
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
        }}
      >
        <Box sx={{ display: 'flex', flex: 1 }} bgcolor="secondary.main">
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box sx={{ maxWidth: '420px' }}>
              <Typography
                fontSize={38}
                fontWeight={500}
                mb="40px"
                lineHeight="38px"
                color="text.primary"
              >
                Insights to help you do what you do better, faster and more
                profitably.
              </Typography>
              <Typography fontSize={18} mb="40px" color="text.primary">
                We understand the complexities of modern markets and translate
                them into real business solutions for automotive, financial,
                insuranc.
              </Typography>
              <Button variant="outlined">Learn More</Button>
            </Box>
          </Box>
          <Box sx={{ flex: 1, display: 'flex' }}>
            <img
              src="https://preview.colorlib.com/theme/itlock/assets/img/gallery/about1.jpg"
              alt="section-five"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </Box>
        </Box>
        <Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingTop: '50px',
              paddingBottom: '30px',
            }}
          >
            <img
              src="https://preview.colorlib.com/theme/itlock/assets/img/gallery/brand3.png"
              alt="section-five"
              // style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <img
              src="https://preview.colorlib.com/theme/itlock/assets/img/gallery/brand4.png"
              alt="section-five"
              // style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <img
              src="https://preview.colorlib.com/theme/itlock/assets/img/gallery/brand1.png"
              alt="section-five"
              // style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <img
              src="https://preview.colorlib.com/theme/itlock/assets/img/gallery/brand3.png"
              alt="section-five"
              // style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <img
              src="https://preview.colorlib.com/theme/itlock/assets/img/gallery/brand4.png"
              alt="section-five"
              // style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </Box>
        </Box>
        <Divider sx={{ backgroundColor: palette.text.primary }} />
      </Box>
    </Box>
  );
};

export default SectionFive;
