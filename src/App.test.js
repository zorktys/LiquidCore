// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders LiquidCore title', () => {
    render(<App />);
    const titleElement = screen.getByText(/LiquidCore/i);
    expect(titleElement).toBeInTheDocument();
});
