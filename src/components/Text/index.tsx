import styled from "@emotion/styled";

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSize.x600};
`;

export const H1 = styled.h1`
  font-size: 54px;
  color: ${({ theme }) => theme.colors.grey600};
  margin: 0;
`;

export const H2 = styled.h2`
  font-size: 34px;
  color: ${({ theme }) => theme.colors.grey600};
  margin: 0;
`;

export const H3 = styled.h3`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.black};
  margin: 0;
`;

export const Subtitle = styled.p`
  font-size: 22px;
  color: ${({ theme }) => theme.colors.grey500};
  margin: 0px;
`;
