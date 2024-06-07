import { Button } from '@/components';
import { Box, Typography } from '@mui/material';
import React from 'react';

const SectionEight = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        paddingTop: '100px',
        paddingBottom: '100px',
        alignItems: 'center',
      }}
      bgcolor="background.paper"
    >
      <Typography
        variant="h1"
        component="h2"
        fontSize={38}
        fontWeight="bold"
        lineHeight="38px"
        sx={{ marginBottom: '20px' }}
        color="primary"
      >
        {"Let's work together."}
      </Typography>
      <Typography
        maxWidth="620px"
        textAlign="center"
        sx={{ marginBottom: '30px', fontSize: '18px' }}
        color="text.primary"
      >
        We understand the complexities of modern markets and translate them into
        real business solutions for automotive, financial, insuranc.
      </Typography>
      <Button variant="contained">Start Discussion</Button>
    </Box>
  );
};

export default SectionEight;
