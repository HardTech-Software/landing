import ServiceCard from '@/components/service-card';
import { cardsTwo } from '@/utils/constants/services-cards';
import { Box, Typography } from '@mui/material';
import React from 'react';

const SectionSix = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        height: '70vh',
        flexDirection: 'column',
        alignItems: 'center',
        paddingRight: '16%',
        paddingLeft: '16%',
      }}
    >
      <Typography
        variant="body2"
        sx={{ color: '#316EC2', marginBottom: '30px', letterSpacing: '2px' }}
      >
        OUR CASE STUDY
      </Typography>
      <Typography
        variant="h1"
        component="h2"
        fontSize={38}
        maxWidth="550px"
        fontWeight="bold"
        sx={{ color: '#003072', marginBottom: '50PX' }}
      >
        We work with global brands
      </Typography>
      <Box
        sx={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}
      >
        {cardsTwo.map((card, index) => (
          <ServiceCard
            key={index}
            url={card.url}
            title={card.title}
            description={card.description}
          />
        ))}
      </Box>
    </Box>
  );
};

export default SectionSix;
