import { createTheme } from '@mui/material/styles';
import type { ThemeOptions } from '@mui/material/styles';
import type { CSSObject } from '@mui/system';

const commonSettings: ThemeOptions = {
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none' as const,
          transition: 'all 0.3s ease',
          boxShadow: '0 1px 2px rgba(0,0,0,0.3)',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          },
        } as CSSObject,
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          border: '1px solid rgba(0,0,0,0.08)',
          transition: 'all 0.3s ease',
          '&:hover': {
            borderColor: 'rgba(0,0,0,0.12)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(0,0,0,0.4)',
          },
          transition: 'all 0.3s ease',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: '1px solid rgba(0,0,0,0.08)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
  },
};

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#b1e0e2' },
    secondary: { main: '#e2b3b1' },
    info: { main: '#b1e2cb' },
    warning: { main: '#b1c8e2' },
    success: { main: '#a8e6a2' },
    error: { main: '#f5a8a8' },
    background: { default: '#f4f6f8', paper: '#ffffff' },
  },
  ...commonSettings,
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#b1e0e2' },
    secondary: { main: '#e2b3b1' },
    info: { main: '#b1e2cb' },
    warning: { main: '#b1c8e2' },
    success: { main: '#a8e6a2' },
    error: { main: '#f5a8a8' },
    background: { default: '#121212', paper: '#1e1e1e' },
  },
  ...commonSettings,
});
