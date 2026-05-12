import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid'; // প্রোডাক্ট সাজানোর জন্য

export default function PaginationControlled() {
  // ১. আপনার সব প্রোডাক্টের একটি লিস্ট (উদাহরণস্বরূপ)

  const [page, setPage] = React.useState(1);
  const itemsPerPage = 2; // প্রতি পেজে কয়টি প্রোডাক্ট দেখাবেন

  // ২. ক্যালকুলেশন: বর্তমান পেজে কোন প্রোডাক্টগুলো দেখাবে
  const indexOfLastItem = page * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = allProducts.slice(indexOfFirstItem, indexOfLastItem);

  // ৩. টোটাল কয়টি পেজ হবে তা বের করা
  const count = Math.ceil(allProducts.length / itemsPerPage);

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Stack spacing={4} sx={{ p: 4 }}>
      <Typography variant="h5">My Products</Typography>

      {/* ৪. প্রোডাক্টগুলো প্রিন্ট করা */}
      <Grid container spacing={2}>
        {currentProducts.map((product) => (
          <Grid item xs={12} sm={6} key={product.id}>
            <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px' }}>
              <Typography variant="h6">{product.name}</Typography>
              <Typography color="primary">${product.price}</Typography>
            </div>
          </Grid>
        ))}
      </Grid>

      {/* ৫. পজিনেশন কন্ট্রোল */}
      <Stack spacing={2} alignItems="center">
        <Typography>Page: {page}</Typography>
        <Pagination 
          count={count} // ডাইনামিক পেজ সংখ্যা
          page={page} 
          onChange={handleChange} 
          color="primary" 
        />
      </Stack>
    </Stack>
  );
}