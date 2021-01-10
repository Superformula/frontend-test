import Map, { MapMarker } from 'design-system/Map';
import * as React from 'react';
import styled from 'styled-components';

const MediaBannerWrapper = styled.section`
  padding: ${({ theme: { px2rem } }) => `${px2rem(48)} ${px2rem(64)}`};
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.divider1};
`;

const MediaList = styled.div`
  display: flex;
  margin-bottom: ${({ theme: { px2rem } }) => px2rem(16)};
`;

const StyledMap = styled(Map)`
  width: ${({ theme: { px2rem } }) => px2rem(640)};
  height: ${({ theme: { px2rem } }) => px2rem(228)};
`;

const Img = styled.img`
  width: ${({ theme: { px2rem } }) => px2rem(304)};
  height: ${({ theme: { px2rem } }) => px2rem(228)};
  margin-left: ${({ theme: { px2rem } }) => px2rem(32)};
`;

const Address = styled.p`
  font-size: ${({ theme: { px2rem } }) => px2rem(20)};
  line-height: ${({ theme: { px2rem } }) => px2rem(28)};
  letter-spacing: ${({ theme: { px2rem } }) => px2rem(1)};
  color: ${({ theme: { colors } }) => colors.black};
`;

interface MediaBannerProps {
  name: string;
  address: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  photos: Array<string>;
}

function MediaBanner({
  name,
  address,
  photos,
  coordinates: { latitude: lat, longitude: lng },
}: MediaBannerProps) {
  return (
    <MediaBannerWrapper>
      <MediaList>
        <StyledMap defaultCenter={{ lat, lng }}>
          <MapMarker lat={lat} lng={lng} text={name} />
        </StyledMap>
        {photos.map((url) => (
          <Img key={url} src={url} />
        ))}
      </MediaList>
      <Address>{address}</Address>
    </MediaBannerWrapper>
  );
}

export default MediaBanner;
