/* eslint-disable @next/next/no-img-element */
import Button from '@/components/button';
import { Box, Typography } from '@mui/material';
import React from 'react';

const SectionThree = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',

        alignItems: 'center',
      }}
    >
      <Box sx={{ flex: 1, paddingRight: 6 }}>
        <img
          alt="men-desk"
          src="/men-desk.png"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </Box>
      <Box sx={{ flex: 1, paddingLeft: 6 }}>
        <Box sx={{ width: '60%' }}>
          <Typography variant="body2" sx={{ color: '#316EC2' }}>
            ABOUT US
          </Typography>
          <Typography
            component="h2"
            fontSize={38}
            fontWeight="bold"
            lineHeight="38px"
            mt={2}
            sx={{ color: '#003072' }}
          >
            Build your amazing website with Itlock
          </Typography>
          <Typography
            variant="body1"
            fontSize={18}
            mt={2}
            sx={{ color: '#4C526E' }}
          >
            We understand the complexities of modern markets and translate them
            into real business solutions for automotive, financial, insurance,
            pharma & life sciences,
          </Typography>
          <Typography
            variant="body1"
            fontSize={18}
            mt={2}
            mb={4}
            sx={{ color: '#4C526E' }}
          >
            We understand the complexities of modern markets and translate them
            into real business solutions for automotive, financial, insurance,
            pharma & life sciences,
          </Typography>
          <Button variant="contained">Learn More</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SectionThree;
