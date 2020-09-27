import React from 'react'
import { Link } from 'react-router-dom'

import { RecipeContainer, RecipeLeft, RecipeRight, RecipeTime } from './styles'

const RecipeM = () => {
  return (
    <RecipeContainer>
      <RecipeLeft>
        <Link to="/recipes/recipe">
          <img
            src='https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1231&q=80'
            alt='Food'
          />
        </Link>
      </RecipeLeft>
      <RecipeRight>
        <h2>Receita da vovó</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
        <RecipeTime>
          <span>Tempo de preparo:</span>
          <p>1h</p>
        </RecipeTime>
      </RecipeRight>
    </RecipeContainer>
  )
}

export default RecipeM
