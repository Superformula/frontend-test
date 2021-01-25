import * as React from 'react'
import { PhotosProps } from '@utils/types'
import GoogleMap from './GoogleMap'
import { Tag, Env, Map, List, Item, Address, Image } from './styles'

const Photos: React.FunctionComponent<PhotosProps> = ({ photos, coordinates, location }) => {
  const pointer = {
    lat: coordinates.latitude,
    lng: coordinates.longitude
  }

  return (
    <Tag data-testid="photos">
      <Env>
        <Map data-testid="map">
          <GoogleMap
            pointer={pointer}
          />
          <Address>
            { location.formatted_address }
          </Address>
        </Map>
        <List>
        { photos.map((item, key) => (
            <Item key={key}>
              <Image 
                alt=""
                src={item}
              />
            </Item>
          ))}
        </List>
      </Env>
    </Tag>
  )
}

export default Photos