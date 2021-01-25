import * as React from 'react'
import Checkbox from './Checkbox'
import Select from './Select'
import Clear from './Clear'
import { Tag, Env, List, Title } from './styles'
import { FiltersProps } from '@utils/types'

const Filters: React.FunctionComponent<FiltersProps> = ({ list }) => {

  return (
    <Tag data-testid="filters">
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