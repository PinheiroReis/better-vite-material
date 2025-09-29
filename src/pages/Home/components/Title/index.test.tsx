import { render, screen } from '@testing-library/react';
import Title from './index';

describe('Title component', () => {
  it('should render the title with the correct heading level', () => {
    render(<Title />);
    const titleElement = screen.getByRole('heading', { level: 1 });
    expect(titleElement).toHaveTextContent('Better Vite');
  });
});
