import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import * as redux from 'react-redux'

import RecipesList from '../../../app/screens/RecipesList'

import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

const mockStore = configureStore([])

describe('[SCREENS] recipeList', () => {
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
          <RecipesList />
        </Provider>
      </BrowserRouter>
    )
    expect(container).toMatchSnapshot()
  })

  it('Should rendered with correct data', () => {
    const spy = jest.spyOn(redux, 'useSelector')

    spy.mockReturnValue([
      {
        id: 'any_i',
        name: 'any_name',
        image: 'any_image',
        mode_prepare: 'mode_prepare',
        ingredients: 'ingredients',
        time: 'time'
      }
    ])

    expect(
      render(
        <BrowserRouter>
          <Provider store={store}>
            <RecipesList />
          </Provider>
        </BrowserRouter>
      )
    ).toBeTruthy()
  })
})
