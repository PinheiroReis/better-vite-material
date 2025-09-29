import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@/providers/ThemeProvider';
import DashboardPage from './index';

describe('DashboardPage', () => {
  it('renders dashboard title and cards', () => {
    render(
      <ThemeProvider>
        <DashboardPage />
      </ThemeProvider>
    );

    // Verifica o título da página
    expect(screen.getByRole('heading', { name: /Dashboard/i })).toBeInTheDocument();

    // Verifica se os cards de exemplo são renderizados
    expect(screen.getByText(/Card 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Card 2/i)).toBeInTheDocument();
  });

  test('DashboardPage renders', () => {
    render(<DashboardPage />);
    expect(screen.getByText(/dashboard/i)).toBeInTheDocument();
  });
});
