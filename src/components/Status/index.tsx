import * as React from 'react'
import { Tag } from './styles'
import { StatusProps } from '@utils/types'

const Status: React.FunctionComponent<StatusProps> = ({ active }) => {
  const list = [
    {
      id: "open",
      text: "Open Now"
    },
    {
      id: "closed",
      text: "Closed"
    }
  ]
  const { text } = list.filter((item) => item.id === active)[0]

  return (
    <Tag status={active} data-testid="status">
      { text }
    </Tag>
  )
}

export default Status