import { Box, Button, Typography } from '@mui/material';

export default function Welcome() {
  return (
    <Box sx={{ textAlign: 'center', my: 4 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        You can start editing the page by modifying the file below:
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
        src/pages/Home/index.tsx
      </Typography>
      <Button
        variant="contained"
        href="https://vitejs.dev/guide/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Vite Docs
      </Button>
    </Box>
  );
}
