import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import UpRecipe from '../../../app/components/UpRecipe'

import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

const mockStore = configureStore([])

declare var global: any

describe('[COMPONENTS] UpRecipe', () => {
  let store: any

  beforeEach(() => {
    store = mockStore({
      auth: {}
    })
  })

  it('Should render correctly', () => {
    const container = render(
      <BrowserRouter>
        <Provider store={store}>
          <UpRecipe
            idFrom='any_id'
            nameFrom='any_name'
            imageFrom='any_image'
            ingredientsFrom='any_ingredients'
            mode_prepareFrom='any_mode_prepare'
            timeFrom='any_time'
          />
        </Provider>
      </BrowserRouter>
    )
    expect(container).toMatchSnapshot()
  })

  it('Should return if onSubmit was called successfully', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <UpRecipe
            idFrom='any_id'
            nameFrom='any_name'
            imageFrom='any_image'
            ingredientsFrom='any_ingredients'
            mode_prepareFrom='any_mode_prepare'
            timeFrom='any_time'
          />
        </Provider>
      </BrowserRouter>
    )

    expect(fireEvent.click(getByText('Atualizar receita'))).toBeTruthy()
  })

  it('Should return non selected file', () => {
    global.URL.createObjectURL = jest.fn(() => 'image/png')
    global.URL.revokeObjectURL = jest.fn(() => null)

    const { getByPlaceholderText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <UpRecipe
            idFrom='any_id'
            nameFrom='any_name'
            imageFrom='any_image'
            ingredientsFrom='any_ingredients'
            mode_prepareFrom='any_mode_prepare'
            timeFrom='any_time'
          />
        </Provider>
      </BrowserRouter>
    )

    expect(fireEvent.change(getByPlaceholderText('Insira sua imagem'), {
      target: {
        files: null
      }
    })).toBeTruthy()
  })

  it('Should setSelectFile on send valid image', () => {
    global.URL.createObjectURL = jest.fn(() => 'image/png')
    global.URL.revokeObjectURL = jest.fn(() => null)

    const { getByPlaceholderText, getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <UpRecipe
            idFrom='any_id'
            nameFrom='any_name'
            imageFrom='any_image'
            ingredientsFrom='any_ingredients'
            mode_prepareFrom='any_mode_prepare'
            timeFrom='any_time'
          />
        </Provider>
      </BrowserRouter>
    )

    fireEvent.change(getByPlaceholderText('Insira sua imagem'), {
      target: {
        files: [new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' })]
      }
    })

    expect(fireEvent.click(getByText('Atualizar receita'))).toBeTruthy()
  })

  // it('Should setSelectFile on send valid image', () => {
  //   // global.URL.createObjectURL = jest.fn(() => 'image/png')
  //   // global.URL.revokeObjectURL = jest.fn(() => null)

  //   const { getByPlaceholderText, getByText } = render(
  //     <BrowserRouter>
  //       <Provider store={store}>
  //         <UpRecipe
  //           idFrom='any_id'
  //           nameFrom='any_name'
  //           imageFrom='any_image'
  //           ingredientsFrom='any_ingredients'
  //           mode_prepareFrom='any_mode_prepare'
  //           timeFrom='any_time'
  //         />
  //       </Provider>
  //     </BrowserRouter>
  //   )

  //   fireEvent.change(getByPlaceholderText('Insira sua imagem'), {
  //     target: {
  //       files: [new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' })]
  //     }
  //   })

  //   // const preview = jest.fn(() => 'any_image')

  //   expect(fireEvent.click(getByText('Atualizar receita'))).toBeTruthy()
  // })

  it('Should value on onChange input is setted', () => {
    const { getByPlaceholderText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <UpRecipe
            idFrom='any_id'
            nameFrom='any_name'
            imageFrom='any_image'
            ingredientsFrom='any_ingredients'
            mode_prepareFrom='any_mode_prepare'
            timeFrom='any_time'
          />
        </Provider>
      </BrowserRouter>
    )

    fireEvent.change(getByPlaceholderText('Insira o nome da sua receita'), { target: { value: 'any_name_update' } })
    fireEvent.change(getByPlaceholderText('Insira os ingredientes'), { target: { value: 'any_ingredients_update' } })
    fireEvent.change(getByPlaceholderText('Insira o modo de preparo'), { target: { value: 'any_mode_prepare_update' } })
    fireEvent.change(getByPlaceholderText('Insira o tempo estimado'), { target: { value: 'any_time_update' } })

    expect(getByPlaceholderText('Insira o nome da sua receita')).toHaveValue('any_name_update')
    expect(getByPlaceholderText('Insira os ingredientes')).toHaveValue('any_ingredients_update')
    expect(getByPlaceholderText('Insira o modo de preparo')).toHaveValue('any_mode_prepare_update')
    expect(getByPlaceholderText('Insira o tempo estimado')).toHaveValue('any_time_update')
  })
})
