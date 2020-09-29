import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Header from '../../../app/components/Header'

import * as redux from 'react-redux'

import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { BrowserRouter, Router } from 'react-router-dom'

const mockStore = configureStore([])

describe('[COMPONENTS] Header', () => {
  let store: any

  beforeEach(() => {
    store = mockStore({
      auth: true
    })
  })

  it('Should render correctly', () => {
    const spy = jest.spyOn(redux, 'useSelector')
    spy.mockReturnValue({ auth: true })

    const container = render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>
    )
    expect(container).toMatchSnapshot()
  })
})
