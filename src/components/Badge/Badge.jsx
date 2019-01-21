import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color, space, display } from 'styled-system';

import { Small, GridItem } from '..';

const Dot = styled.span`
  border-radius: 50%;
  height: ${props => props.theme.fontSizes[0]}
  width: ${props => props.theme.fontSizes[0]}
  ${color}
  ${space}
  ${display}
`;

const Badge = ({ statusColor, textTransform, children }) => (
  <GridItem
    alignItems="center"
    display="flex"
  >
    <Dot
      bg={statusColor}
      display="inline-block"
      mr={1}
    />
    {children
    && (
      <Small color="black54" textTransform={textTransform}>
        {children}
      </Small>
    )}
  </GridItem>
);

Badge.defaultProps = {
  textTransform: 'uppercase',
};

Badge.propTypes = {
  statusColor: PropTypes.string.isRequired,
  textTransform: PropTypes.string,
  ...color.PropTypes,
  ...space.PropTypes,
  ...display.PropTypes,
};

export default Badge;
