import { waitFor } from '@testing-library/react';
import * as React from 'react';

import { render } from '../../../test-utils';
import Detail from '../Detail';
import { QUERY } from '../useDetailPageData';
import payload1 from './1.json';

jest.mock('react-router-dom', () => ({
  useParams: () => ({ id: '2iTsRqUsPGRH1li1WVRvKQ' }),
}));

const apiMocks = [
  {
    request: {
      query: QUERY,
      variables: {
        id: '2iTsRqUsPGRH1li1WVRvKQ',
        offset: 0,
        limit: 10,
      },
    },
    result: {
      data: payload1,
    },
  },
];

describe('Detail Page', () => {
  it('should show the detail page', async () => {
    const { getByText } = render(<Detail />, {
      route: '/restaurant/2iTsRqUsPGRH1li1WVRvKQ',
      apiMocks,
    });

    await waitFor(() => expect(getByText('Carson Kitchen')).toBeTruthy());
  });
});
