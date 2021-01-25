import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';
import Reviews from '@components/Reviews';

// This default export determines where your story goes in the story list
export default {
  title: 'Reviews',
  component: Reviews,
};

const ReviewsTemplate: Story<ComponentProps<typeof Reviews>> = (args) => (
  <Reviews {...args} />
);

export const ReviewsList = ReviewsTemplate.bind({});

ReviewsList.args = {
  review_count: 327,
  reviews: [
    {
      rating: 4.5,
      text: "Nulla ut pulvinar nunc, non volutpat elit. Nunc tempor nisi eu urna tincidunt suscipit. Pellentesque ac nisi non purus mollis semper. Integer pretium mi eget ipsum porttitor condimentum. Nullam cursus, quam sodales venenatis accumsan, nunc felis auctor risus, sed semper felis magna vitae purus. Duis non ante quis ante interdum lacinia. Integer bibendum consequat nisi ac iaculis. Donec euismod cursus tincidunt. In hac habitasse platea dictumst. Pellentesque id vehicula ex, eget pulvinar velit. Integer eget pretium erat, ut dapibus leo. Nullam tempus mollis pellentesque. Nulla vitae urna at augue pulvinar facilisis nec non dui.",
      time_created: "2020-12-18 14:52:21",
      user: {
        image_url: "https://s3-media2.fl.yelpcdn.com/photo/4lCyPL70YH0SO_a9W6BdiA/o.jpg",
        name: "Frederico Soares"
      }
    },
    {
      rating: 5,
      text: "Aliquam ullamcorper ornare nunc eget suscipit. Maecenas in eros a risus euismod vestibulum in ac dui. Fusce elit massa, sagittis et leo et, dictum aliquam ante. Morbi consectetur nunc non nisi semper semper vel vel diam. Pellentesque ultricies facilisis purus vel convallis. Quisque hendrerit commodo nunc. Curabitur porttitor vel dolor at volutpat. Quisque suscipit ultrices elit vel condimentum. Pellentesque tempus elit et mauris pellentesque tincidunt. Fusce congue est vitae sagittis pretium. Integer a ex sed magna imperdiet porttitor eget et mauris. Ut eu erat nisi. Nulla suscipit sapien dui, quis mollis turpis lacinia ut. Maecenas eget felis vitae purus suscipit egestas quis vel justo.",
      time_created: "2020-08-06 02:33:20",
      user: {
        image_url: "https://s3-media2.fl.yelpcdn.com/photo/4lCyPL70YH0SO_a9W6BdiA/o.jpg",
        name: "Jared Crown"
      }
    },
    {
      rating: 2.5,
      text: "Donec scelerisque velit vitae risus cursus, eget viverra ligula porta. Curabitur et tempor tortor. Etiam quis hendrerit elit, et pharetra libero. Etiam ac rhoncus nulla, sed pulvinar dui. Suspendisse sed tortor libero. Donec non semper enim, ac sollicitudin dolor. Pellentesque pulvinar magna sed lorem venenatis sodales. Etiam rutrum efficitur risus vel tincidunt. Proin consequat luctus volutpat.",
      time_created: "2020-09-09 08:33:07",
      user: {
        image_url: "https://s3-media2.fl.yelpcdn.com/photo/4lCyPL70YH0SO_a9W6BdiA/o.jpg",
        name: "Lucas Guimarães"
      }
    }
  ]
};