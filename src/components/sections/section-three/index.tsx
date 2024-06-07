/* eslint-disable @next/next/no-img-element */
import Button from '@/components/button';
import { Box, Typography } from '@mui/material';
import React from 'react';

const SectionThree = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        height: '95vh',
        alignItems: 'center',
      }}
      bgcolor="background.default"
    >
      <Box sx={{ flex: 1, paddingRight: 6, position: 'relative' }}>
        <img
          alt="men-desk"
          src="/men-desk.png"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: '99%',
            width: '100vw',
            height: '50vh',
            overflow: 'hidden',
            zIndex: 1,
          }}
          bgcolor="background.paper"
        ></Box>
      </Box>
      <Box sx={{ flex: 1, paddingLeft: 6 }}>
        <Box sx={{ width: '60%' }}>
          <Typography
            variant="body2"
            sx={{ letterSpacing: '2px' }}
            color="text.primary"
          >
            ABOUT US
          </Typography>
          <Typography
            component="h2"
            fontSize={38}
            fontWeight="bold"
            lineHeight="38px"
            mt={2}
            color="text.primary"
          >
            Build your amazing website with Itlock
          </Typography>
          <Typography variant="body1" fontSize={18} mt={2} color="text.primary">
            We understand the complexities of modern markets and translate them
            into real business solutions for automotive, financial, insurance,
            pharma & life sciences,
          </Typography>
          <Typography
            variant="body1"
            fontSize={18}
            mt={2}
            mb={4}
            color="text.primary"
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
