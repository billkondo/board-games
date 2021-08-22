import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  test('it should show APP text', () => {
    render(<App />);
    const textElement = screen.getByText('APP');
    expect(textElement).toBeVisible();
  });
});
