import React from 'react'

import { Switch, Route } from 'react-router-dom'

import Home from '../../app/screens/Home'

export default function Routes () {
  return (
    <Switch>
      <Route path='/login'>
        <h1>Login</h1>
      </Route>
      <Route path='/signup'>
        <h1>SignUp</h1>
      </Route>
      <Route path='/'>
        <Home />
      </Route>
    </Switch>
  )
}
