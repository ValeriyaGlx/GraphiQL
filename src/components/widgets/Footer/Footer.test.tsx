import { beforeEach, describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import Footer from './Footer';

describe('Footer', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  test('contains the links to the authors GitHub', () => {
    const linkNames = ['Valeriia Galakhova', 'Maria Stroich', 'Aliaksei Krutsko'];

    linkNames.forEach((name) => {
      const link = screen.getByRole('link', { name });
      expect(link).toBeInTheDocument();
    });
  });
  test('has the year the application was created', () => {
    const yearElement = screen.getByText(/^© 2023 - GraphiQL$/);
    expect(yearElement).toBeInTheDocument();
  });
});
