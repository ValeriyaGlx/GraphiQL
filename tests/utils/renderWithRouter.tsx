import type { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { store } from '../../src/store/store';

export const mockStore = { ...store };

const Wrapper = (children: ReactNode) => {
  return <Provider store={mockStore}>{children}</Provider>;
};

function renderWithRouterAndProvider(children: ReactNode) {
  return render(<MemoryRouter>{Wrapper(children)}</MemoryRouter>);
}

export default renderWithRouterAndProvider;
