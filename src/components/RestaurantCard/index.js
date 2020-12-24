import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { DICTIONARY } from 'consts/dictionary';
import { useIsMobileWidth } from 'hooks/useIsMobileWidth';
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
  ({ id, picture, name, rating, type, cost, isOpen }) => {
    const isMobile = useIsMobileWidth();
    const StatusComponent = isMobile ? StatusBadge : StatusIndicator;
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
              {type} • {cost}
            </GenericLabel>
            <StatusComponent {...{ isOpen }} />
          </DetailsWrapper>
          {isMobile ? (
            <LearnMoreLink>{DICTIONARY.LEARN_MORE}</LearnMoreLink>
          ) : (
            <Button $fill as={Link}>
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
  cost: PropTypes.string,
  isOpen: PropTypes.bool,
};

RestaurantCard.displayName = 'RestaurantCard';
