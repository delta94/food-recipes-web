import React from 'react'
import { Container } from './styles'
import baseURL from '../../../config/url'

interface IRecipeItem {
  id: string
  name: string
  image: string
  ingredients: string
  mode_prepare: string
  time: string
}

const Recipe = ({
  id,
  name,
  image,
  ingredients,
  mode_prepare,
  time
}: IRecipeItem) => {
  return (
    <Container>
      <h1>Recipe</h1>
      <img src={`${baseURL}/files/${image}`} alt={name} />

      <h2>Ingredientes</h2>
      <p>{ingredients}</p>

      <h2>Modo de preparo</h2>
      <p>{mode_prepare}</p>

      <h2>Tempo</h2>
      <p>{time}</p>
    </Container>
  )
}

export default Recipe
