import styled from 'styled-components';

const Subtitle = styled.h2`
  font-size: ${({ theme: { px2rem } }) => px2rem(34)};
  line-height: ${({ theme: { px2rem } }) => px2rem(40)};
  color: ${({ theme: { colors } }) => colors.textPrimary};
  margin-bottom: ${({ theme: { px2rem } }) => px2rem(43)};
`;

export default Subtitle;
