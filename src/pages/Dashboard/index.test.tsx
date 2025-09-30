import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '@/contexts/AuthContext';
import DashboardPage from './index';

describe('DashboardPage', () => {
  it('should render the Dashboard page when authenticated', () => {
    render(
      <MemoryRouter>
        <AuthContext.Provider value={{ isAuthenticated: true, login: vi.fn(), logout: vi.fn() }}>
          <DashboardPage />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getByText(/Dados do Usuário/i)).toBeInTheDocument();
  });

  it('should redirect to login when not authenticated', () => {
    render(
      <MemoryRouter>
        <AuthContext.Provider value={{ isAuthenticated: false, login: vi.fn(), logout: vi.fn() }}>
          <DashboardPage />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(screen.queryByText(/Dados do Usuário/i)).not.toBeInTheDocument();
  });
});
