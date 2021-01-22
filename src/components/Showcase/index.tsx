import * as React from 'react'
import { Tag, Env, Title, List } from './styles'
import Item from './Item'

const Showcase = (props: { title: string }) => {
  const { title } = props
  const list = [1, 2, 3, 4, 5, 6, 7, 8]
  
  return (
    <Tag>
      <Env>
        <Title>
          { title }
        </Title>
        <List>
          { list.map((item, key) => (
            <Item key={key} />
          ))}
        </List>
      </Env>
    </Tag>
  )
}

export default Showcase