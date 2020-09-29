import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Creators } from '../../../core/redux/store/ducks/recipe'
import RecipeItem from '../../components/RecipeItem'

import { Container } from './styles'

interface IRecipe {
  id: string
  name: string
  image: string
  ingredients: string
  mode_prepare: string
  time: string
}

const RecipesList = () => {
  const recipes = useSelector((state: any): any => state?.recipe?.payload?.data?.data)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(Creators.getRecipesRequest())
  }, [dispatch])

  return (
    <Container>
      <h1>Todas as suas receitas</h1>
      <hr />

      {recipes?.map((recipe: IRecipe) => (
        <RecipeItem
          key={recipe.id}
          id={recipe.id}
          name={recipe.name}
          image={recipe.image}
          mode_prepare={recipe.mode_prepare}
          ingredients={recipe.ingredients}
          time={recipe.time}
        />
      ))}
    </Container>
  )
}

export default RecipesList
