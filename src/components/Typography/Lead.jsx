import styled from 'styled-components';
import {
  color,
  space,
  width,
} from 'styled-system';

const Lead = styled.p`
  font-size: ${props => props.theme.fontSizes[4]};
  font-family: ${props => props.theme.fonts[1]};
  font-weight: 300;
  font-stretch: normal;
  line-height: ${props => props.theme.fontSizes[6]};
  ${color};
  ${space};
  ${width}
`;

Lead.propTypes = {
  ...color.PropTypes,
  ...space.PropTypes,
  ...width.PropTypes,
};

export default Lead;
