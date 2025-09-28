import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Welcome from './index.tsx';

describe('Welcome component', () => {
  it('should render the Welcome component', () => {
    render(<Welcome />);
    expect(
      screen.getByText('Welcome to Better Vite, the better way to use vite.')
    ).toBeInTheDocument();
  });
});
