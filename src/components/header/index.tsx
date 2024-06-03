import { Box, ListItem, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { styles } from './styles';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import { menuItems } from '@/utils/constants/header-items';
import Image from 'next/image';
import { Button } from '..';

const Header = () => {
  const [shadow, setShadow] = useState(false);
  const [showFixedHeader, setShowFixedHeader] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    // if (window.scrollY > 100) {
    //   setShowFixedHeader(true);
    // } else {
    //   setShowFixedHeader(false);
    // }
    setShadow(window.scrollY > 0);
    // setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const currentStyles = styles(shadow, showFixedHeader);

  return (
    <>
      <Box sx={styles(false, false).root}>
        <Box display="flex" flexDirection="row">
          <Box>
            <Image src="/logo.png" alt="logo" width={166} height={48} />
          </Box>
          <Box sx={styles(false, false).listItems}>
            {menuItems.map((item, index) => (
              <ListItem key={index} sx={styles(false, false).item}>
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
              <HeadphonesIcon
                sx={{ width: 40, height: 40, color: '#4C526E' }}
              />
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

      <Box
        sx={{
          ...currentStyles.root,
          position: 'fixed',
          transform: showFixedHeader ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        }}
      >
        <Box display="flex" flexDirection="row">
          <Box>
            <Image src="/logo.png" alt="logo" width={166} height={48} />
          </Box>
          <Box sx={currentStyles.listItems}>
            {menuItems.map((item, index) => (
              <ListItem key={index} sx={currentStyles.item}>
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
              <HeadphonesIcon
                sx={{ width: 40, height: 40, color: '#4C526E' }}
              />
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
    </>
  );
};

export default Header;
