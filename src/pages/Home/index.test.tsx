import { render, screen } from '@testing-library/react';
import PageHome from './index';

describe('PageHome component', () => {
  it('should render the home page with Material-UI components', () => {
    render(<PageHome />);

    // Verifica se o título principal renderizado pelo subcomponente Title está na página
    expect(screen.getByRole('heading', { name: /Better Vite/i, level: 1 })).toBeInTheDocument();

    // Verifica se o texto renderizado pelo subcomponente Welcome está na página
    expect(
      screen.getByText(/You can start editing the page by modifying the file below:/i)
    ).toBeInTheDocument();
  });

  test('PageHome renders', () => {
    render(<PageHome />);
    expect(screen.getByText(/home/i)).toBeInTheDocument();
  });
});
