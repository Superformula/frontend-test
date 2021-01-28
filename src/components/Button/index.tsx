import styled from "@emotion/styled";

export interface IProps {}

const Button = styled.button`
  background-color: ${(p) => p.theme.backgroundColor};
  width: 300px;
`;

export default Button;
