import { createBrowserRouter } from 'react-router-dom';
import AppWrapper from '@/App.tsx';
import ThrowError from '@/components/ThrowError.tsx';
import DashboardPage from '@/pages/Dashboard/index.tsx';
import NotFound from '@/pages/Errors/NotFound/index.tsx';
import ServerError from '@/pages/Errors/ServerError/index.tsx';
import Library from '@/pages/Library/index.tsx';
import LoginPage from '@/pages/Login/index.tsx';
import ShowcasePage from '@/pages/Showcase';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppWrapper />,
    errorElement: <ServerError />,
    children: [
      { path: 'dashboard', element: <DashboardPage /> },
      { path: 'showcase', element: <ShowcasePage /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'error', element: <ThrowError /> },
      { path: 'library', element: <Library /> },
      {
        path: 'healthcheck',
        element: <div>OK</div>,
      },
      { path: '*', element: <NotFound /> },
    ],
  },
]);
