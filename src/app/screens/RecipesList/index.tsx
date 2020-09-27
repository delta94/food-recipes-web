import React from 'react'
import RecipeItem from '../../components/RecipeItem'

import { Container } from './styles'

const RecipesList = () => {
  return (
    <Container>
      <h1>Todas as suas receitas</h1>
      <hr />

      <RecipeItem />
      <RecipeItem />
      <RecipeItem />
      <RecipeItem />
    </Container>
  )
}

export default RecipesList
