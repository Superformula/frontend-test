import * as React from 'react'
import { Tag, Env, Title, List } from './styles'
import Item from './Item'

interface ShowcaseProps {
  readonly title: string,
  list: Array<Number>
}

const Showcase: React.FunctionComponent<ShowcaseProps> = ({ title, list }) => {
  
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