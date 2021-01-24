import * as React from 'react'
import Item from './Item'
import { Tag, Arrow, Title, List } from './styles'
import { SelectProps } from '@utils/types'

const Select: React.FunctionComponent<SelectProps> = ({ id, text, list, minWidth }) => {
  const [activesList, setActivesList] = React.useState<Array<String>>([])
  const [isOpen, setIsOpen] = React.useState<Boolean>(false);

  const handleSelect = (alias: String, isActive: boolean) => {
    if(isActive) {
      setActivesList([... activesList, alias])
    } else {
      const filteredList = list.filter(({ alias }) => alias !== alias)
      const newActivesList = filteredList.map(({ alias }) => alias)
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
        { list.map(({alias: itemID, title, isActive}, key) => (
          <Item key={key} alias={itemID} title={title} activesList={activesList} isActive={isActive} handleSelect={handleSelect}>
            { text }
          </Item>
        ))}
      </List>
    </Tag>
  )
}

export default Select