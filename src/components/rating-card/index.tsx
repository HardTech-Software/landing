import { Box, Rating, Stack, Typography } from "@mui/material";
import React from "react";
import { styles } from "./styles";

interface RatingCardProps {
  comment: string;
  author: string;
}

const RatingCard = ({ comment, author }: RatingCardProps) => {
  return (
    <Box sx={styles.container}>
      <Stack spacing={1}>
        <Rating
          sx={{ color: "#316EC2" }}
          name="half-rating"
          defaultValue={5}
          precision={1}
          readOnly
        />
      </Stack>
      <Typography sx={styles.comment}>{comment}</Typography>
      <Typography sx={styles.author}>{author}</Typography>
    </Box>
  );
};

export default RatingCard;