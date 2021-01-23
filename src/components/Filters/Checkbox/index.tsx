import * as React from 'react'
import { Tag, Check } from './styles'

interface ItemProps {
  id: String
  text: String
}

const Item: React.FunctionComponent<ItemProps> = ({ id, text }) => {
  const [isActive, setIsActive] = React.useState<Boolean>(false)
  
  return (
    <Tag isActive={isActive} onClick={() => { setIsActive(!isActive)}}>
      <Check />
      { text }
    </Tag>
  )
}

export default Item