import styled from "styled-components";

const Image = styled.img`
  content: ${props => `url(${props.image})`};
  width: ${props => props.width};
  height: ${props => props.height};
`;

export default Image;