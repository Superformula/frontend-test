import React, { memo } from 'react';
import { SkeletonLoader } from '../../SkeletonLoader';
import { Wrapper } from '../Wrapper';
import { Title } from '../Title';
import { ImageWrapper } from '../ImageWrapper';
import { ContentWrapper } from '../ContentWrapper';

export const RestaurantCardLoader = memo(() => (
  <Wrapper>
    <ImageWrapper>
      <SkeletonLoader />
    </ImageWrapper>
    <ContentWrapper>
      <Title>
        <SkeletonLoader />
      </Title>
    </ContentWrapper>
  </Wrapper>
));

RestaurantCardLoader.displayName = 'RestaurantCardLoader';
