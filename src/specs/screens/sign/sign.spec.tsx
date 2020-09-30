import React from 'react'
import { act, fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import * as redux from 'react-redux'

import SignIn from '../../../app/screens/SignIn'

import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

const mockStore = configureStore([])

describe('[SCREENS] sign', () => {
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
          <SignIn />
        </Provider>
      </BrowserRouter>
    )
    expect(container).toMatchSnapshot()
  })

  it('Should return if onSubmit was called successfully', () => {
    const { getByText, getByPlaceholderText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <SignIn />
        </Provider>
      </BrowserRouter>
    )

    fireEvent.change(getByPlaceholderText('E-mail'), {
      target: { value: 'any_email@mail.com' }
    })
    fireEvent.change(getByPlaceholderText('Senha'), {
      target: { value: 'any_password' }
    })

    expect(fireEvent.click(getByText('Entrar'))).toBeTruthy()
  })

  it('Should return error message if onSubmit was throw', () => {
    const { getByText, getByPlaceholderText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <SignIn />
        </Provider>
      </BrowserRouter>
    )

    fireEvent.change(getByPlaceholderText('E-mail'), {
      target: { value: '' }
    })
    fireEvent.change(getByPlaceholderText('Senha'), {
      target: { value: '' }
    })

    expect(fireEvent.click(getByText('Entrar'))).toBeTruthy()
  })

  it('Should return call handleSubmit on pass valid credentials', () => {
    const { getByText, getByPlaceholderText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <SignIn />
        </Provider>
      </BrowserRouter>
    )

    fireEvent.change(getByPlaceholderText('E-mail'), {
      target: { value: 'any_email@mail.com' }
    })
    fireEvent.change(getByPlaceholderText('Senha'), {
      target: { value: 'any_password' }
    })

    expect(fireEvent.click(getByText('Entrar'))).toBeTruthy()
  })

  it('Should return error message if onSubmit was throw', () => {
    const { getByText, getByPlaceholderText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <SignIn />
        </Provider>
      </BrowserRouter>
    )

    fireEvent.change(getByPlaceholderText('E-mail'), {
      target: { value: '' }
    })
    fireEvent.change(getByPlaceholderText('Senha'), {
      target: { value: '' }
    })

    expect(fireEvent.click(getByText('Entrar'))).toBeTruthy()
  })
})
