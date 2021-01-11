import Button from 'design-system/Button';
import LoadingIndicator from 'design-system/LoadingIndicator';
import * as React from 'react';
import styled from 'styled-components';

import Review from './Review';
import { ReviewItem } from './types';

const ReviewsWrapper = styled.section`
  padding: ${({ theme: { px2rem } }) => `${px2rem(48)} ${px2rem(64)}`};
  display: flex;
  flex-direction: column;
`;

const Caption = styled.span`
  font-size: ${({ theme: { px2rem } }) => px2rem(22)};
  line-height: ${({ theme: { px2rem } }) => px2rem(32)};
  letter-spacing: ${({ theme: { px2rem } }) => px2rem(1)};
  color: ${({ theme: { colors } }) => colors.textSecondary};
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
`;

const LoadMoreButton = styled(Button)`
  width: ${({ theme: { px2rem } }) => px2rem(416)};
  height: ${({ theme: { px2rem } }) => px2rem(48)};
  margin-top: ${({ theme: { px2rem } }) => px2rem(80)};
  align-self: center;
`;

interface ReviewsProps {
  reviewCount: number;
  reviews: Array<ReviewItem>;
  onLoadMore: () => void;
  isLoadingMore: boolean;
}

function Reviews({
  reviewCount,
  reviews,
  onLoadMore,
  isLoadingMore,
}: ReviewsProps) {
  const disableLoadMore = isLoadingMore || reviews.length >= reviewCount;

  return (
    <ReviewsWrapper>
      <Caption>{reviewCount} Reviews</Caption>
      <List>
        {reviews.map((review) => (
          <Review key={review.id} {...review} />
        ))}
      </List>
      <LoadMoreButton
        variant="outlined"
        onClick={onLoadMore}
        disabled={disableLoadMore}>
        {isLoadingMore ? (
          <LoadingIndicator size={15} rippleSize={12} />
        ) : (
          'Load more'
        )}
      </LoadMoreButton>
    </ReviewsWrapper>
  );
}

export default Reviews;
