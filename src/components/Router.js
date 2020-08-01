import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Detail from './Detail'
import List from './List'
import HttpError from './shared/HttpError'

export default function Router () {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/restaurant/:id' component={Detail} />
        <Route exact path='/' component={List} />
        <Route path='*' component={HttpError} />
      </Switch>
    </BrowserRouter>
  )
}
