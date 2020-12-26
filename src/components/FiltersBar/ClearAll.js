import styled from 'styled-components';
import { DICTIONARY } from 'consts/dictionary';
import { Button } from '../Button';

export const ClearAll = styled(Button).attrs({
  children: DICTIONARY.CLEAR_ALL,
  $secondary: true,
})`
  font-size: 12px;
  min-width: 150px;
  padding: 11px 5px;
  letter-spacing: 0.85px;
  margin-left: auto;
`;
