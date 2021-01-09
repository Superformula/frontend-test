import * as React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  display: inline-block;
  position: relative;
  padding-left: ${({ theme: { px2rem } }) => px2rem(24)};
  cursor: pointer;
  font-size: ${({ theme: { px2rem } }) => px2rem(22)};
  user-select: none;
  font-size: ${({ theme: { px2rem } }) => px2rem(16)};
  line-height: ${({ theme: { px2rem } }) => px2rem(16)};
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.primary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider2};
  padding-bottom: ${({ theme: { px2rem } }) => px2rem(8)};
`;

const Input = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

const Checkmark = styled.span<{ isVisible: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  height: ${({ theme: { px2rem } }) => px2rem(16)};
  width: ${({ theme: { px2rem } }) => px2rem(16)};
  background-color: ${({ isVisible, theme }) =>
    isVisible ? theme.colors.primary : theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.divider2};
  border-radius: ${({ theme: { px2rem } }) => px2rem(4)};

  &:after {
    display: ${(props) => (props.isVisible ? 'block' : 'none')};
    content: '';
    position: absolute;
    left: ${({ theme: { px2rem } }) => px2rem(5)};
    top: ${({ theme: { px2rem } }) => px2rem(2)};
    width: ${({ theme: { px2rem } }) => px2rem(3)};
    height: ${({ theme: { px2rem } }) => px2rem(7)};
    border: solid ${({ theme }) => theme.colors.white};
    border-width: ${({ theme: { px2rem } }) => `0 ${px2rem(3)} ${px2rem(3)} 0`};
    transform: rotate(45deg);
  }
`;

export interface CheckboxProps {
  checked: boolean;
  label: string;
  onChange: (value: boolean) => void;
  className?: string;
}

function Checkbox({ checked, label, onChange, className }: CheckboxProps) {
  return (
    <Label className={className}>
      {label}
      <Input
        type="checkbox"
        checked={checked}
        onChange={({ target: { checked } }) => {
          onChange(checked);
        }}
      />
      <Checkmark isVisible={checked} />
    </Label>
  );
}

export default Checkbox;
