import React from 'react';
import { storiesOf } from '@storybook/react';

import { CuisinePriceInfo } from './CuisinePriceInfo';

storiesOf('CuisinePriceInfo', module)
  .add('Small (default)', () => <CuisinePriceInfo cuisineName="Thai" priceRange="$$$$" />)
  .add('Big', () => <CuisinePriceInfo cuisineName="Japanese" priceRange="$$$" size={CuisinePriceInfo.size.BIG} />);
