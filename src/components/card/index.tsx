import {
  Button,
  Card,
  CardActions,
  CardMedia,
  Typography,
} from '@mui/material';
import React from 'react';
import { styles } from './styles';

interface CardComponentProps {
  url: string;
  text: string;
}

const CardComponent = ({ url, text }: CardComponentProps) => {
  return (
    <Card sx={styles.cardContainer}>
      <CardMedia sx={styles.cardMedia} component="img" image={url} alt="" />
      <Typography sx={styles.text} color="text.primary">
        {text}
      </Typography>

      <CardActions>
        <Button sx={styles.more}>Share ➜</Button>
      </CardActions>
    </Card>
  );
};

export default CardComponent;
