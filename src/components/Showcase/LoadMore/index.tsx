import * as React from 'react'
import { LoadMoreProps } from '@utils/types'
import { Tag } from './styles'

const LoadMore: React.FunctionComponent<LoadMoreProps> = ({ onClick }) => (
  <Tag onClick={onClick}>
    Load More
  </Tag>
)

export default LoadMore