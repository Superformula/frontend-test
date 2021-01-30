import styled from "@emotion/styled";

export interface IProps {
  fullWidth?: boolean;
  inverse?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
}

const Button = styled.button<IProps>(
  ({ theme, fullWidth, inverse, disabled }) => {
    // TODO extract this into a function that
    // can be super easily be unit tested
    let bgColor = theme.colors.primary;
    let fgColor = theme.colors.white;
    let borderColor = theme.colors.primary;

    if (disabled) {
      bgColor = theme.colors.grey100;
      fgColor = theme.colors.grey200;
      borderColor = theme.colors.grey100;
    }

    if (inverse) {
      bgColor = theme.colors.white;
      fgColor = theme.colors.primary;
      borderColor = theme.colors.primary;

      if (disabled) {
        bgColor = theme.colors.white;
        fgColor = theme.colors.grey200;
        borderColor = theme.colors.grey100;
      }
    }

    return `
    background-color: ${bgColor};
    color: ${fgColor};
    border: 1px solid ${borderColor};
    border-radius: ${theme.borderRadius.small};
    padding: 16px;
    text-align: center;
    font-size: ${theme.fontSize.x400};
    text-transform: uppercase;
    cursor: pointer;
    ${fullWidth ? `width: 100%;` : ``}

    &:hover {
      background-color: ${theme.colors.primary}cc;
    }
  `;
  }
);

export default Button;
