import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ImageWrap = styled.div`
  width: 100%;
  height: 228px;
  overflow: hidden;
  cursor: ${props => props.onClick ? 'pointer' : 'default'};
  &:hover > div,
  &: focus > div {
    transform: scale(1.05);
  }
`;

const ImageContent = styled.div`
  background: url(${props => props.img}) center / cover no-repeat;
  width: 100%;
  height: 100%;
  transition: all cubic-bezier(0.4, 0.0, 0.2, 1) 0.25s;
`;

const ImageContainer = ({ img, onClick }) => (
  <ImageWrap onClick={onClick}>
    <ImageContent img={img} />
  </ImageWrap>
);

ImageContainer.defaultProps = {
  onClick: null,
};

ImageContainer.propTypes = {
  img: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default ImageContainer;
