import React from 'react';
import PropTypes from 'prop-types';

import {
  StarRating,
  Button,
  SubHeading,
  GridItem,
  Small,
  Badge,
} from '..';
import ImageContainer from './ImageContainer';

const Card = ({
  imageSrc,
  title,
  rating,
  price,
  closed,
  category,
  onClick,
  buttonVariant,
}) => (
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
      bg="white"
    >
      <ImageContainer img={imageSrc} onClick={onClick} />
      <GridItem>
        <SubHeading mt={2}>{title}</SubHeading>
        <StarRating rating={rating} />
      </GridItem>
      <GridItem mb={3} display="flex" alignItems="center">
        <GridItem width={2 / 3}>
          {category
          && (
            <Small color="black54" textTransform="uppercase">
              {category}
              <GridItem px={1} display="inline">•</GridItem>
            </Small>
          )}
          {price && <Small color="black54">{price}</Small>}
        </GridItem>
        <GridItem width={1 / 3} display="flex" justifyContent="flex-end">
          <Badge statusColor={closed ? 'red' : 'green'}>{closed ? 'Closed' : 'Open Now'}</Badge>
        </GridItem>
      </GridItem>
      <GridItem
        display="flex"
        flex="1 0 auto"
        alignItems="flex-end"
        mt={1}
      >
        <Button variant={buttonVariant} block onClick={onClick}>Learn More</Button>
      </GridItem>
    </GridItem>
  </GridItem>
);

Card.defaultProps = {
  price: undefined,
  category: undefined,
  onClick: null,
  buttonVariant: 'primary',
};

Card.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  closed: PropTypes.bool.isRequired,
  price: PropTypes.string,
  category: PropTypes.string,
  onClick: PropTypes.func,
  buttonVariant: PropTypes.string,
};

export default Card;
