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
        backgroundColor: '#EBF0F8',
      }}
    >
      <Typography
        variant="body2"
        sx={{ color: '#316EC2', marginBottom: '30px', letterSpacing: '2px' }}
      >
        TESTIMONIAL
      </Typography>
      <Typography
        variant="h1"
        component="h2"
        fontSize={38}
        maxWidth="550px"
        fontWeight="bold"
        sx={{ color: '#003072', marginBottom: '50PX' }}
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
