import * as React from 'react'
import { Tag } from './styles'

const Clear: React.FunctionComponent = ({ children }) => {
  return (
    <Tag isActive={true}>
      { children }
    </Tag>
  )
}

export default Clear