import { beforeEach, describe, expect, test } from 'vitest';
import { screen } from '@testing-library/react';

import renderWithRouterAndProvider from '../../../../tests/utils/renderWithRouter';
import { PageNotFound } from '../index';

describe('404', () => {
  beforeEach(() => {
    renderWithRouterAndProvider(<PageNotFound />);
  });

  test('has button to welcome', () => {
    const welcomeButton = screen.getByText(/go to main/i);
    expect(welcomeButton).toBeInTheDocument();
  });
});
