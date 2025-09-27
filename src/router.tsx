import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import PageAbout from '@/pages/About/index.tsx';
import PageHome from '@/pages/Home/index.tsx';
import NotFound from './pages/Errors/NotFound/index.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <NotFound />,
    children: [
      { index: true, element: <PageHome /> },
      { path: 'about', element: <PageAbout /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);
