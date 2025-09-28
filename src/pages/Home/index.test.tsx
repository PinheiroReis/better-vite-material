import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import PageHome from './index.tsx';

describe('PageHome component', () => {
  it('should render the home page', () => {
    render(<PageHome />);
    expect(screen.getByText('The Better Vite Template')).toBeInTheDocument();
    expect(
      screen.getByText('Welcome to Better Vite, the best way to use vite.')
    ).toBeInTheDocument();
    expect(screen.getByTestId('vite_img')).toBeInTheDocument();
    expect(screen.getByTestId('react_img')).toBeInTheDocument();
  });
});
