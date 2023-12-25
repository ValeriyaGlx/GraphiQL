import { describe, expect, it, test } from 'vitest';
import { screen } from '@testing-library/react';

import renderWithRouterAndProvider from '../../../../tests/utils/renderWithRouter';

import Footer from './Footer';

describe('Footer', () => {
  test('contains the links to the authors GitHub', () => {
    renderWithRouterAndProvider(<Footer />);
    const linkNames = ['Valeriia Galakhova', 'Maria Stroich', 'Aliaksei Krutsko'];

    linkNames.forEach((name) => {
      const link = screen.getByRole('link', { name });
      expect(link).toBeInTheDocument();
    });
  });
  it('has the year the application was created', () => {
    renderWithRouterAndProvider(<Footer />);
    const yearElement = screen.getByText(/^© 2023 - GraphiQL$/);
    expect(yearElement).toBeInTheDocument();
  });
});
