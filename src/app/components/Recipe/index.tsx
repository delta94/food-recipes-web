import React, { useEffect } from 'react'
import Modal from 'react-modal'
import Recipe from '../RecipeHome'

import { RecipeContainer, RecipeLeft, RecipeRight, RecipeTime } from './styles'

interface IRecipe {
  id: string
  name: string
  image: string
  ingredients: string
  mode_prepare: string
  time: string
}

const customStyles = {
  content: {
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '1000px'
  }
}

const RecipeM = ({
  id,
  name,
  image,
  ingredients,
  mode_prepare,
  time
}: IRecipe) => {
  const [modalIsOpen, setIsOpen] = React.useState(false)

  useEffect(() => {
    Modal.setAppElement('body')
  }, [])

  function openModal () {
    setIsOpen(true)
  }

  function closeModal () {
    setIsOpen(false)
  }

  return (
    <RecipeContainer>
      <RecipeLeft>
        <img
          onClick={openModal}
          src={`http://localhost:3333/files/${image}`}
          alt={name}
        />
      </RecipeLeft>
      <RecipeRight>
        <h2 onClick={openModal}>{name}</h2>
        <p>{mode_prepare}</p>
        <RecipeTime>
          <span>Tempo de preparo:</span>
          <p>{time}</p>
        </RecipeTime>
      </RecipeRight>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
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
    </RecipeContainer>
  )
}

export default RecipeM
