import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

export const GenericLabel = styled.span`
  text-transform: uppercase;
  font-size: 12px;
  color: ${COLORS.GRAY_600};
`;

GenericLabel.displayName = 'GenericLabel';
