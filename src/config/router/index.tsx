import React from 'react'

import Header from '../../app/components/Header'

import { Switch, Route } from 'react-router-dom'

import Home from '../../app/screens/Home'
import SignIn from '../../app/screens/SignIn'

export default function Routes () {
  return (
    <Switch>
      <Route path='/login'>
        <SignIn />
      </Route>
      <Route path='/signup'>
        <h1>SignUp</h1>
      </Route>
      <Route path='/'>
        <Header />
        <Home />
      </Route>
    </Switch>
  )
}
