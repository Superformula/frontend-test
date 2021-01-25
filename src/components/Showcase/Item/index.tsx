import * as React from 'react'
import Link from 'next/link'
import Rating from '@components/Rating'
import Status from '@components/Status'
import { Tag, Mask, Description, Image, Name, Info, Small, More } from './styles'
import { ShowcaseItemProps } from '@utils/types'

const Item: React.FunctionComponent<ShowcaseItemProps> = ({ item }) => {
  const { name, is_closed, rating, price, categories, photos } = item
  const type = categories[0].title
  const id = name.toLowerCase().replace(/ /g, '-')
  return (
    <Tag data-testid={`showcase-item-${id}`}>
      <Link href={`/restaurants/${id}`}>
        <Mask data-testid={`showcase-mask-${id}`}>
          { photos[0] &&
            <Image src={photos[0]} alt={name} />
          }
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
      <Link href={`/restaurants/${id}`}>
        <More data-testid={`showcase-learn-more-${id}`}>
          Learn More
        </More>
      </Link>
    </Tag>
  )
}

export default Item