import { type ReactNode } from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import navLinks from '@/config/side-bar-links.json';

const drawerWidth = 240;

const iconMap: { [key: string]: ReactNode } = {
  Home: <HomeIcon />,
  Dashboard: <DashboardIcon />,
};

interface SideBarDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function SideBarDrawer({ open, onClose }: SideBarDrawerProps) {
  const location = useLocation();

  const drawerContent = (
    <div>
      <Toolbar />
      <List>
        {navLinks.map((link) => (
          <ListItem key={link.text} disablePadding>
            <ListItemButton
              component={Link}
              to={link.path}
              selected={location.pathname === link.path}
              onClick={onClose}
            >
              <ListItemIcon>{iconMap[link.icon]}</ListItemIcon>
              <ListItemText primary={link.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Drawer
      variant="temporary"
      open={open}
      onClose={onClose}
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
      }}
    >
      {drawerContent}
    </Drawer>
  );
}
