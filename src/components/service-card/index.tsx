import React from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  useTheme,
} from '@mui/material';
import { styles } from './styles';

interface ServiceCardProps {
  url: string;
  title: string;
  description: string;
}

const ServiceCard = ({ url, title, description }: ServiceCardProps) => {
  const { palette } = useTheme();
  return (
    <Card
      sx={{
        ...styles.cardContainer,
        backgroundColor: palette.primary.main,
      }}
    >
      <CardActionArea>
        <CardMedia sx={styles.cardMedia} component="img" image={url} alt="" />
        <CardContent sx={styles.cardContent}>
          <Typography sx={styles.title} color="text.primary">
            {title}
          </Typography>
          <Typography sx={styles.description} color="text.primary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ServiceCard;
