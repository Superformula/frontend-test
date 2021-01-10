import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: ${({ theme: { px2rem } }) => px2rem(30)};
  height: ${({ theme: { px2rem } }) => px2rem(30)};
  border-radius: 50% 50% 50% 0;
  background: #89849b;
  position: absolute;
  transform: rotate(-45deg);
  left: 50%;
  top: 50%;
  margin: -${({ theme: { px2rem } }) => px2rem(20)} 0 0 -${({
      theme: { px2rem },
    }) => px2rem(20)};
  animation-name: bounce;
  animation-fill-mode: both;
  animation-duration: 1s;
  &:after {
    content: '';
    width: ${({ theme: { px2rem } }) => px2rem(14)};
    height: ${({ theme: { px2rem } }) => px2rem(14)};
    margin: ${({ theme: { px2rem } }) => px2rem(8)} 0 0
      ${({ theme: { px2rem } }) => px2rem(8)};
    background: #2f2f2f;
    position: absolute;
    border-radius: 50%;
  }
`;

interface MapMarkerProps {
  text: string;
  lat: number;
  lng: number;
}

const MapMarker = ({ text }: MapMarkerProps) => <Wrapper alt={text} />;

export default MapMarker;
