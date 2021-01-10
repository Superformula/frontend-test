import EmptyStar from 'design-system/icons/EmptyStar';
import FillStar from 'design-system/icons/FillStar';
import HalfStar from 'design-system/icons/HalfStar';
import * as React from 'react';
import styled from 'styled-components';

const StarsWrapper = styled.div`
  display: flex;
  color: ${({ theme: { colors } }) => colors.primary};
`;

interface StarRatingProps {
  rating: number;
  className?: string;
}

function StarRating({ rating, className }: StarRatingProps) {
  const fillStars = Math.floor(rating);
  const halfStars = Math.ceil(rating - fillStars);
  const emptyStars = 5 - fillStars - halfStars;
  const stars = [];

  for (let i = 0; i < fillStars; i++) {
    stars.push(<FillStar key={i} />);
  }

  halfStars === 1 && stars.push(<HalfStar key={fillStars} />);

  for (let i = 0; i < emptyStars; i++) {
    stars.push(<EmptyStar key={i + fillStars + 1} />);
  }

  return <StarsWrapper className={className}>{stars}</StarsWrapper>;
}

export default StarRating;
