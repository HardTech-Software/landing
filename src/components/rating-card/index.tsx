import { Box, Rating, Stack, Typography } from '@mui/material';
import React from 'react';
import { styles } from './styles';

interface RatingCardProps {
  comment: string;
  author: string;
  title: string;
}

const RatingCard = ({ comment, author, title }: RatingCardProps) => {
  return (
    <Box sx={styles.container} bgcolor="primary.main">
      <Stack spacing={1}>
        <Rating name="half-rating" defaultValue={5} precision={1} readOnly />
      </Stack>
      <Typography variant="body1" sx={styles.title} color="text.primary">
        {title}
      </Typography>
      <Typography sx={styles.comment} color="text.primary">
        {comment}
      </Typography>
      <Typography sx={styles.author} color="text.primary">
        {author}
      </Typography>
    </Box>
  );
};

export default RatingCard;
