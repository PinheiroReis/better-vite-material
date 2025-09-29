import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthProvider } from '@/providers/AuthProvider';
import App from './App';
import AppWrapper from './App';

describe('App component', () => {
  it('should render the App component with layout', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    // Verifica se um elemento do layout, como o título, está presente.
    expect(screen.getByText(/Better Vite/i)).toBeInTheDocument();
  });
});

test('App renders without crashing', () => {
  render(
    <MemoryRouter>
      <AuthProvider>
        <AppWrapper />
      </AuthProvider>
    </MemoryRouter>
  );
  // O main pode não existir, então verifique por Outlet ou Layout
  expect(screen.getByRole('main')).toBeInTheDocument();
});
