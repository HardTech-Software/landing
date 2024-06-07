/* eslint-disable @next/next/no-img-element */
import Button from '@/components/button';
import { Box, Typography } from '@mui/material';
import React from 'react';

const FooterBanner = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '40px',
        paddingBottom: '40px',
        marginTop: '-5px',
      }}
      bgcolor="primary.main"
    >
      <Box sx={{ display: 'flex', width: '80%' }}>
        <Box>
          <img
            alt="user-banner"
            src="/user.png"
            // style={{ objectFit: 'cover', width: '100%', height: '80%' }}
          />
        </Box>
        <Box sx={{ marginLeft: '30px' }}>
          <Typography
            variant="h1"
            sx={{ fontSize: '28px', marginBottom: '10px' }}
            fontWeight="bold"
            color="text.primary"
          >
            Satisfaction Guaranteed
          </Typography>
          <Typography variant="subtitle1" color="text.primary">
            We understand the complexities of modern markets and translate them
            into real business
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ color: 'white', marginTop: '-10px' }}
          >
            solutions for automotive, financial, insurance, pharma & life
            sciences,
          </Typography>
        </Box>
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        >
          <Button variant="outlined">Learn More</Button>
        </Box>
      </Box>
    </Box>
  );
};

const SectionOne = () => {
  return (
    <Box>
      <Box sx={{ width: '100%', position: 'relative' }}>
        <img
          alt="banner"
          src="/banner.png"
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        />
        <Box
          sx={{
            position: 'absolute',
            left: '16%',
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
            <Typography
              sx={{ color: 'white', fontSize: 20, marginTop: '20px' }}
            >
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
      <FooterBanner />
    </Box>
  );
};

export default SectionOne;
