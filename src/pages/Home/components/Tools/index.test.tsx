import { render, screen } from '@testing-library/react';
import IconsTools from './index';

describe('IconsTools component', () => {
  it('should render logos with links', () => {
    render(<IconsTools />);

    // Verifica se os links estão presentes
    const viteLink = screen.getByRole('link', { name: /vite/i });
    const reactLink = screen.getByRole('link', { name: /react/i });

    expect(viteLink).toBeInTheDocument();
    expect(viteLink).toHaveAttribute('href', 'https://vitejs.dev');

    expect(reactLink).toBeInTheDocument();
    expect(reactLink).toHaveAttribute('href', 'https://react.dev');

    // Verifica o sinal de "+"
    const plusSign = screen.getByText('+');
    expect(plusSign).toBeInTheDocument();
  });
});
