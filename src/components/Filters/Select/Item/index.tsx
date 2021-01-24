import * as React from 'react'
import { Tag, Icon, Check } from './styles'
import { SelectItemProps } from '@utils/types'

const Item: React.FunctionComponent<SelectItemProps> = ({ alias, title, activesList, isActive: active, handleSelect }) => {
  const filteredList = activesList.filter((item) => item === alias)
  const initialActive = (active || filteredList.length > 0) ? true : false
  const [isActive, setIsActive] = React.useState<Boolean>(initialActive)
  
  const handleClick = () => {
    setIsActive(!isActive)
    handleSelect(alias, !isActive)
  } 

  return (
    <Tag onClick={handleClick} isActive={isActive}>
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