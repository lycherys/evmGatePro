// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders evmGate title', () => {
    render(<App />);
    const titleElement = screen.getByText(/evmGate/i);
    expect(titleElement).toBeInTheDocument();
});
