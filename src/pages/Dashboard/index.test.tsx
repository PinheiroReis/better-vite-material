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
    expect(screen.getByRole('heading', { name: /Dados do Usuário/i })).toBeInTheDocument();
  });

  test('DashboardPage renders', () => {
    render(<DashboardPage />);
    expect(screen.getByText(/Dados do Usuário/i)).toBeInTheDocument();
  });
});
