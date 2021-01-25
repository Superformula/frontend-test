import * as React from 'react'
import { RestaurantsContext } from '@providers/Restaurants'
import Item from './Item'
import { Tag, Arrow, Title, List } from './styles'
import { SelectProps } from '@utils/types'

const Select: React.FunctionComponent<SelectProps> = ({ id, text, list, minWidth }) => {
  const [isOpen, setIsOpen] = React.useState<Boolean>(false);
  const { setFilter, categoriesFilter, priceFilter } = React.useContext(RestaurantsContext)

  const getList = (id) => {
    if(id === 'categories')
      return categoriesFilter
    if(id === 'price')
      return priceFilter
  }

  const handleSelect = (alias: String, isActive: boolean) => {
    if(isActive) {
      setFilter(id, [... getList(id), alias])
    } else {
      const newActivesList = getList(id).filter((item) => (item !== alias))
      setFilter(id, newActivesList || [])
    }
  }

  return (
    <Tag minWidth={minWidth} isOpen={isOpen} onClick={() => { setIsOpen(!isOpen)}}>
      <Arrow>
        <use xlinkHref="#arrow" />
      </Arrow>
      <Title>
        { text }
      </Title>
      <List>
        { list.map(({alias: itemID, title, isActive}, key) => (
          <Item parentID={id} key={key} alias={itemID} title={title} isActive={isActive} handleSelect={handleSelect}>
            { text }
          </Item>
        ))}
      </List>
    </Tag>
  )
}

export default Select