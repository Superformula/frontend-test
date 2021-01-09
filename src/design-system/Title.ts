import styled from 'styled-components';

const Title = styled.h1`
  font-size: ${({ theme: { px2rem } }) => px2rem(54)};
  line-height: ${({ theme: { px2rem } }) => px2rem(64)};
  color: ${({ theme: { colors } }) => colors.textPrimary};
`;

export default Title;
