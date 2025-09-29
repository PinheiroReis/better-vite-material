import type { ReactNode } from 'react';
import { Dashboard, LibraryBooks, Login } from '@mui/icons-material';

export interface NavLinkProps {
  text: string;
  path: string;
  icon: ReactNode;
}

const navLink: NavLinkProps[] = [
  {
    text: 'Login',
    path: '/login',
    icon: <Login />,
  },
  {
    text: 'Dashboard',
    path: '/dashboard',
    icon: <Dashboard />,
  },
  {
    text: 'Library',
    path: '/library',
    icon: <LibraryBooks />,
  },
];

export default navLink;
