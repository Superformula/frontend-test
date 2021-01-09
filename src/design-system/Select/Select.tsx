import * as React from 'react';
import { usePopper } from 'react-popper';
import styled from 'styled-components';

import useOnClickOutside from '../hooks/useOnClickOutside';
import CaretIcon from '../icons/Caret';
import Menu, { MenuProps } from './Menu';

const Wrapper = styled.div`
  display: inline-block;
`;

const PopperWrapper = styled.div`
  z-index: 1000;
`;

const Button = styled.button`
  height: ${({ theme: { px2rem } }) => px2rem(32)};
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider2};
  text-align: left;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const ButtonTextWrapper = styled.span`
  display: inline-flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const Caret = styled(CaretIcon)<{ isOpen: boolean }>`
  color: ${({ theme }) => theme.colors.divider2};
  margin-left: ${({ theme: { px2rem } }) => px2rem(16)};
  ${({ isOpen }) => (isOpen ? 'transform: rotate(180deg);' : '')}
`;

export type SelectProps = Pick<MenuProps, 'value' | 'options'> & {
  onChange: (newOption: string) => void;
};

function Select({ value, options, onChange }: SelectProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const selectRef = React.useRef(null);
  const referenceRef = React.useRef(null);
  const popperRef = React.useRef(null);

  // If clicking outside the select then we should close it
  useOnClickOutside(selectRef, () => setIsOpen(false));

  const { styles, attributes } = usePopper(
    referenceRef.current,
    popperRef.current,
    {
      placement: 'bottom-start',
      modifiers: [
        {
          name: 'offset',
          enabled: true,
          options: {
            offset: [0, -1],
          },
        },
      ],
    }
  );

  const handleSelect = (newOption: string) => {
    setIsOpen(false);
    onChange(newOption);
  };

  const selection = options.find((option) => option === value);

  return (
    <Wrapper ref={selectRef}>
      <Button ref={referenceRef} onClick={() => setIsOpen(!isOpen)}>
        <ButtonTextWrapper>
          {selection} <Caret isOpen={isOpen} />
        </ButtonTextWrapper>
      </Button>

      <PopperWrapper
        ref={popperRef}
        style={styles.popper}
        {...attributes.popper}>
        <Menu
          isVisible={isOpen}
          value={value}
          options={options}
          onSelect={handleSelect}
        />
      </PopperWrapper>
    </Wrapper>
  );
}

export default Select;
