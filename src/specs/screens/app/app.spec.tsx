import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import App from '../../../app/screens/App'

import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

const mockStore = configureStore([])

describe('[SCREENS] App', () => {
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
          <App />
        </Provider>
      </BrowserRouter>
    )
    expect(container).toMatchSnapshot()
  })
})
