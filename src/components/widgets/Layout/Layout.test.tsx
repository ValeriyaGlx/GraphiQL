import { beforeEach, describe, expect, test } from 'vitest';
import { screen } from '@testing-library/react';

import renderWithRouterAndProvider from '../../../../tests/utils/renderWithRouter';

import Layout from './Layout';

describe('Layout', () => {
  beforeEach(() => {
    renderWithRouterAndProvider(<Layout />);
  });

  test('renders LoaderBig while loading', () => {
    const loaderElement = screen.getByTestId('big-loader');
    expect(loaderElement).toBeInTheDocument();
  });

  test('renders Header and Footer when not loading', async () => {
    await renderWithRouterAndProvider(<Layout />);
    const headerElement = screen.getByTestId('header');
    expect(headerElement).toBeInTheDocument();

    const footerElement = screen.getByTestId('footer');
    expect(footerElement).toBeInTheDocument();
  });
});
