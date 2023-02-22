import Box from '@mui/material/Box';
import React, { FC } from 'react';
import Link from 'next/link';
import Typography from '@mui/material/Typography';

const Logo = () => {
  return (
    <Box px={4} py={1} border={1} textAlign='center'>
      <Link href='/' className='nav-link'>
        <Typography fontSize={20} textTransform='uppercase'>Logo</Typography>
      </Link>
    </Box>
  );
};

export default Logo;
