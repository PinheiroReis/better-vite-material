import type { ReactNode } from 'react';
import { Dashboard, Flare, Home } from '@mui/icons-material';

export interface NavLinkProps {
  text: string;
  path: string;
  icon: ReactNode;
}

const navLink: NavLinkProps[] = [
  {
    text: 'Home',
    path: '/',
    icon: <Home />,
  },
  {
    text: 'Dashboard',
    path: '/dashboard',
    icon: <Dashboard />,
  },
  {
    text: 'Showcase',
    path: '/showcase',
    icon: <Flare />,
  },
];

export default navLink;
