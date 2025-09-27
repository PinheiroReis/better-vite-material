import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import App from '@/App.tsx';

describe('App component', () => {
  it('should render the App component', () => {
    render(<App />);
  });
});
