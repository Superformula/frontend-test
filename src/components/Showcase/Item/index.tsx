import * as React from 'react'
import Link from 'next/link'
import Rating from '@components/Rating'
import Status from '@components/Status'
import { Tag, Mask, Description, Image, Name, Info, Small, More } from './styles'
import { ShowcaseItemProps } from '@utils/types'

const Item: React.FunctionComponent<ShowcaseItemProps> = ({ item }) => {
  const { alias, name, is_closed, rating, price, categories, photos } = item
  const type = categories[0].title

  return (
    <Tag>
      <Link href={`/restaurants/${alias}`}>
        <Mask>
          <Image src={photos[0]} alt={name} />
        </Mask>
      </Link>
      <Description>
        <Name>
          { name }
        </Name>
        <Rating value={rating} />
        <Info>
          <Small>
            { type } • { price }
          </Small>
          <Status 
            active={(is_closed) ? "closed" : "open"}
          />
        </Info>
      </Description>
      <Link href={`/restaurants/${alias}`}>
        <More>
          Learn More
        </More>
      </Link>
    </Tag>
  )
}

export default Item