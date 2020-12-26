import React, { memo } from 'react';
import { SkeletonLoader } from '../../SkeletonLoader';
import { Wrapper } from '../Wrapper';
import { Title } from '../Title';
import { ImageWrapper } from '../ImageWrapper';
import { ContentWrapper } from '../ContentWrapper';
import { GenericLabel } from '../../GenericLabel';

export const RestaurantCardLoader = memo(() => (
  <Wrapper>
    <ImageWrapper>
      <SkeletonLoader />
    </ImageWrapper>
    <ContentWrapper>
      <Title>
        <SkeletonLoader />
      </Title>
      <GenericLabel>
        <SkeletonLoader />
      </GenericLabel>
    </ContentWrapper>
  </Wrapper>
));

RestaurantCardLoader.displayName = 'RestaurantCardLoader';
