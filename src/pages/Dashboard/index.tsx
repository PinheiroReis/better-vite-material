import { Box, Card, CardContent, Typography } from '@mui/material';

export default function DashboardPage() {
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Dashboard
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', mx: -1.5 }}>
        <Box sx={{ width: { xs: '100%', sm: '50%', md: '33.33%' }, p: 1.5 }}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Card 1
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Exemplo de conteúdo
              </Typography>
              <Typography variant="body2">
                Este é um card de exemplo usando componentes do Material-UI.
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box sx={{ width: { xs: '100%', sm: '50%', md: '33.33%' }, p: 1.5 }}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Card 2
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Outro exemplo
              </Typography>
              <Typography variant="body2">
                A responsividade agora é gerenciada por Flexbox no `sx` prop.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}
