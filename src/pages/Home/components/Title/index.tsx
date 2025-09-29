import { Box, Typography } from '@mui/material';

export default function Title() {
  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom textAlign="center">
        Better Vite
      </Typography>
    </Box>
  );
}
