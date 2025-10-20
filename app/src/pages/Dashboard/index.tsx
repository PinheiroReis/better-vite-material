import Box from '@mui/material/Box';
import MuiCard from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

const User = {
  name: 'João Victor',
  email: 'joaovictor@email.com',
  createdAt: '2024-05-01',
  status: 'Ativo',
};

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  maxWidth: '450px',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  boxShadow:
    'hsla(220, 30%, 5%, 0.10) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.10) 0px 15px 35px -5px',
  borderRadius: 16,
}));

const DashboardContainer = styled(Stack)(({ theme }) => ({
  position: 'absolute',
  inset: 0,
  minHeight: '100dvh',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 0,
  background: 'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
  padding: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4),
  },
}));

export default function DashboardPage() {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return (
    <DashboardContainer>
      <Card variant="outlined">
        <Typography component="h1" variant="h5" sx={{ mb: 2, fontWeight: 700 }}>
          Dados do Usuário
        </Typography>
        <Box sx={{ width: '100%' }}>
          <Typography variant="body1">
            <strong>Nome:</strong> {User.name}
          </Typography>
          <Typography variant="body1">
            <strong>Email:</strong> {User.email}
          </Typography>
          <Typography variant="body1">
            <strong>Cadastrado em:</strong> {User.createdAt}
          </Typography>
          <Typography variant="body1" color={User.status === 'Ativo' ? 'success.main' : 'error'}>
            <strong>Status:</strong> {User.status}
          </Typography>
        </Box>
      </Card>
    </DashboardContainer>
  );
}
