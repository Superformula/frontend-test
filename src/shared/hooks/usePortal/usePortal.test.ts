import { renderHook } from '@testing-library/react-hooks';

import { usePortal } from './usePortal';

describe('usePortal test', () => {
  it('returns portal DOM element', async () => {
    const { result, unmount } = renderHook(() => usePortal('menu'), {});

    expect(result.current.tagName).toEqual('DIV');

    unmount();
  });
});
