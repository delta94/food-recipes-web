import React, { useState, useEffect, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import { Creators } from '../../../core/redux/store/ducks/recipe'
import BackupIcon from '@material-ui/icons/Backup'

import { Container, ContainerRecipe, BoxInput, BoxImage } from './styles'

const CreateRecipe = () => {
  const [selectedFile, setSelectedFile] = useState<File>()
  const [preview, setPreview] = useState<string>()

  const dispatch = useDispatch()

  const [name, setName] = useState('')
  const [ingredients, setIngredients] = useState('')
  const [mode_prepare, setMode_prepare] = useState('')
  const [time, setTime] = useState('')

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined)
      return
    }

    const objectUrl = URL.createObjectURL(selectedFile)
    setPreview(objectUrl)

    return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile])

  const handleSelectFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined)
      return
    }
    setSelectedFile(e.target.files[0])
  }

  function handleSubmit (event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault()

    if (selectedFile) {
      dispatch(Creators.createRecipeRequest(selectedFile, name, ingredients, mode_prepare, time))
    }
  }

  return (
    <Container>
      <h1>Crie sua receita</h1>

      <ContainerRecipe>
        <form onSubmit={handleSubmit}>
          <div>
            <BoxImage preview={preview}>
              <label>
                <input type='file' name='image' onChange={handleSelectFile} placeholder="Insira sua imagem" />
                <BackupIcon fontSize='large' />
              </label>
            </BoxImage>

            <BoxInput>
              <label htmlFor='name'>Nome da receita:</label>
              <input
                name='name'
                placeholder='Insira o nome da sua receita'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </BoxInput>

            <BoxInput>
              <label htmlFor='ingredients'>Ingredientes:</label>
              <textarea
                name='ingredients'
                placeholder='Insira os ingredientes'
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
              />
            </BoxInput>

            <BoxInput>
              <label htmlFor='mode_prepare'>Modo de preparo:</label>
              <textarea
                name='mode_prepare'
                placeholder='Insira o modo de preparo'
                value={mode_prepare}
                onChange={(e) => setMode_prepare(e.target.value)}
              />
            </BoxInput>

            <BoxInput>
              <label htmlFor='time'>Tempo:</label>
              <input
                name='time'
                placeholder='Insira o tempo estimado'
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </BoxInput>

            <button type='submit'>Cadatrar receita</button>
          </div>
        </form>
      </ContainerRecipe>
    </Container>
  )
}

export default CreateRecipe
