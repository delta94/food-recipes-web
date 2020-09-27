import React from 'react'

import {
  RecipeContainer
} from './styles'

const Recipe = () => {
  return (
    <RecipeContainer>
      <img
        src='https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1231&q=80'
        alt='Food'
      />
      <h2>Receita da vovó</h2>
    </RecipeContainer>
  )
}

export default Recipe
