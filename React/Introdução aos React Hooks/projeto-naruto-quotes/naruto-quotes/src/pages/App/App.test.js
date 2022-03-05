import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { App } from './App'

test('renders the app with a button, a quote and a author', () => {
  render(<App />);

  const buttonEl = screen.getByRole('button');
  const imageEl = screen.getByRole('img');
  const textEl = screen.getByText(/Speaker/);

  expect(buttonEl).toBeInTheDocument();
  expect(imageEl).toBeInTheDocument();
  expect(textEl).toBeInTheDocument();
});