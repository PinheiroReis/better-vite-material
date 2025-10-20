import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '@/providers/ThemeProvider';
import Header from './index';

describe('Header Component', () => {
  it('renders the header with title and action buttons', () => {
    render(
      <ThemeProvider>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </ThemeProvider>
    );

    expect(screen.getByText(/Better Vite/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/open drawer/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/toggle theme/i)).toBeInTheDocument();
  });

  it('opens the sidebar drawer when the menu button is clicked', () => {
    render(
      <ThemeProvider>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </ThemeProvider>
    );

    const menuButton = screen.getByLabelText(/open drawer/i);
    fireEvent.click(menuButton);

    expect(screen.getByRole('link', { name: /dashboard/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /library/i })).toBeInTheDocument();
  });

  it('toggles the theme icon when the theme button is clicked', () => {
    render(
      <ThemeProvider>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </ThemeProvider>
    );

    const themeToggleButton = screen.getByLabelText(/toggle theme/i);

    const initialLightIcon = screen.queryByTestId('Brightness4Icon');
    const initialDarkIcon = screen.queryByTestId('Brightness7Icon');

    if (initialLightIcon) {
      expect(initialLightIcon).toBeInTheDocument();
      fireEvent.click(themeToggleButton);
      expect(initialLightIcon).not.toBeInTheDocument();
      expect(screen.getByTestId('Brightness7Icon')).toBeInTheDocument();
    } else if (initialDarkIcon) {
      expect(initialDarkIcon).toBeInTheDocument();
      fireEvent.click(themeToggleButton);
      expect(initialDarkIcon).not.toBeInTheDocument();
      expect(screen.getByTestId('Brightness4Icon')).toBeInTheDocument();
    } else {
      throw new Error('Neither Brightness4Icon nor Brightness7Icon found initially.');
    }
  });
});
