import MuiCard from '@mui/material/Card';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const books = [
  {
    id: 1,
    title: 'O Senhor dos Anéis',
    author: 'J.R.R. Tolkien',
    year: 1954,
    description: 'Uma aventura épica na Terra Média.',
    loaner: 'Maria',
  },
  {
    id: 2,
    title: 'Dom Casmurro',
    author: 'Machado de Assis',
    year: 1899,
    description: 'Um clássico da literatura brasileira.',
    loaner: null,
  },
  {
    id: 3,
    title: '1984',
    author: 'George Orwell',
    year: 1949,
    description: 'Uma distopia sobre vigilância e totalitarismo.',
    loaner: 'João',
  },
  {
    id: 4,
    title: 'A Revolução dos Bichos',
    author: 'George Orwell',
    year: 1945,
    description: 'Uma fábula política sobre o poder e a corrupção.',
    loaner: null,
  },
  {
    id: 5,
    title: 'Capitães da Areia',
    author: 'Jorge Amado',
    year: 1937,
    description: 'A história de meninos de rua em Salvador.',
    loaner: null,
  },
  {
    id: 6,
    title: 'O Pequeno Príncipe',
    author: 'Antoine de Saint-Exupéry',
    year: 1943,
    description: 'Uma obra poética sobre amizade e humanidade.',
    loaner: 'Ana',
  },
  {
    id: 7,
    title: 'Grande Sertão: Veredas',
    author: 'João Guimarães Rosa',
    year: 1956,
    description: 'Um épico do sertão brasileiro.',
    loaner: null,
  },
];

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  padding: theme.spacing(3),
  gap: theme.spacing(1),
  marginBottom: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    maxWidth: '500px',
    margin: 'auto',
  },
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
}));

const LibraryContainer = styled(Stack)(({ theme }) => ({
  minHeight: '100dvh',
  width: '100%',
  display: 'flex',
  gap: '10px',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4),
  },
}));

export default function Library() {
  return (
    <>
      <CssBaseline enableColorScheme />
      <LibraryContainer>
        <Typography component="h1" variant="h4" sx={{ mb: 3 }}>
          Biblioteca
        </Typography>
        {books.map((book) => (
          <Card key={book.id} variant="outlined">
            <Typography variant="h6">{book.title}</Typography>
            <Typography variant="body2" color="text.secondary">
              Autor: {book.author} | Ano: {book.year}
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              {book.description}
            </Typography>
            <Typography
              variant="body2"
              sx={{ mt: 1 }}
              color={book.loaner ? 'error' : 'success.main'}
            >
              {book.loaner ? `Emprestado para: ${book.loaner}` : 'Disponível'}
            </Typography>
          </Card>
        ))}
      </LibraryContainer>
    </>
  );
}
