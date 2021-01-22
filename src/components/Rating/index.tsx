import * as React from 'react'
import { Tag } from './styles'
import Star from './Star'

const Rating = (props: { value: number }) => {
  const { value } = props

  return (
    <Tag data-value={value}>
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
    </Tag>
  )
}

export default Rating