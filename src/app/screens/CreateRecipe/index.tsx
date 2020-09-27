import React, { useState, useEffect, ChangeEvent } from 'react'
import BackupIcon from '@material-ui/icons/Backup'

import { Container, ContainerRecipe, BoxInput, BoxImage } from './styles'

const CreateRecipe = () => {
  const [selectedFile, setSelectedFile] = useState<File>()
  const [preview, setPreview] = useState<string>()

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

  return (
    <Container>
      <h1>Crie sua receita</h1>

      <ContainerRecipe>
        <div>
          <BoxImage preview={preview}>
            <label>
              <input
                type='file'
                name='image'
                onChange={handleSelectFile}
              />
              <BackupIcon fontSize='large' />
            </label>
          </BoxImage>

          <BoxInput>
            <label htmlFor='name'>Nome da receita:</label>
            <input name='name' placeholder='Insira o nome da sua receita' />
          </BoxInput>

          <BoxInput>
            <label htmlFor='ingredients'>Ingredientes:</label>
            <textarea name='ingredients' placeholder='Insira os ingredientes' />
          </BoxInput>

          <BoxInput>
            <label htmlFor='mode_prepare'>Modo de preparo:</label>
            <textarea
              name='mode_prepare'
              placeholder='Insira o modo de preparo'
            />
          </BoxInput>

          <BoxInput>
            <label htmlFor='ingredients'>Tempo:</label>
            <input name='time' placeholder='Insira o tempo estimado' />
          </BoxInput>

          <button type="submit">Cadatrar receita</button>
        </div>
      </ContainerRecipe>
    </Container>
  )
}

export default CreateRecipe
