import * as React from 'react'
import { RestaurantsContext } from '@providers/Restaurants'
import { Tag, Check } from './styles'
import { CheckboxItemProps } from '@utils/types'

const Item: React.FunctionComponent<CheckboxItemProps> = ({ id, text }) => {
  const [isActive, setIsActive] = React.useState<Boolean>(false)
  const { setFilter, openFilter } = React.useContext(RestaurantsContext)
  
  const handleClick = (value) => {
    setFilter(id, value)
  }

  React.useEffect(() => {
    setIsActive(openFilter)
  }, [openFilter])

  return (
    <Tag isActive={isActive} onClick={() => { handleClick(!isActive)}}>
      <Check />
      { text }
    </Tag>
  )
}

export default Item