import * as React from 'react'
import { Tag, Icon, Check } from './styles'

interface ItemProps {
  id: String
  text: String
  activesList: Array<String>,
  isActive?: Boolean,
  handleSelect: (id: String, isActive: Boolean) => void
}

const Item: React.FunctionComponent<ItemProps> = ({ id, text, activesList, isActive: active, handleSelect }) => {
  const filteredList = activesList.filter((item) => item === id)
  const initialActive = (active || filteredList.length > 0) ? true : false
  const [isActive, setIsActive] = React.useState<Boolean>(initialActive)
  
  const handleClick = () => {
    setIsActive(!isActive)
    handleSelect(id, !isActive)
  } 

  return (
    <Tag onClick={handleClick} isActive={isActive}>
      <Check>
        <Icon>
          <use xlinkHref="#selected" />
        </Icon>
      </Check>
      { text }
    </Tag>
  )
}

export default Item