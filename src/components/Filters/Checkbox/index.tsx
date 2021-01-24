import * as React from 'react'
import { Tag, Check } from './styles'
import { CheckboxItemProps } from '@utils/types'

const Item: React.FunctionComponent<CheckboxItemProps> = ({ id, text }) => {
  const [isActive, setIsActive] = React.useState<Boolean>(false)
  
  return (
    <Tag isActive={isActive} onClick={() => { setIsActive(!isActive)}}>
      <Check />
      { text }
    </Tag>
  )
}

export default Item