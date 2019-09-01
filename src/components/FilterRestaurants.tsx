import * as React from 'react'
import { Fragment } from 'react'

import Dropdown from './Dropdown'
import { Cost, Categories } from '../models/models'

export default function FilterRestaurants() {
  return (
    <Fragment>
      <Dropdown className="Price" ddList={Cost} ddHeader="Price"></Dropdown>
      <Dropdown className="Categories" ddList={Categories} ddHeader="Categories"></Dropdown>
    </Fragment>
  )
}
