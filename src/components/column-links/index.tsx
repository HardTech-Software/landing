import { Box, Link, Typography } from '@mui/material';
import React from 'react';
import { styles } from './styles';

interface ColumnLinksProps {
  title: string;
  items: Array<Item>;
}

interface Item {
  label: string;
  url: string;
}

const ColumnLinks = ({ title, items }: ColumnLinksProps) => {
  return (
    <Box>
      <Box sx={styles.links}>
        <Typography sx={styles.title} color="primary">
          {title}
        </Typography>

        {items.map((item, index) => (
          <Link key={index} sx={styles.item} color="text.primary">
            {item.label}
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default ColumnLinks;
