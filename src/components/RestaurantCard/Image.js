import styled from 'styled-components';
import Restaurant from 'assets/restaurant.svg';

const onError = event => (event.target.src = Restaurant);

export const Image = styled.img.attrs({ onError })`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
