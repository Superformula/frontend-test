import React from 'react';
import { act, fireEvent, render, waitForElementToBeRemoved } from '@testing-library/react';

import { Dropdown } from './Dropdown';

describe('Dropdown component', () => {
  it('renders correctly, opens and close on click', async () => {
    const { container, queryByTestId, getByTestId } = render(
      <Dropdown target={isOpened => <span data-testid="target">{isOpened ? 'close' : 'open'}</span>}>
        {() => <div data-testid="popup">Content of popup</div>}
      </Dropdown>,
    );

    expect(queryByTestId('target')).toBeTruthy();
    expect(queryByTestId('popup')).toBeFalsy();

    act(() => {
      fireEvent.click(container.querySelector('.dropdown__target') as HTMLElement);
    });

    expect(queryByTestId('target')).toBeTruthy();
    expect(queryByTestId('popup')).toBeTruthy();
    expect(getByTestId('popup').textContent).toEqual('Content of popup');

    act(() => {
      fireEvent.click(container.querySelector('.dropdown__target') as HTMLElement);
    });

    await waitForElementToBeRemoved(() => queryByTestId('popup'));

    expect(queryByTestId('popup')).toBeFalsy();
  });
});
