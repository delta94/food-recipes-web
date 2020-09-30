import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import * as redux from 'react-redux'

import Home from '../../../app/screens/Home'

import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

const mockStore = configureStore([])

describe('[SCREENS] home', () => {
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
          <Home />
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
            <Home />
          </Provider>
        </BrowserRouter>
      )
    ).toBeTruthy()
  })

  // it('Should rendered with correct data', () => {
  //   const spy = jest.spyOn(redux, 'useSelector')

  //   const state = {
  //     recipe: {
  //       payload: {
  //         data: {
  //           data: {
  //             id: 'any_i',
  //             name: 'any_name',
  //             image: 'any_image',
  //             mode_prepare: 'mode_prepare',
  //             ingredients: 'ingredients',
  //             time: 'time'
  //           }
  //         }
  //       }
  //     }
  //   }

  //   const recipeMock = spy.mockReturnValue(state?.recipe?.payload?.data?.data)

  //   expect(recipeMock).toBeTruthy()
  // })

  // it('Should rendered with correct data', () => {
  //   const spy = jest.spyOn(redux, 'useSelector')

  //   const recipe = spy.mockReturnValue({
  //     state: {
  //       recipe: {
  //         payload: {
  //           data: {
  //             data: {
  //               id: 'any_i',
  //               name: 'any_name',
  //               image: 'any_image',
  //               mode_prepare: 'mode_prepare',
  //               ingredients: 'ingredients',
  //               time: 'time'
  //             }
  //           }
  //         }
  //       }
  //     }
  //   })

  //   expect(recipe).toBeTruthy()
  // })
})
