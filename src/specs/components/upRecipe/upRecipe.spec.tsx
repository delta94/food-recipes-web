import React from 'react'
import { fireEvent, getByText, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import UpRecipe from '../../../app/components/UpRecipe'

import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

const mockStore = configureStore([])

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

  // it('Should return field value', () => {
  //   const { getByPlaceholderText, container, getByLabelText } = render(
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

  //   // fireEvent.change(getByPlaceholderText('Insira o nome da sua receita'), {
  //   //   target: { value: 'any_name' }
  //   // })

  //   // expect(getByPlaceholderText('Insira o nome da sua receita')).toHaveValue('any_name')

  //   fireEvent.change(getByLabelText(''), {
  //     target: {
  //       files: [new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' })]
  //     }
  //   })

  //   // container.findByLabelText('input').simulate('change', { target: { value: 'matched' } })
  // })
})
