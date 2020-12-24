import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { DICTIONARY } from 'consts/dictionary';
import { useIsMobileWidth } from 'hooks/useIsMobileWidth';
import { getRestaurantUrl } from 'utils/restaurants';
import { Button } from '../Button';
import { Rating } from '../Rating';
import { StatusIndicator } from '../StatusIndicator';
import { StatusBadge } from '../StatusBadge';
import { GenericLabel } from '../GenericLabel';
import { Wrapper } from './Wrapper';
import { Title } from './Title';
import { Image } from './Image';
import { LearnMoreLink } from './LearnMoreLink';
import { ContentWrapper } from './ContentWrapper';
import { DetailsWrapper } from './DetailsWrapper';
import { ImageWrapper } from './ImageWrapper';

export const RestaurantCard = memo(
  ({ id, picture, name, rating, type, price, isOpen }) => {
    const isMobile = useIsMobileWidth();
    const StatusComponent = isMobile ? StatusBadge : StatusIndicator;
    const restaurantUrl = getRestaurantUrl(id);

    return (
      <Wrapper>
        <ImageWrapper>
          <Image src={picture} alt={name} />
        </ImageWrapper>
        <ContentWrapper>
          <Title>{name}</Title>
          <Rating {...{ rating, $xs: isMobile }} />
          <DetailsWrapper>
            <GenericLabel>
              {type} • {price}
            </GenericLabel>
            <StatusComponent {...{ isOpen }} />
          </DetailsWrapper>
          {isMobile ? (
            <LearnMoreLink to={restaurantUrl}>
              {DICTIONARY.LEARN_MORE}
            </LearnMoreLink>
          ) : (
            <Button $fill as={Link} to={restaurantUrl}>
              {DICTIONARY.LEARN_MORE}
            </Button>
          )}
        </ContentWrapper>
      </Wrapper>
    );
  }
);

RestaurantCard.propTypes = {
  id: PropTypes.string,
  picture: PropTypes.string,
  name: PropTypes.string,
  rating: PropTypes.number,
  type: PropTypes.string,
  price: PropTypes.string,
  isOpen: PropTypes.bool,
};

RestaurantCard.displayName = 'RestaurantCard';
