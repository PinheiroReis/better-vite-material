import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '@/providers/ThemeProvider';
import Layout from './index';

describe('Layout Component', () => {
  it('renders the main layout elements', async () => {
    render(
      <ThemeProvider>
        <MemoryRouter>
          <Layout>
            <div>Child Content</div>
          </Layout>
        </MemoryRouter>
      </ThemeProvider>
    );

    expect(screen.getByText(/Better Vite/i)).toBeInTheDocument();
    expect(screen.getByText(/Child Content/i)).toBeInTheDocument();

    const drawerButton = screen.getByRole('button', { name: /open drawer/i });
    expect(drawerButton).toBeInTheDocument();
  });
});
