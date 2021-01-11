import { MockedProvider } from '@apollo/client/testing';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import * as React from 'react';
import { Router } from 'react-router';

import ThemeProvider from './design-system/theme';

export const customRender = (
  ui: React.ReactNode,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route], initialIndex: 0 }),
    apiMocks = [],
  } = {}
) => ({
  ...render(
    <MockedProvider mocks={apiMocks as any} addTypename={false}>
      <ThemeProvider>
        <Router history={history}>{ui}</Router>
      </ThemeProvider>
    </MockedProvider>
  ),
  history,
});

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
