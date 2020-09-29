import React from 'react'
import { fireEvent, getByText, render } from '@testing-library/react'
import { screen } from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect'

import CreateRecipe from '../../../app/screens/CreateRecipe'

import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

const mockStore = configureStore([])

declare var global: any

describe('[SCREENS] createRecipe', () => {
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
          <CreateRecipe />
        </Provider>
      </BrowserRouter>
    )
    expect(container).toMatchSnapshot()
  })

  it('Should return if onSubmit was called successfully', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <CreateRecipe />
        </Provider>
      </BrowserRouter>
    )

    expect(fireEvent.click(getByText('Cadatrar receita'))).toBeTruthy()
  })

  global.URL.createObjectURL = jest.fn()
  global.URL.revokeObjectURL = jest.fn()

  it('Should verify image is selected', () => {
    global.URL.createObjectURL = jest.fn(() => 'image/png')
    global.URL.revokeObjectURL = jest.fn(() => 'image/png')

    const { getByPlaceholderText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <CreateRecipe />
        </Provider>
      </BrowserRouter>
    )

    fireEvent.change(getByPlaceholderText('Insira sua imagem'), {
      target: {
        files: [new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' })]
      }
    })

    URL.createObjectURL = jest.fn(() => 'image/png')

    expect(getByPlaceholderText('Insira sua imagem')).toBeTruthy()
  })

  it('Should return non selected file', () => {
    global.URL.createObjectURL = jest.fn(() => 'image/png')
    global.URL.revokeObjectURL = jest.fn(() => null)

    const { getByPlaceholderText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <CreateRecipe />
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
          <CreateRecipe />
        </Provider>
      </BrowserRouter>
    )

    fireEvent.change(getByPlaceholderText('Insira sua imagem'), {
      target: {
        files: [new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' })]
      }
    })

    expect(fireEvent.click(getByText('Cadatrar receita'))).toBeTruthy()
  })
})
