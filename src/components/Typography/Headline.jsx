import styled from 'styled-components';
import { color, space } from 'styled-system';

const Headline = styled.h3`
  font-size: ${props => props.theme.fontSizes[7]};
  font-family: ${props => props.theme.fonts[1]};
  font-weight: 300;
  font-stretch: normal;
  ${color};
  ${space};
`;

Headline.propTypes = {
  ...color.PropTypes,
  ...space.PropTypes,
};

export default Headline;
