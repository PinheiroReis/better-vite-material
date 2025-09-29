import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

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
