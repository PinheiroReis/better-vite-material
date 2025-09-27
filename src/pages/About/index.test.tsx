import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import PageAbout from '@/pages/About/index.tsx';

describe('PageAbout component', () => {
  it('should render the about page', () => {
    render(<PageAbout />);
    expect(screen.getByText('The Page "About"')).toBeInTheDocument();
  });
});
