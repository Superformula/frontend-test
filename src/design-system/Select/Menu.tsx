import * as React from 'react';
import styled from 'styled-components';

import CheckIcon from '../icons/Check';
import OvalIcon from '../icons/Oval';

const Check = styled(CheckIcon)`
  color: ${({ theme }) => theme.colors.black};
  margin-right: ${({ theme: { px2rem } }) => px2rem(8)};
`;

const Circle = styled(OvalIcon)`
  color: ${({ theme }) => theme.colors.divider2};
  margin-right: ${({ theme: { px2rem } }) => px2rem(8)};
`;

const List = styled.ul<{ isVisible: boolean }>`
  border: 1px solid ${({ theme }) => theme.colors.divider2};
  display: ${(props) => (props.isVisible ? 'flex' : 'none')};
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme: { colors, px2rem } }) =>
    `0 ${px2rem(6)} ${px2rem(5)} rgba(0, 0, 0, 0.1), inset 0 -1px 0 ${
      colors.divider2
    }`};
`;

const Item = styled.li`
  display: flex;
  justify-content: flex-start;
  font-size: ${({ theme: { px2rem } }) => px2rem(16)};
  letter-spacing: ${({ theme: { px2rem } }) => px2rem(0.5)};
  color: ${({ theme }) => theme.colors.label};
  padding: ${({ theme: { px2rem } }) => `${px2rem(10)} ${px2rem(16)}`};
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray};
  }
`;

export interface MenuProps {
  isVisible: boolean;
  value: string | undefined;
  options: Array<string>;
  onSelect: (newSelection: string) => void;
}

function Menu({ value, isVisible, options, onSelect }: MenuProps) {
  const isSelected = (option: string) => option === value;

  return (
    <List isVisible={isVisible}>
      {options.map((option) => (
        <Item key={option} onClick={() => onSelect(option)}>
          {isSelected(option) ? <Check /> : <Circle />} {option}
        </Item>
      ))}
    </List>
  );
}

export default Menu;
