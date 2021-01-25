import * as React from 'react'
import { RestaurantsContext } from '@providers/Restaurants'
import { Tag, Env, Title, List } from './styles'
import Item from './Item'
import { ShowcaseProps } from '@utils/types'

const Showcase: React.FunctionComponent<ShowcaseProps> = ({ title, list }) => {
  const { priceFilter, openFilter } = React.useContext(RestaurantsContext)

  return (
    <Tag>
      <Env>
        <Title>
          { title }
        </Title>
        <List>
          {/* TODO: Improve if nesting logic */ }
          { list.map((item, key) => {
            if(priceFilter.length > 0 || openFilter) {
              if(openFilter) {
                if(openFilter && !item.is_closed) {
                  if(priceFilter.length > 0) {
                    if(priceFilter.includes(item.price)) {
                      return (<Item item={item} key={key} />)
                    } else {
                      return false
                    }
                  } else {
                    return (<Item item={item} key={key} />)
                  }
                }
              } else {
                if(priceFilter.includes(item.price))
                  return (<Item item={item} key={key} />)
                if(priceFilter.length === 0)
                  return (<Item item={item} key={key} />)
                return false
              }
            } else {
              return (<Item item={item} key={key} />)
            }
          })}
        </List>
      </Env>
    </Tag>
  )
}

export default Showcase