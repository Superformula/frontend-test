import React from 'react';
import { storiesOf } from '@storybook/react';

import { RestaurantStatus } from './RestaurantStatus';

storiesOf('RestaurantStatus', module)
  .add('Open (small)', () => <RestaurantStatus isOpen />)
  .add('Closed (small)', () => <RestaurantStatus isOpen={false} />)
  .add('Open (big)', () => <RestaurantStatus isOpen size={RestaurantStatus.size.BIG} />)
  .add('Closed (big)', () => <RestaurantStatus isOpen={false} size={RestaurantStatus.size.BIG} />);
