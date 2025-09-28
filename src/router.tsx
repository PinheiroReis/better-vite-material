import { createBrowserRouter } from 'react-router-dom';
import App from '@/App.tsx';
import ThrowError from '@/components/ThrowError.tsx';
import NotFound from '@/pages/Errors/NotFound/index.tsx';
import ServerError from '@/pages/Errors/ServerError/index.tsx';
import PageHome from '@/pages/Home/index.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ServerError />,
    children: [
      { index: true, element: <PageHome /> },
      { path: 'error', element: <ThrowError /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);
