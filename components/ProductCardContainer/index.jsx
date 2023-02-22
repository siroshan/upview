import Grid from '@mui/material/Grid';
import ProductCard from '../ProductCard';

const ProductCardContainer = ({products}) => {
  return (
    <Grid
      container
      direction='row'
      justifyContent='flex-start'
      alignItems='center'
      spacing={1}
    >
      {products.map((product, i) => (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} xl={3}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductCardContainer;
