import * as React from 'react'
import { Tag } from './styles'

type StatusList = {
  id: String,
  text: String
}

interface StatusProps {
  readonly list: Array<StatusList>,
  readonly active: String
}

const Status: React.FunctionComponent<StatusProps> = ({ list, active }) => {
  const { text } = list.filter((item) => item.id === active)[0]

  return (
    <Tag status={active}>
      { text }
    </Tag>
  )
}

export default Status