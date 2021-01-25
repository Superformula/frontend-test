import * as React from 'react'
import { Tag, Icon, Check } from './styles'
import { SelectItemProps } from '@utils/types'
import { RestaurantsContext } from '@providers/Restaurants'

const Item: React.FunctionComponent<SelectItemProps> = ({ parentID, alias, title, isActive: active, handleSelect }) => {
  const { priceFilter, categoriesFilter } = React.useContext(RestaurantsContext)
  const getList = (id) => {
    if(id === 'categories')
      return categoriesFilter
    if(id === 'price')
      return priceFilter
  }
  
  const filteredList = getList(parentID).filter((item) => item === alias)
  const initialActive = (active || filteredList.length > 0) ? true : false
  const [isActive, setIsActive] = React.useState<Boolean>(initialActive)

  
  const handleClick = () => {
    handleSelect(alias, !isActive)
  }

  React.useEffect(() => {
    if(parentID === 'categories') {
      setIsActive(categoriesFilter.includes(alias))
    }
    if(parentID === 'price') {
      setIsActive(priceFilter.includes(alias))
    }
  }, [priceFilter, categoriesFilter])

  return (
    <Tag onClick={handleClick} isActive={isActive} data-testid={`filter-${parentID}-item-${alias}`}>
      <Check>
        <Icon>
          <use xlinkHref="#selected" />
        </Icon>
      </Check>
      { title }
    </Tag>
  )
}

export default Item