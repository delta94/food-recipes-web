import React from 'react'
import { Link } from 'react-router-dom'

import { Container } from './styles'

const RecipeItem = () => {
  return (
    <Container>
      <img
        src='https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1231&q=80'
        alt=''
      />
      <h2>Recipe</h2>
      <Link to='/'>
        <button type='submit'>Editar</button>
      </Link>
      <Link to='/'>
        <button type='submit'>Apagar</button>
      </Link>
    </Container>
  )
}

export default RecipeItem
