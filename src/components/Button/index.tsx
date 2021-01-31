import styled from "@emotion/styled";

// TODO probably this should expand
// the native button props
export interface IProps {
  fullWidth?: boolean;
  inverse?: boolean;
  disabled?: boolean;
  variant?: "small" | "medium" | "large";
  type?: "button" | "submit" | "reset";
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => any;
  children: React.ReactNode;
}

const Button = styled.button<IProps>(
  ({ theme, fullWidth, inverse, disabled, variant }) => {
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

    let padding = "16px";
    switch (variant) {
      case "small": {
        padding = "10px";
      }
    }

    return `
    text-decoration: none;
    background-color: ${bgColor};
    color: ${fgColor};
    border: 1px solid ${borderColor};
    border-radius: ${theme.borderRadius.small};
    padding: ${padding};
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
