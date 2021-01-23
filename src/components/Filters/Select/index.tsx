import * as React from 'react'
import Item from './Item'
import { Tag, Arrow, Title, List } from './styles'

type SelectList = {
  id: String
  text: String,
  isActive?: Boolean
}

interface SelectProps {
  readonly id: String,
  readonly text: String,
  readonly list: Array<SelectList>,
  readonly minWidth?: number
}

const Select: React.FunctionComponent<SelectProps> = ({ id, text, list, minWidth }) => {
  const [activesList, setActivesList] = React.useState<Array<String>>([])
  const [isOpen, setIsOpen] = React.useState<Boolean>(false);

  const checkIsActive = (id: String): Boolean => {
    const item = activesList.filter((item) => item === id)
    return (item.length > 0) ? true : false
  }

  const handleSelect = (id: String, isActive: boolean) => {
    if(isActive) {
      setActivesList([... activesList, id])
    } else {
      const filteredList = list.filter(({ id }) => id !== id)
      const newActivesList = filteredList.map(({ id }) => id)
      setActivesList(newActivesList)
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
        { list.map(({id: itemID, text, isActive}, key) => (
          <Item key={key} id={itemID} text={text} activesList={activesList} isActive={isActive} handleSelect={handleSelect}>
            { text }
          </Item>
        ))}
      </List>
    </Tag>
  )
}

export default Select