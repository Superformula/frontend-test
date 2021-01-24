import * as React from 'react'
import { Tag, Env, Title, List } from './styles'
import Item from './Item'
import { ShowcaseProps } from '@utils/types'

const Showcase: React.FunctionComponent<ShowcaseProps> = ({ title, list }) => {

  return (
    <Tag>
      <Env>
        <Title>
          { title }
        </Title>
        <List>
          { list.map((item, key) => (
            <Item item={item} key={key} />
          ))}
        </List>
      </Env>
    </Tag>
  )
}

export default Showcase