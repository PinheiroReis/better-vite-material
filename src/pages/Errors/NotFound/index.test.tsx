import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import NotFound from './index';

describe('NotFound component', () => {
  it('should render the 404 page with correct text', () => {
    render(<NotFound />);
    expect(screen.getByText('404')).toBeInTheDocument();
    expect(screen.getByText('Page Not Found')).toBeInTheDocument();
    expect(
      screen.getByText('Sorry, the page you are looking for does not exist.')
    ).toBeInTheDocument();
    expect(screen.getByText('Go to Home')).toBeInTheDocument();
  });

  it('renders NotFound page', () => {
    render(<NotFound />);
    expect(screen.getByText(/not found/i)).toBeInTheDocument();
  });
});
