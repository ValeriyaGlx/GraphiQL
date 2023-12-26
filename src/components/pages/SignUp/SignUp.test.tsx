import { beforeEach, describe, expect, test } from 'vitest';
import { screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import renderWithRouterAndProvider from '../../../../tests/utils/renderWithRouter';
import { SignUp } from '../index';

describe('Sign Up', () => {
  beforeEach(() => {
    renderWithRouterAndProvider(<SignUp />);
  });

  test('has no error messages', () => {
    expect(screen.queryByText(/confirm password is required/i)).not.toBeInTheDocument();
  });

  test('shows error messages', async () => {
    const submitElement = screen.getByText(/submit/i);
    await userEvent.click(submitElement);
    expect(screen.getByText(/confirm password is required/i)).toBeInTheDocument();
  });
});
