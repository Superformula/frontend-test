import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ReactComponent as StarIcon } from 'assets/star.svg';
import { COLORS } from 'consts/colors';

export const Star = styled(StarIcon)`
  fill: ${({ $fill }) => ($fill ? COLORS.PRIMARY : COLORS.WHITE)};
`;

Star.displayName = 'Star';

Star.propTypes = {
  $fill: PropTypes.bool,
};
