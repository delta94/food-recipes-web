import React from 'react'
import { fireEvent, render, waitFor, waitForElement } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Header from '../../../app/components/Header'

import * as redux from 'react-redux'

import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

const mockStore = configureStore([])

describe('[COMPONENTS] Header', () => {
  let store: any

  beforeEach(() => {
    store = mockStore({
      auth: {}
    })
  })

  it('Should render correctly', () => {
    const spy = jest.spyOn(redux, 'useSelector')
    spy.mockReturnValue({
      auth: {}
    })

    const container = render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>
    )
    expect(container).toMatchSnapshot()
  })

  it('Should name exists on sign', () => {
    const spy = jest.spyOn(redux, 'useSelector')
    spy.mockReturnValue({
      auth: {
        signed: true,
        action: {
          name: 'any_name'
        }
      }
    })

    const { getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>
    )

    expect(getByText('Olá, any_name')).toBeInTheDocument()
  })

  it('Should is call function on click logout', async () => {
    const spy = jest.spyOn(redux, 'useSelector')
    spy.mockReturnValue({
      auth: {
        signed: true,
        action: {
          name: 'any_name'
        }
      }
    })

    const { getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>
    )

    fireEvent.click(getByText(/Logout/))

    expect(getByText('Olá, any_name')).toBeInTheDocument()
  })

  // it('Should is call function on click button menu', async () => {
  //   const spy = jest.spyOn(redux, 'useSelector')
  //   spy.mockReturnValue({
  //     auth: {
  //       signed: true,
  //       action: {
  //         name: 'any_name'
  //       }
  //     }
  //   })

  //   window = Object.assign(window, { innerWidth: 105 })

  //   const handleVisible = jest.fn()

  //   const { getByRole } = render(
  //     <BrowserRouter>
  //       <Provider store={store}>
  //         <Header />
  //       </Provider>
  //     </BrowserRouter>
  //   )

  //   const button = fireEvent.click(getByRole('button'))

  //   expect(handleVisible).toHaveBeenCalledTimes(1)
  // })
})
