/* eslint-disable @next/next/no-img-element */
import Button from '@/components/button';
import { Box, Typography } from '@mui/material';
import React from 'react';

const SectionOne = () => {
  return (
    <Box sx={{ width: '100%', position: 'relative' }}>
      <img
        alt="banner"
        src="/banner.png"
        style={{ objectFit: 'cover', width: '100%', height: '80%' }}
      />
      <Box
        sx={{
          position: 'absolute',
          left: '50px',
          top: 0,
          bottom: 0,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box>
          <Typography
            variant="h1"
            fontWeight="bold"
            sx={{ color: 'white', fontSize: 72 }}
          >
            Best IT Solution
          </Typography>
          <Typography
            variant="h1"
            fontWeight="bold"
            sx={{ color: 'white', fontSize: 72 }}
          >
            in your city
          </Typography>
          <Typography sx={{ color: 'white', fontSize: 20, marginTop: '20px' }}>
            Prevent data loss with encrypted storage and virtualized
          </Typography>
          <Typography
            sx={{ color: 'white', fontSize: 20, marginBottom: '20px' }}
          >
            recovery, then enjoy increased productivity.
          </Typography>
          <Button variant="outlined">Find Out More</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SectionOne;
