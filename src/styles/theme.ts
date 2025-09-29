import { createTheme, darken } from '@mui/material/styles';
import type { CSSObject, Theme, ThemeOptions } from '@mui/material/styles';

const pastelColors = {
  yellow: '#fff59d',
  red: '#ef9a9a',
  blue: '#80d8ff',
  green: '#a5d6a7',
  orange: '#ffd180',
  purple: '#b39ddb',
  pink: '#f48fb1',
  cyan: '#008B8B',
};

const pastelDark: Record<keyof typeof pastelColors, string> = Object.fromEntries(
  Object.entries(pastelColors).map(([key, value]) => [key, darken(value, 0.2)])
) as Record<keyof typeof pastelColors, string>;

const commonSettings: ThemeOptions = {
  typography: { fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif' },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none' as const,
          transition: 'all 0.3s ease',
          boxShadow: '0 1px 2px rgba(0,0,0,0.3)',
          '&:hover': { boxShadow: '0 4px 12px rgba(0,0,0,0.15)' },
        } as CSSObject,
        containedPrimary: ({ theme }: { theme: Theme }) => ({
          '&:hover': { backgroundColor: theme.palette.primary.dark },
        }),
        containedSecondary: ({ theme }: { theme: Theme }) => ({
          '&:hover': { backgroundColor: theme.palette.secondary.dark },
        }),
        containedSuccess: ({ theme }: { theme: Theme }) => ({
          '&:hover': { backgroundColor: theme.palette.success.dark },
        }),
        containedError: ({ theme }: { theme: Theme }) => ({
          '&:hover': { backgroundColor: theme.palette.error.dark },
        }),
        textPrimary: ({ theme }: { theme: Theme }) => ({
          '&:hover': { color: theme.palette.primary.dark },
        }),
        textSecondary: ({ theme }: { theme: Theme }) => ({
          '&:hover': { color: theme.palette.secondary.dark },
        }),
        outlinedPrimary: ({ theme }: { theme: Theme }) => ({
          '&:hover': { color: theme.palette.primary.dark, borderColor: theme.palette.primary.dark },
        }),
        outlinedSecondary: ({ theme }: { theme: Theme }) => ({
          '&:hover': {
            color: theme.palette.secondary.dark,
            borderColor: theme.palette.secondary.dark,
          },
        }),
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
    MuiPaper: { styleOverrides: { root: { borderRadius: 8 } } },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }: { theme: Theme }) => ({
          borderRadius: 6,
          transition: 'all 0.3s ease',
          '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: theme.palette.primary.dark },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.dark,
          },
        }),
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }: { theme: Theme }) => ({
          '&.Mui-focused': { color: theme.palette.primary.dark },
        }),
      },
    },
    MuiTab: {
      styleOverrides: {
        root: ({ theme }: { theme: Theme }) => ({
          '&.Mui-selected': { color: theme.palette.primary.dark },
          '&:hover': { color: theme.palette.primary.dark },
        }),
      },
    },
    MuiBadge: {
      styleOverrides: {
        colorPrimary: ({ theme }: { theme: Theme }) => ({
          '& .MuiBadge-badge': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.dark,
          },
        }),
        colorSecondary: ({ theme }: { theme: Theme }) => ({
          '& .MuiBadge-badge': {
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.secondary.dark,
          },
        }),
      },
    },
    MuiSwitch: {
      styleOverrides: {
        switchBase: ({ theme }: { theme: Theme }) => ({
          '&.Mui-checked': { color: theme.palette.primary.main },
          '&.Mui-checked + .MuiSwitch-track': { backgroundColor: theme.palette.primary.main },
        }),
        track: { transition: 'all 0.3s ease' },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: ({ theme }: { theme: Theme }) => ({
          '&.Mui-checked': { color: theme.palette.primary.main },
        }),
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: ({ theme }: { theme: Theme }) => ({
          '&.Mui-checked': { color: theme.palette.primary.main },
        }),
      },
    },
    MuiSlider: {
      styleOverrides: {
        thumb: ({ theme }: { theme: Theme }) => ({
          '&:hover, &.Mui-focusVisible': { boxShadow: `0 0 0 8px ${theme.palette.primary.main}33` },
        }),
        track: ({ theme }: { theme: Theme }) => ({ backgroundColor: theme.palette.primary.main }),
        rail: { opacity: 0.3 },
      },
    },
    MuiTableCell: { styleOverrides: { root: { borderBottom: '1px solid rgba(0,0,0,0.08)' } } },
    MuiAppBar: { styleOverrides: { root: { borderRadius: 0 } } },
  },
};

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: pastelColors.cyan, dark: pastelDark.cyan },
    secondary: { main: pastelColors.blue, dark: pastelDark.blue },
    info: { main: pastelColors.yellow, dark: pastelDark.yellow },
    warning: { main: pastelColors.orange, dark: pastelDark.orange },
    success: { main: pastelColors.green, dark: pastelDark.green },
    error: { main: pastelColors.red, dark: pastelDark.red },
    background: { default: '#f4f6f8', paper: '#ffffff' },
  },
  ...commonSettings,
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: pastelColors.cyan, dark: pastelDark.cyan },
    secondary: { main: pastelColors.blue, dark: pastelDark.blue },
    info: { main: pastelColors.yellow, dark: pastelDark.yellow },
    warning: { main: pastelColors.orange, dark: pastelDark.orange },
    success: { main: pastelColors.green, dark: pastelDark.green },
    error: { main: pastelColors.red, dark: pastelDark.red },
    background: { default: '#121212', paper: '#1e1e1e' },
  },
  ...commonSettings,
});
