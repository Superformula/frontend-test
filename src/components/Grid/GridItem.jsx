import styled from 'styled-components';
import {
  space,
  width,
  maxWidth,
  alignItems,
  justifyContent,
  flexWrap,
  flex,
  display,
  flexDirection,
  borders,
  borderColor,
  position,
} from 'styled-system';

const GridItem = styled.div`
  ${space}
  ${width}
  ${display}
  ${alignItems}
  ${justifyContent}
  ${flexWrap}
  ${flex}
  ${flexDirection}
  ${maxWidth}
  ${borders}
  ${borderColor}
  ${position}
`;

GridItem.propTypes = {
  ...space.propTypes,
  ...width.propTypes,
  ...maxWidth.propTypes,
  ...alignItems.propTypes,
  ...justifyContent.propTypes,
  ...flexWrap.propTypes,
  ...flex.propTypes,
  ...display.propTypes,
  ...flexDirection.propTypes,
  ...borders.propTypes,
  ...borderColor.propTypes,
  ...position.propTypes,
};

export default GridItem;
