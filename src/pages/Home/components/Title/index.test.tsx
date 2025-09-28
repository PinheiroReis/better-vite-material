import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Title from './index.tsx';

describe('Title component', () => {
  it('should render the Title component', () => {
    render(<Title />);
    expect(screen.getByText('The Better Vite Template')).toBeInTheDocument();
  });
});
