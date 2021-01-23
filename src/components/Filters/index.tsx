import * as React from 'react'
import Checkbox from './Checkbox'
import Select from './Select'
import Clear from './Clear'
import { Tag, Env, List, Title } from './styles'

type FilterType = {
  id: String
  text: String
}

type FiltersList = {
  id: String
  text: String
  values: Array<FilterType>,
  minWidth?: number
}

interface FiltersProps {
  list: Array<FiltersList>
}

const Filters: React.FunctionComponent<FiltersProps> = ({ list }) => {

  return (
    <Tag>
      <Env>
        <List>
          <Title>
            Filter By:
          </Title>
          <Checkbox 
            id="open"
            text="Open Now"
          />
          { list.map(({ id, text, values, minWidth }, key) => (
            <Select 
              key={key}
              id={id}
              text={text}
              list={values}
              minWidth={minWidth}
            />
          )) }
        </List>
        <Clear>
          Clear All
        </Clear>
      </Env>
    </Tag>
  )
}

export default Filters