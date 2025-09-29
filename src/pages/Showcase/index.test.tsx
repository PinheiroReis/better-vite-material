import { createTheme, ThemeProvider } from '@mui/material/styles';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ShowcasePage from './index';

const theme = createTheme();

describe('ShowcasePage', () => {
  beforeEach(() => {
    render(
      <ThemeProvider theme={theme}>
        <ShowcasePage />
      </ThemeProvider>
    );
  });

  it('renders page title', () => {
    expect(screen.getByText(/Material-UI Showcase/i)).toBeInTheDocument();
  });

  it('renders buttons and responds to click', async () => {
    const containedPrimary = screen.getByRole('button', { name: /Primary/i });
    expect(containedPrimary).toBeInTheDocument();

    const outlinedButton = screen.getByRole('button', { name: /Outlined/i });
    expect(outlinedButton).toBeInTheDocument();

    await userEvent.click(containedPrimary);
    expect(containedPrimary).toBeEnabled();
  });

  it('updates TextField value', async () => {
    const input = screen.getByLabelText(/Standard TextField/i);
    expect(input).toBeInTheDocument();
    await userEvent.type(input, 'Hello MUI');
    expect(input).toHaveValue('Hello MUI');
  });

  it('toggles Checkbox', async () => {
    const checkbox = screen.getByLabelText(/Remember me/i) as HTMLInputElement;
    expect(checkbox.checked).toBe(false);
    await userEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);
  });

  it('selects Radio buttons', async () => {
    const optionTwo = screen.getByLabelText(/Option Two/i) as HTMLInputElement;
    expect(optionTwo.checked).toBe(false);
    await userEvent.click(optionTwo);
    expect(optionTwo.checked).toBe(true);
  });

  it('toggles Switch', async () => {
    const toggle = screen.getByLabelText(/Toggle Feature/i) as HTMLInputElement;
    expect(toggle.checked).toBe(false);
    await userEvent.click(toggle);
    expect(toggle.checked).toBe(true);
  });

  it('changes Slider value', async () => {
    const slider = screen.getByRole('slider') as HTMLInputElement;
    fireEvent.change(slider, { target: { value: 80 } });
    expect(slider.value).toBe('80');
  });

  it('updates Rating value', async () => {
    const user = userEvent.setup();
    const stars = screen.getAllByRole('radio');

    await user.click(stars[3]);

    expect(stars[3]).toBeInTheDocument();
  });

  it('expands and collapses Accordion', async () => {
    const accordionButton = screen.getByText(/Accordion Title/i);
    const content = screen.getByText(/This is the content inside the accordion./i);
    expect(content).not.toBeVisible();
    await userEvent.click(accordionButton);
    expect(content).toBeVisible();
    await userEvent.click(accordionButton);
    expect(content).not.toBeVisible();
  });

  it('renders Theme Colors palette', () => {
    const colors = ['Primary', 'Secondary', 'Info', 'Warning', 'Success', 'Error'];
    colors.forEach((color) => {
      expect(screen.getByTestId(`theme-color-${color.toLowerCase()}`)).toBeInTheDocument();
    });
  });
});
