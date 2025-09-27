import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import GreenButton from '@/components/Buttons/Green/index.tsx';

describe('GreenButton component', () => {
  it('should render the GreenButton component', () => {
    render(<GreenButton onClick={() => {}}>{'Test Button'}</GreenButton>);
    expect(screen.getByText('Test Button')).toBeInTheDocument();
  });
});
