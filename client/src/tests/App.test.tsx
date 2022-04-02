import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../pages/App';

test('renders contact link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Contactez-moi/i);
  expect(linkElement).toBeInTheDocument();
});
