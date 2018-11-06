import styled from "styled-components";

const ImageDiv = styled.div`
  background-image: ${props => `url(${props.image})`};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  width: ${props => props.width};
  height: ${props => props.height};
`;

export default ImageDiv;