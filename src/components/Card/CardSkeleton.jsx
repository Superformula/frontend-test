import React from 'react';
import Skeleton from 'react-skeleton-loader';

import { GridItem } from '..';

export default () => (
  <GridItem
    width={[1, 1 / 3, 1 / 4]}
    display="flex"
    p={[0, 2, 3]}
    mb={4}
    mt={3}
  >
    <GridItem
      width={1}
      display="flex"
      flexDirection="column"
    >
      <Skeleton width="100%" height="288px" widthRandomness={0} borderRadius="2px" />
      <GridItem>
        <Skeleton width="75%" height="24px" widthRandomness={0} borderRadius="2px" />
        <div className="test">
          <Skeleton width="16px" height="16px" widthRandomness={0} borderRadius="50%" />
          <Skeleton width="16px" height="16px" widthRandomness={0} borderRadius="50%" />
          <Skeleton width="16px" height="16px" widthRandomness={0} borderRadius="50%" />
          <Skeleton width="16px" height="16px" widthRandomness={0} borderRadius="50%" />
        </div>
      </GridItem>
      <GridItem
        mt={4}
      >
        <Skeleton width="100%" height="44px" widthRandomness={0} borderRadius="2px" />
      </GridItem>
    </GridItem>
  </GridItem>
);
