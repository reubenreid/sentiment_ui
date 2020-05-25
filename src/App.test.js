import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders map link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Map/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders scatter map link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Scatter Map/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders home link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders searchbar', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/#/i);
  expect(linkElement).toBeInTheDocument();
});
