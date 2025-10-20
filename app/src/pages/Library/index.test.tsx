import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '@/contexts/AuthContext';
import Library from './index';

test('Library page renders title', () => {
  render(
    <MemoryRouter>
      <AuthContext.Provider value={{ isAuthenticated: true, login: () => {}, logout: () => {} }}>
        <Library />
      </AuthContext.Provider>
    </MemoryRouter>
  );
  expect(screen.getByRole('heading', { name: /Biblioteca/i })).toBeInTheDocument();
});
