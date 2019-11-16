import React from 'react';
import { storiesOf } from '@storybook/react';

import { StarRating } from './StarRating';

storiesOf('StarRating', module)
  .add('Small (few stars)', () => <StarRating rating={3} />)
  .add('Small (half stars)', () => <StarRating rating={4.5} />)
  .add('Small (full stars)', () => <StarRating rating={5} />)
  .add('Big (few stars)', () => <StarRating rating={3} size={StarRating.size.BIG} />)
  .add('Big (half stars)', () => <StarRating rating={4.5} size={StarRating.size.BIG} />)
  .add('big (full stars)', () => <StarRating rating={5} size={StarRating.size.BIG} />);
