import { createBrowserRouter } from 'react-router-dom';
import App from '@/App.tsx';
import ThrowError from '@/components/ThrowError.tsx';
import DashboardPage from '@/pages/Dashboard/index.tsx';
import NotFound from '@/pages/Errors/NotFound/index.tsx';
import ServerError from '@/pages/Errors/ServerError/index.tsx';
import PageHome from '@/pages/Home/index.tsx';
import SignIn from '@/pages/Login';
import Showcase from '@/pages/Showcase/index.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ServerError />,
    children: [
      { index: true, element: <PageHome /> },
      { path: 'dashboard', element: <DashboardPage /> },
      { path: 'showcase', element: <Showcase /> },
      { path: 'login', element: <SignIn /> },
      { path: 'error', element: <ThrowError /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);
