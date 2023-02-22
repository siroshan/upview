import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import Button from '@mui/material/Button';
import ImageCarousel from '../../../components/ImageCarousel';
import axios from '../../../utils/axios';
import { useContext, useState } from 'react';
import { CartContext } from '../../../context/cartContext';

const Index = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [qty, setQty] = useState(1);

  const { addToCart } = useContext(CartContext);
  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };
  return (
    <Box width={1} maxWidth={1100} mx='auto'>
      <Grid container direction='row'>
        <Grid item xs={12} md={6} padding={2}>
          <ImageCarousel images={product.images} />
        </Grid>
        <Grid item xs={12} md={6} padding={2}>
          <Typography variant='h4'>{product.name}</Typography>
          <Typography variant='body1'>{product.description}</Typography>
          <Stack
            direction='row'
            justifyContent='flex-start'
            alignItems='center'
            mb={1}
          >
            <Rating name='read-only' value={product.rating} readOnly />(
            {product.ratedBy})
          </Stack>
          <Divider />
          <Box my={2}>
            <Typography fontSize={24}>
              ${(Math.round(product.price * 100) / 100).toFixed(2)} or $
              {(Math.round(product.installment.amount * 100) / 100).toFixed(2)}/
              {product.installment.period}
            </Typography>
            <Typography>{product.installment.description}</Typography>
          </Box>
          <Divider />
          <Box my={2}>
            <Typography>Choose Color</Typography>
            <Stack
              direction='row'
              justifyContent='flex-start'
              alignItems='center'
            >
              {product.colors.map((color, i) => (
                <Radio
                  sx={{
                    color: `#${color}`,
                    '&.Mui-checked': {
                      color: `#${color}`,
                    },
                  }}
                  key={color}
                  checked={selectedColor === color}
                  onChange={handleColorChange}
                  value={color}
                  name='color-radio'
                  inputProps={{ 'aria-label': color }}
                />
              ))}
            </Stack>
          </Box>
          <Stack
            direction='row'
            alignItems='center'
            justifyContent='flex-start'
            spacing={2}
          >
            <Button variant='contained'>Buy Now</Button>
            <Button variant='outlined' onClick={() => addToCart(product, qty)}>
              Add to Cart
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export async function getServerSideProps() {
  try {
    const { data } = await axios.get('pr-re-ec-product/db');
    return {
      props: { product: data.ecommerce.product },
    };
  } catch (err) {
    console.log('error', err);
    return { notFound: true };
  }
}
export default Index;
