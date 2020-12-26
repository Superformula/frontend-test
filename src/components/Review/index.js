import React, { memo } from 'react';
import { Paragraph } from 'components/Paragraph';
import { Rating } from 'components/Rating';
import { FitImg } from 'components/FitImg';
import { ImageWrapper } from './ImageWrapper';
import { Name } from './Name';
import { PostedAt } from './PostedAt';
import { UserWrapper } from './UserWrapper';
import { Wrapper } from './Wrapper';

export const Review = memo(({ rating, text, date, user }) => {
  const { name, avatar } = user || {};
  return (
    <Wrapper>
      <UserWrapper>
        <ImageWrapper>
          <FitImg src={avatar} alt={name} />
        </ImageWrapper>
        <div>
          <Name>{name}</Name>
          <PostedAt>{date}</PostedAt>
        </div>
      </UserWrapper>
      <div>
        <Rating rating={rating} />
        <Paragraph extraWeight>{text}</Paragraph>
      </div>
    </Wrapper>
  );
});
