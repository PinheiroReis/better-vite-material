import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import IconsTools from './index.tsx';

describe('IconsTools component', () => {
  it('should render React and Vite icons.', () => {
    render(<IconsTools />);

    const viteImg = screen.getByTestId('vite_img');
    const reactImg = screen.getByTestId('react_img');

    expect(viteImg).toBeInTheDocument();
    expect(reactImg).toBeInTheDocument();

    expect(viteImg).toHaveAttribute('alt', 'vite_icon');
    expect(reactImg).toHaveAttribute('alt', 'react_icon');
  });
});
