import { createBrowserRouter } from 'react-router-dom';
import App from '@/App.tsx';
import ThrowError from '@/components/ThrowError.tsx';
import DashboardPage from '@/pages/Dashboard/index.tsx';
import NotFound from '@/pages/Errors/NotFound/index.tsx';
import ServerError from '@/pages/Errors/ServerError/index.tsx';
import Library from '@/pages/Library/index.tsx';
import SignIn from '@/pages/Login';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ServerError />,
    children: [
      { path: 'dashboard', element: <DashboardPage /> },
      { path: 'login', element: <SignIn /> },
      { path: 'error', element: <ThrowError /> },
      { path: 'library', element: <Library /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);
