import React from 'react'

import Header from '../../app/components/Header'

import { Switch, Route } from 'react-router-dom'

import Home from '../../app/screens/Home'
import SignIn from '../../app/screens/SignIn'
import SignUp from '../../app/screens/SignUp'
import CreateRecipe from '../../app/screens/CreateRecipe'
import Recipe from '../../app/screens/Recipe'
import RecipesList from '../../app/screens/RecipesList'

export default function Routes () {
  return (
    <Switch>
      <Route path='/recipes/list'>
        <Header />
        <RecipesList />
      </Route>

      <Route path='/recipes/new'>
        <Header />
        <CreateRecipe />
      </Route>

      <Route path='/recipes/:recipeId/edit'>
        <Header />
        <CreateRecipe />
      </Route>

      <Route path='/recipes/:id'>
        <Header />
        <Recipe />
      </Route>

      <Route path='/login'>
        <SignIn />
      </Route>
      <Route path='/signup'>
        <SignUp />
      </Route>
      <Route path='/' exact>
        <Header />
        <Home />
      </Route>
    </Switch>
  )
}
