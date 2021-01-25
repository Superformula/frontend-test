import * as React from 'react'
import { RestaurantsContext } from '@providers/Restaurants'
import { Tag } from './styles'
import { defaultFilterList } from '@utils/filters'

const Clear: React.FunctionComponent = ({ children }) => {
  const { categoriesFilter, priceFilter, openFilter, setFilter } = React.useContext(RestaurantsContext)
  const [ isActive, setIsActive ] = React.useState<boolean>(false)

  React.useEffect(() => {
    setIsActive((categoriesFilter.length > 0 || priceFilter.length > 0 || openFilter) ? true : false)
  }, [categoriesFilter, priceFilter, openFilter])

  const handleClick = () => {
    defaultFilterList.map(({id, value}) => {
      setFilter(id, value)
    })
  }

  return (
    <Tag isActive={isActive} onClick={handleClick}>
      { children }
    </Tag>
  )
}

export default Clear