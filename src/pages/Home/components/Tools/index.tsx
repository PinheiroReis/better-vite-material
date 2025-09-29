import { Box, Stack, Typography } from '@mui/material';
import reactLogo from '@/assets/react.svg';
import viteLogo from '@/assets/vite.svg';

export default function IconsTools() {
  return (
    <Box sx={{ my: 4 }}>
      <Stack direction="row" spacing={4} justifyContent="center" alignItems="center">
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} alt="Vite Logo" height={80} width={80} />
        </a>
        <Typography variant="h2" component="span">
          +
        </Typography>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} alt="React Logo" height={80} width={80} />
        </a>
      </Stack>
    </Box>
  );
}
