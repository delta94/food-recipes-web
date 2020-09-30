import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import RecipeItem from '../../../app/components/RecipeItem'

import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

const mockStore = configureStore([])

describe('[COMPONENTS] recipeItem', () => {
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
          <RecipeItem
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

  it('Should call function openRecipeViewModal on click modal', async () => {
    const { getByRole } = render(
      <BrowserRouter>
        <Provider store={store}>
          <RecipeItem
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

    expect(fireEvent.click(getByRole('img'))).toBeTruthy()
  })

  it('Should call function openRecipeEditModal on click button edit', async () => {
    const { getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <RecipeItem
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

    expect(fireEvent.click(getByText('Editar'))).toBeTruthy()
  })

  it('Should call function handleDelete on click button delete', async () => {
    const { getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <RecipeItem
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

    expect(fireEvent.click(getByText('Apagar')))
  })

  // it('Should call function closeRecipeViewModal  on click modal', async () => {
  //   const { getByRole, getByText } = render(
  //     <BrowserRouter>
  //       <Provider store={store}>
  //         <RecipeItem
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

  //   expect(fireEvent.click(document)).toBeTruthy()
  // })
})
