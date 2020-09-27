import React from 'react'
import RecipeM from '../../components/RecipeM'
import Recipe from '../../components/Recipe'

import { Container, ContainerReceipesM } from './styles'

const Home = () => {
  return (
    <Container>
      <h1>Destaques</h1>
      <div>
        <Recipe />
        <Recipe />
      </div>
      <h1>Receitas</h1>
      <ContainerReceipesM>
        <RecipeM />
        <RecipeM />
        <RecipeM />
        <RecipeM />
        <RecipeM />
        <RecipeM />
        <RecipeM />
      </ContainerReceipesM>
    </Container>
  )
}

export default Home
