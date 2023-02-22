import Box from '@mui/material/Box';
import axios from '../utils/axios';
import ProductCardContainer from '../components/ProductCardContainer';
import Typography from '@mui/material/Typography';

const Index = ({ products }) => {
  return (
    <Box width={1} maxWidth={1100} mx='auto' mt={6}>
      <Typography variant='h4'>Best Sellers</Typography>
      <Box mt={4}>
        <ProductCardContainer products={products} />
      </Box>
    </Box>
  );
};

export async function getServerSideProps() {
  try {
    const { data } = await axios.get('pr-re-ec-products/db');
    return {
      props: { products: data.ecommerce.products },
    };
  } catch (err) {
    return { notFound: true };
  }
}
export default Index;
