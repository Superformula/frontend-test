import styled from 'styled-components';
import { color, space } from 'styled-system';

const SubHeading = styled.h3`
  font-size: ${props => props.theme.fontSizes[3]};
  font-family: ${props => props.theme.fonts[0]};
  font-weight: 400;
  font-stretch: normal;
  ${color};
  ${space};
`;

SubHeading.propTypes = {
  ...color.PropTypes,
  ...space.PropTypes,
};

export default SubHeading;
