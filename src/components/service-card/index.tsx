import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { styles } from "./styles";

interface ServiceCardProps {
  url: string;
  title: string;
  description: string;
}

const ServiceCard = ({ url, title, description }: ServiceCardProps) => {
  return (
    <Card sx={styles.cardContainer}>
      <CardActionArea>
        <CardMedia sx={styles.cardMedia} component="img" image={url} alt="" />
        <CardContent sx={styles.cardContent}>
          <Typography sx={styles.title}>{title}</Typography>
          <Typography sx={styles.description}>{description}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ServiceCard;
