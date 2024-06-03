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
    >
      <Box sx={styles.containerTop}>
        <Typography sx={styles.textTop}> INDUSTRY WE OFFER</Typography>
        <Typography sx={styles.textCenter}>
          Managed IT services customized for your industry
        </Typography>
        <Typography sx={styles.textBottom}>
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
