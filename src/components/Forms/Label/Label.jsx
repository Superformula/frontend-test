import styled from 'styled-components';

export default styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  color: ${props => props.theme.colors.primary}
  border-bottom: 1px solid ${props => props.theme.colors.black21}
  padding-bottom: 4px;
  > span {
    padding-left: 4px;
  }
`;
