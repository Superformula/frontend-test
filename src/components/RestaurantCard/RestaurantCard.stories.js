import React from 'react';
import { RestaurantCard } from '.';

export const Default = args => <RestaurantCard {...args} />;
Default.args = {
  id: 'story-1',
  picture: 'https://picsum.photos/800/600',
  name: 'Taste of Italy',
  rating: 4,
  type: 'Italian',
  cost: '$$$$',
  isOpen: true,
};

export default {
  title: 'Restaurant Card',
  component: RestaurantCard,
  decorators: [
    Story => (
      <div style={{ maxWidth: '350px' }}>
        <Story />
      </div>
    ),
  ],
};
