import { render, screen } from '@testing-library/react';

import App from '../src/App';
import { expect } from 'vitest';

describe('App', () => {
  it('renders correct heading', () => {
    render(<App></App>);
    expect(screen.getByRole('heading', {name: 'First Test'}).textContent).toMatch(/First Test/i)

  });
});