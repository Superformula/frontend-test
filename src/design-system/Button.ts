import styled from 'styled-components';

export type ButtonProps = {
  className?: string;
  children: string;
  onClick: () => void;
  variant: 'filled' | 'outlined';
};

const Button = styled.button<{ variant: 'filled' | 'outlined' }>`
  border-radius: ${({ variant, theme: { px2rem } }) =>
    variant === 'filled' ? px2rem(2) : 0};
  background-color: ${({ variant, theme: { colors } }) =>
    variant === 'filled' ? colors.primary : colors.white};
  color: ${({ variant, theme: { colors } }) =>
    variant === 'filled' ? colors.white : colors.primary};
  border: ${({ variant, theme: { colors } }) =>
    variant === 'filled' ? 'none' : `1px solid ${colors.primary}`};
  text-align: center;
  text-transform: uppercase;
  &:hover {
    cursor: pointer;
  }
`;

export default Button;
