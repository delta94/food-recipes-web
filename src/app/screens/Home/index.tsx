import React, { useEffect } from 'react'
import Recipe from '../../components/Recipe'

import { useSelector, useDispatch } from 'react-redux'

import { Creators } from '../../../core/redux/store/ducks/recipe'

import { Container } from './styles'

interface IRecipe {
  id: string
  name: string
  image: string
  ingredients: string
  mode_prepare: string
  time: string
}

const Home = () => {
  const recipes = useSelector((state: any): any => state?.recipe?.payload?.data?.data)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(Creators.getRecipesRequest())
  }, [dispatch])

  return (
    <Container>
      <h1>Destaques</h1>
      <div>

        {recipes?.map((recipe: IRecipe) => (
          <Recipe
            key={recipe.id}
            id={recipe.id}
            name={recipe.name}
            image={recipe.image}
            mode_prepare={recipe.mode_prepare}
            ingredients={recipe.ingredients}
            time={recipe.time}
          />
        ))}
      </div>
    </Container>
  )
}

export default Home
