import { useState } from 'react';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import SideBarDrawer from '@/components/SideBarDrawer/index.tsx';
import { useTheme } from '@/contexts/ThemeContext.tsx';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { mode, toggleTheme } = useTheme();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Better Vite
          </Typography>
          <IconButton
            sx={{ ml: 1 }}
            onClick={toggleTheme}
            color="inherit"
            aria-label="toggle theme"
          >
            {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>
      <SideBarDrawer open={mobileOpen} onClose={handleDrawerToggle} />
    </div>
  );
}
