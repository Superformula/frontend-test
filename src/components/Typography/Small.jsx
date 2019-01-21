import styled from 'styled-components';
import { color, space, style } from 'styled-system';

const textTransform = style({
  prop: 'textTransform',
  cssProperty: 'textTransform',
});

const Small = styled.small`
  font-size: ${props => props.theme.fontSizes[0]};
  font-family: ${props => props.theme.fonts[0]};
  font-weight: 400;
  font-stretch: normal;
  ${color};
  ${space};
  ${textTransform};
`;

Small.propTypes = {
  ...color.PropTypes,
  ...space.PropTypes,
  ...textTransform.PropTypes,
};

export default Small;
