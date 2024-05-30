import { Box, ListItem, Typography } from '@mui/material';
import React from 'react';
import { styles } from './styles';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import { menuItems } from '@/utils/constants/header-items';
import Image from 'next/image';
import { Button } from '..';

const Header = () => {
  return (
    <Box sx={styles.root}>
      <Box display="flex" flexDirection="row">
        <Box>
          <Image src="/logo.png" alt="logo" width={166} height={48} />
        </Box>
        <Box sx={styles.listItems}>
          {menuItems.map((item, index) => (
            <ListItem key={index} sx={styles.item}>
              <Typography>{item}</Typography>
            </ListItem>
          ))}
        </Box>
      </Box>
      <Box sx={{ display: 'flex' }}>
        <Box
          sx={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}
        >
          <Button
            variant="outlined"
            sx={{
              color: '#316EC2',
              border: '2px solid #316EC2',
              height: 50,
              '&:hover': {
                color: 'white',
                backgroundColor: '#316EC2',
                border: '2px solid #316EC2',
              },
            }}
          >
            Free Quote
          </Button>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box>
            <HeadphonesIcon sx={{ width: 40, height: 40, color: '#4C526E' }} />
          </Box>
          <Box>
            <Typography fontSize="14px" sx={{ color: '#9B9EAC' }}>
              Have any Question?
            </Typography>
            <Typography
              fontSize="16px"
              sx={{ color: '#003072', fontWeight: 500 }}
            >
              Call: 10 (78) 837 3647
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
