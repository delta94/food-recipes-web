import React, { MouseEvent, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Creators } from '../../../core/redux/store/ducks/recipe'
import Modal from 'react-modal'
import Recipe from '../RecipeHome'
import { baseURLImages } from '../../../config/url'

import { Container } from './styles'
import UpRecipe from '../UpRecipe'

interface IRecipeItem {
  id: string
  name: string
  image: string
  ingredients: string
  mode_prepare: string
  time: string
}

const RecipeItem = ({
  id,
  name,
  image,
  ingredients,
  mode_prepare,
  time
}: IRecipeItem) => {
  const [modalRecipeViewIsOpen, setModalRecipeViewIsOpen] = React.useState(
    false
  )
  const [modalRecipeEditIsOpen, setModalRecipeEditIsOpen] = React.useState(
    false
  )

  const dispatch = useDispatch()

  function handleDelete (event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault()

    dispatch(Creators.deleteRecipeRequest(id))
  }

  useEffect(() => {
    Modal.setAppElement('body')
  }, [])

  function openRecipeViewModal () {
    setModalRecipeViewIsOpen(true)
  }

  function closeRecipeViewModal () {
    setModalRecipeViewIsOpen(false)
  }

  function openRecipeEditModal () {
    setModalRecipeEditIsOpen(true)
  }

  function closeRecipeEditModal () {
    setModalRecipeEditIsOpen(false)
  }

  const customStyles = {
    content: {
      marginLeft: 'auto',
      marginRight: 'auto',
      maxWidth: '1000px'
    }
  }

  return (
    <Container>
      <img
        onClick={openRecipeViewModal}
        src={`${baseURLImages}/${image}`}
        alt={name}
      />
      <Modal
        isOpen={modalRecipeViewIsOpen}
        onRequestClose={closeRecipeViewModal}
        style={customStyles}
      >
        <Recipe
          id={id}
          name={name}
          image={image}
          mode_prepare={mode_prepare}
          ingredients={ingredients}
          time={time}
        />
      </Modal>
      <h2 onClick={openRecipeViewModal}>{name}</h2>
      <button onClick={openRecipeEditModal} type='submit'>
        Editar
      </button>
      <Modal
        isOpen={modalRecipeEditIsOpen}
        onRequestClose={closeRecipeEditModal}
        style={customStyles}
      >
        <UpRecipe
          idFrom={id}
          nameFrom={name}
          imageFrom={image}
          mode_prepareFrom={mode_prepare}
          ingredientsFrom={ingredients}
          timeFrom={time}
        />
      </Modal>
      <Link to='/'>
        <button type='submit' onClick={handleDelete}>
          Apagar
        </button>
      </Link>
    </Container>
  )
}

export default RecipeItem
