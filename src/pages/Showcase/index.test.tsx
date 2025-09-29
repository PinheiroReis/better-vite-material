import { ThemeProvider } from '@mui/material/styles';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { lightTheme } from '@/styles/theme';
import ShowcasePage from './index.tsx';

describe('Showcase Component', () => {
  it('should render without crashing', () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <ShowcasePage />
      </ThemeProvider>
    );

    expect(screen.getByText('Material-UI Showcase')).toBeInTheDocument();
    expect(screen.getByText('Buttons')).toBeInTheDocument();
    expect(screen.getByText('Text Field')).toBeInTheDocument();
    expect(screen.getByText('Checkboxes & Radios')).toBeInTheDocument();
    expect(screen.getByText('Slider & Switch')).toBeInTheDocument();
  });

  it('should update TextField value on change', () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <ShowcasePage />
      </ThemeProvider>
    );

    const input = screen.getByLabelText('Standard TextField') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'Hello Vitest' } });

    expect(input.value).toBe('Hello Vitest');
  });

  it('should toggle checkbox', () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <ShowcasePage />
      </ThemeProvider>
    );

    const checkbox = screen.getByLabelText('Remember me') as HTMLInputElement;
    expect(checkbox.checked).toBe(false);

    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);
  });

  it('should change radio selection', () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <ShowcasePage />
      </ThemeProvider>
    );

    const radioTwo = screen.getByLabelText('Option Two') as HTMLInputElement;
    fireEvent.click(radioTwo);

    expect(radioTwo.checked).toBe(true);
  });

  it('should toggle switch', () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <ShowcasePage />
      </ThemeProvider>
    );

    const toggle = screen.getByLabelText('Toggle Feature') as HTMLInputElement;
    expect(toggle.checked).toBe(false);

    fireEvent.click(toggle);
    expect(toggle.checked).toBe(true);
  });
});
