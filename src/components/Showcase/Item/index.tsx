import * as React from 'react'
import Rating from '@components/Rating'
import { Tag, Mask, Description, Image, Name, Info, Small, Status, More } from './styles'

const Item = () => {
  const starsNumber = 5;

  return (
    <Tag>
      <Mask>
        <Image />
      </Mask>
      <Description>
        <Name>
          Restaurant name
        </Name>
        <Rating value={3.5} />
        <Info>
          <Small>
            Thai • $$$$
          </Small>
          <Status data-is-open="true">
            Open now
          </Status>
        </Info>
      </Description>
      <More>
        Learn More
      </More>
    </Tag>
  )
}

export default Item