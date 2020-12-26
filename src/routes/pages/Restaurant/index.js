import React from 'react';
import { useParams } from 'react-router-dom';
import { useRestaurantData } from 'hooks/useRestaurantData';
import { useIsMobileWidth } from 'hooks/useIsMobileWidth';
import { H1 } from 'components/H1';
import { Paragraph } from 'components/Paragraph';
import { GridWrapper } from 'components/GridWrapper';
import { SkeletonLoader } from 'components/SkeletonLoader';
import { Rating } from 'components/Rating';
import { StatusIndicator } from 'components/StatusIndicator';
import { LocationImages } from 'components/LocationImages';
import { SpaceBetween } from 'components/SpaceBetween';
import { Reviews } from 'components/Reviews';

export const Restaurant = () => {
  const isMobile = useIsMobileWidth();
  const { id } = useParams() || {};
  const { restaurant, loading } = useRestaurantData(id);

  if (loading) {
    return (
      <GridWrapper>
        <H1>
          <SkeletonLoader />
        </H1>
        <Paragraph>
          <SkeletonLoader />
        </Paragraph>
      </GridWrapper>
    );
  }

  const {
    address,
    isOpen,
    name,
    photos,
    price,
    rating,
    type,
    reviewCount,
    reviews,
  } = restaurant || {};

  return (
    <>
      <GridWrapper>
        <H1>{name}</H1>
        <Rating rating={rating} $lg={!isMobile} />
        <SpaceBetween spaced>
          <Paragraph>
            {type} • {price}
          </Paragraph>
          <StatusIndicator
            {...{ isOpen, xl: !isMobile, uppercase: isMobile }}
          />
        </SpaceBetween>
      </GridWrapper>
      <LocationImages {...{ address, photos }} />
      <Reviews {...{ reviewCount, reviews }} />
    </>
  );
};

export default Restaurant;
