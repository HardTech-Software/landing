import ServiceCard from '@/components/service-card';
import { cardsOne } from '@/utils/constants/services-cards';
import { Box, Typography } from '@mui/material';
import React from 'react';

const SectionFour = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: '16%',
        paddingRight: '16%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Box>
          <Typography
            variant="body2"
            sx={{ color: '#316EC2', letterSpacing: '2px' }}
          >
            SERVICES
          </Typography>
          <Typography
            variant="h1"
            component="h2"
            fontSize={38}
            maxWidth="550px"
            fontWeight="bold"
            sx={{ color: '#003072' }}
          >
            We design apps & websites that lead in their space
          </Typography>
        </Box>
        <Box sx={{ maxWidth: '480px' }}>
          <Typography
            variant="subtitle1"
            fontSize={18}
            lineHeight="18px"
            sx={{ color: '#4C526E' }}
          >
            We understand the complexities of modern markets and translate them
            into real business solutions for automotive, financial, insurance,
            pharma & life sciences,
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '60px',
        }}
      >
        {cardsOne.map((card, index) => (
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

export default SectionFour;
