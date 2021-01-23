import * as React from 'react'
import Rating from '@components/Rating'
import Status from '@components/Status'
import { Tag, Mask, Description, Image, Name, Info, Small, More } from './styles'

const Item: React.FunctionComponent = () => {
  const statusList = [
    {
      id: "open",
      text: "Open Now"
    },
    {
      id: "closed",
      text: "Closed"
    }
  ]

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
          <Status 
            list={statusList}
            active="open"
          />
        </Info>
      </Description>
      <More>
        Learn More
      </More>
    </Tag>
  )
}

export default Item