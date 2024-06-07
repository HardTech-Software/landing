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
      bgcolor="background.default"
    >
      <Typography
        variant="body2"
        sx={{ marginBottom: '30px', letterSpacing: '2px' }}
        color="text.primary"
      >
        OUR CASE STUDY
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
