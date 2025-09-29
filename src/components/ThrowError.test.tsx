import { render } from '@testing-library/react';
import ThrowError from './ThrowError';

test('ThrowError throws error', () => {
  vi.spyOn(console, 'error').mockImplementation(() => {});
  expect(() => render(<ThrowError />)).toThrow('This is a simulated server error!');
});
