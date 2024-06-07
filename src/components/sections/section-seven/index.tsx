import RatingCard from '@/components/rating-card';
import { ratingCard } from '@/utils/constants/rating-card';
import { Box, Typography } from '@mui/material';
import React from 'react';

const SectionSeven = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        height: '70vh',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: '16%',
        paddingLeft: '16%',
      }}
      bgcolor="background.default"
    >
      <Typography
        variant="body2"
        sx={{ marginBottom: '30px', letterSpacing: '2px' }}
        color="text.primary"
      >
        TESTIMONIAL
      </Typography>
      <Typography
        variant="h1"
        component="h2"
        fontSize={38}
        maxWidth="550px"
        fontWeight="bold"
        sx={{ marginBottom: '50PX' }}
        color="text.primary"
      >
        Love from our client
      </Typography>
      <Box
        sx={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}
      >
        {ratingCard.map((card, index) => (
          <RatingCard key={index} {...card} />
        ))}
      </Box>
    </Box>
  );
};

export default SectionSeven;
