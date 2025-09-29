import { Container } from '@mui/material';
import Title from './components/Title/index.tsx';
import IconsTools from './components/Tools/index.tsx';
import Welcome from './components/Welcome/index.tsx';

export default function PageHome() {
  return (
    <Container maxWidth="md">
      <Title />
      <Welcome />
      <IconsTools />
    </Container>
  );
}
