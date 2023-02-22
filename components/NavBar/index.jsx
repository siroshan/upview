import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React, { useContext, useEffect, useState } from 'react';
import Logo from '../Logo';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { CartContext } from '../../context/cartContext';

const NavBar = () => {
  const { items } = useContext(CartContext);
  return (
    <Box
      width={1}
      position='sticky'
      top={0}
      zIndex={100}
      px={4}
      py={2}
      borderBottom={1}
    >
      <Stack
        direction='row'
        alignItems='center'
        justifyContent='space-between'
        width='100%'
        mx='auto'
        maxWidth={1100}
      >
        <Logo />
        <Box position='relative'>
          <Button variant='text' startIcon={<ShoppingCartOutlinedIcon />}>
            Cart
          </Button>
          <Box
            position='absolute'
            top={-10}
            left={-10}
            width={25}
            height={25}
            borderRadius='50%'
            bgcolor='#d0312d'
            p={1}
          >
            <Typography textAlign='center' color='#fff'>{items.length}</Typography>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default NavBar;
