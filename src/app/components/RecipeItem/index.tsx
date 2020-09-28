import React, { MouseEvent, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Creators } from '../../../core/redux/store/ducks/recipe'

import { Container } from './styles'

interface IRecipeItem {
  id: string
  name: string
  image: string
  ingredients: string
  time: string
}

const RecipeItem = ({ id, name, image, ingredients, time }: IRecipeItem) => {
  // const recipe = useSelector((state: any): any => state?.recipe?.payload?.data?.data)

  const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(Creators.getRecipesRequest())
  // }, [dispatch])

  function handleDelete (event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault()

    dispatch(Creators.deleteRecipeRequest(id))
  }

  return (
    <Container>
      <Link to={`/recipes/${id}/edit`}>
        <img
          src={image}
          alt={name}
        />
      </Link>
      <h2>{name}</h2>
      <Link to='/'>
        <button type='submit'>Editar</button>
      </Link>
      <Link to='/'>
        <button type="submit" onClick={handleDelete}>Apagar</button>
      </Link>
    </Container>
  )
}

export default RecipeItem
