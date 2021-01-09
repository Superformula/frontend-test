import styled from 'styled-components';

const WelcomeText = styled.p`
  margin-top: ${({ theme: { px2rem } }) => px2rem(24)};
  font-size: ${({ theme: { px2rem } }) => px2rem(22)};
  line-height: ${({ theme: { px2rem } }) => px2rem(32)};
  color: ${({ theme: { colors } }) => colors.textSecondary};
  max-width: ${({ theme: { px2rem } }) => px2rem(752)};
`;

export default WelcomeText;
