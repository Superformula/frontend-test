import styled from 'styled-components';
import { DICTIONARY } from 'consts/dictionary';
import { MEDIA_MIN } from 'utils/mediaQuery';
import { Button } from '../Button';

export const ActionButton = styled(Button).attrs({
  children: DICTIONARY.LOAD_MORE,
  $secondary: true,
})`
  width: 100%;
  max-width: 212px;
  font-weight: 500;
  font-size: 14px;
  margin: 0 auto;

  ${MEDIA_MIN.MD`
    max-width: 416px;
    margin-bottom: 80px;
  `}
`;
