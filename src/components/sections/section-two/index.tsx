import { Box, Typography } from '@mui/material';
import React from 'react';
import { styles } from './styles';
import { Card } from '@/components';
import { cards } from '@/utils/constants/card';

const SectionTwo = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '70vh',
      }}
      bgcolor="background.default"
    >
      <Box sx={styles.containerTop}>
        <Typography sx={styles.textTop} color="text.primary">
          {' '}
          INDUSTRY WE OFFER
        </Typography>
        <Typography sx={styles.textCenter} color="text.primary">
          Managed IT services customized for your industry
        </Typography>
        <Typography sx={styles.textBottom} color="text.primary">
          We understand the complexities of modern markets and translate them
          into real business solutions for automotive, financial, insurance,
          pharma & life sciences.
        </Typography>
      </Box>

      <Box sx={styles.containerBottom}>
        {cards.map((card, index) => (
          <Card key={index} url={card.url} text={card.text} />
        ))}
      </Box>
    </Box>
  );
};

export default SectionTwo;
