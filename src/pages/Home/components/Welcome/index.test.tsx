import { render, screen } from '@testing-library/react';
import Welcome from './index';

describe('Welcome component', () => {
  it('should render welcome message and vite docs link', () => {
    render(<Welcome />);

    // Verifica o título h2
    const headingElement = screen.getByRole('heading', { level: 2 });
    expect(headingElement).toHaveTextContent(
      'You can start editing the page by modifying the file below:'
    );

    // Verifica o parágrafo com o caminho do arquivo
    const pathElement = screen.getByText('src/pages/Home/index.tsx');
    expect(pathElement).toBeInTheDocument();

    // Verifica o botão/link para a documentação do Vite
    const linkElement = screen.getByRole('link', { name: /Vite Docs/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', 'https://vitejs.dev/guide/');
  });
});
