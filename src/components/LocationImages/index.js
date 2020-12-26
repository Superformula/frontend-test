import React from 'react';
import PropTypes from 'prop-types';
import MapImage from 'assets/map.svg';
import { getRestaurantMapUrl } from 'utils/restaurants';
import { FitImg } from '../FitImg';
import { Wrapper } from './Wrapper';
import { MapSection } from './MapSection';
import { MapWrapper } from './MapWrapper';
import { ImageWrapper } from './ImageWrapper';
import { Address } from './Address';
import { Gallery } from './Gallery';

const setDefaultMap = event => (event.target.src = MapImage);

export const LocationImages = ({ address, photos }) => (
  <Wrapper>
    <MapSection>
      <MapWrapper>
        <FitImg
          src={getRestaurantMapUrl(address)}
          alt={address}
          onError={setDefaultMap}
        />
      </MapWrapper>
      <Address>{address}</Address>
    </MapSection>
    {!!photos?.length && (
      <Gallery>
        {photos?.map(photo => (
          <ImageWrapper key={photo}>
            <FitImg src={photo} />
          </ImageWrapper>
        ))}
      </Gallery>
    )}
  </Wrapper>
);

LocationImages.displayName = 'LocationImages';

LocationImages.propTypes = {
  address: PropTypes.string,
  photos: PropTypes.array,
};
