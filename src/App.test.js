import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders react title', () => {
  render(<App />);
  const textHeader = screen.getByText(/desafio/i);
  expect(textHeader).toBeInTheDocument();
});
