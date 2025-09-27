import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ServerError from './index.tsx';

describe('ServerError component', () => {
  it('should render the 500 page with correct text', () => {
    render(<ServerError />);
    expect(screen.getByText('500')).toBeInTheDocument();
    expect(screen.getByText('Server Error')).toBeInTheDocument();
    expect(screen.getByText('Sorry, we have an error here.')).toBeInTheDocument();
    expect(screen.getByText('Go to Home')).toBeInTheDocument();
  });
});
