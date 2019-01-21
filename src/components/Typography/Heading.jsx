import styled from 'styled-components';
import { color, space } from 'styled-system';

const Heading = styled.h2`
  font-size: ${props => props.theme.fontSizes[6]};
  font-family: ${props => props.theme.fonts[1]};
  font-weight: 300;
  font-stretch: normal;
  ${color};
  ${space};
`;

Heading.propTypes = {
  ...color.PropTypes,
  ...space.PropTypes,
};

export default Heading;
