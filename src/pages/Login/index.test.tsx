import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthProvider } from '@/providers/AuthProvider';
import SignIn from './index';

test('SignIn page renders title', () => {
  render(
    <MemoryRouter>
      <AuthProvider>
        <SignIn />
      </AuthProvider>
    </MemoryRouter>
  );
  expect(screen.getByRole('heading', { name: /Sign in/i })).toBeInTheDocument();
});
