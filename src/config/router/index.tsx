import React from 'react'

import Header from '../../app/components/Header'

import { Switch, Route } from 'react-router-dom'

import Home from '../../app/screens/Home'
import SignIn from '../../app/screens/SignIn'
import SignUp from '../../app/screens/SignUp'

export default function Routes () {
  return (
    <Switch>
      <Route path='/login'>
        <SignIn />
      </Route>
      <Route path='/signup'>
        <SignUp />
      </Route>
      <Route path='/'>
        <Header />
        <Home />
      </Route>
    </Switch>
  )
}
