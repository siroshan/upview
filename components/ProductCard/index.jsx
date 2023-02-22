import Image from 'next/image';
import React from 'react';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { Button, Rating, Stack } from '@mui/material';

const ProductCard = ({ product }) => {
  return (
    <Link
      href={`products/${product.id}`}
      className='product-card-wrap'
      vocab='https://schema.org/'
      typeof='Product'
    >
      <div className='img-wrap'>
        <Image
          fill
          src={product.image}
          priority
          alt='product image'
          property='image'
        />
      </div>
      <div className='title-wrap'>
        <Typography
          property='name'
          textTransform='capitalize'
          color='common.black'
          fontWeight={600}
          fontSize={14}
        >
          {product.name}
        </Typography>
        <div>
          <span className='price' property='priceCurrency'>
            $
          </span>
          <span className='price' property='price'>
            {product.price}
          </span>
        </div>
      </div>
      <Typography
        maxWidth={200}
        textTransform='capitalize'
        color='text.secondary'
        paragraph
        noWrap
        display='block'
        fontSize={14}
      >
        {product.description}
      </Typography>
      <Stack
        direction='row'
        justifyContent='flex-start'
        alignItems='center'
        mb={1}
      >
        <Rating name='read-only' value={product.rating} readOnly />(
        {product.ratedBy})
      </Stack>
      <Button variant='outlined' color='primary'>
        Add to Cart
      </Button>
    </Link>
  );
};

export default ProductCard;
