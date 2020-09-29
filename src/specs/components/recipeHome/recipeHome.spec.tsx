import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import RecipeHome from '../../../app/components/RecipeHome'

import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

const mockStore = configureStore([])

describe('[COMPONENTS] recipeHome', () => {
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
          <RecipeHome
            id='any_id'
            name='any_name'
            image='any_image'
            ingredients='any_ingredients'
            mode_prepare='any_mode_prepare'
            time='any_time'
          />
        </Provider>
      </BrowserRouter>
    )
    expect(container).toMatchSnapshot()
  })

  // it('Should call function closeModal on click modal', async () => {
  //   const { getByRole } = render(
  //     <BrowserRouter>
  //       <Provider store={store}>
  //         <Recipe
  //           id='any_id'
  //           name='any_name'
  //           image='any_image'
  //           ingredients='any_ingredients'
  //           mode_prepare='any_mode_prepare'
  //           time='any_time'
  //         />
  //       </Provider>
  //     </BrowserRouter>
  //   )

  //   fireEvent.click(getByRole('img'))
  //   expect(fireEvent.click(document.body)).toBeTruthy()
  // })
})
