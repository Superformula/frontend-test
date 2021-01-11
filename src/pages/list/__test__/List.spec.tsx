import { waitFor, fireEvent } from '@testing-library/react';
import * as React from 'react';
import { act } from 'react-dom/test-utils';

import { render } from '../../../test-utils';
import List from '../List';
import { QUERY } from '../useListPageData';
import payload1 from './1.json';
import payload2 from './2.json';

const apiMocks = [
  {
    request: {
      query: QUERY,
      variables: {
        openNow: false,
        price: '1, 2, 3, 4',
        category: '',
        offset: 0,
        limit: 12,
      },
    },
    result: {
      data: payload1,
    },
  },
  {
    request: {
      query: QUERY,
      variables: {
        openNow: false,
        price: '1, 2, 3, 4',
        category: 'arabian',
        offset: 0,
        limit: 12,
      },
    },
    result: {
      data: payload2,
    },
  },
];

describe('List Page', () => {
  it('should show all the restaurants', async () => {
    const { getByText } = render(<List />, { route: '/', apiMocks });

    expect(getByText('Restaurants')).toBeTruthy();

    await waitFor(() => expect(getByText('Carson Kitchen')).toBeTruthy());
  });

  it('should show different restaurants when changing the filter', async () => {
    const { getByText, getAllByText } = render(<List />, {
      route: '/',
      apiMocks,
    });

    expect(getByText('Restaurants')).toBeTruthy();

    await waitFor(() => expect(getByText('Carson Kitchen')).toBeTruthy());

    act(() => {
      // Open the dropdown
      fireEvent.click(getAllByText('All')[1]);
      // Click the desired category
      fireEvent.click(getByText('Arabian'));
    });

    await waitFor(() => expect(getByText('Le Thai')).toBeTruthy());
  });
});
