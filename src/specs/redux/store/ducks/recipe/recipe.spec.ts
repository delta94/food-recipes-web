
import * as recipe from '../../../../../core/redux/store/ducks/recipe'

describe('[DUCKS] recipe', () => {
  const store = {}

  it('Should createRecipeRequest', () => {
    const createRecipeRequest = recipe.createRecipeRequest(store, { image: 'any_image', name: 'any_name', ingredients: 'any_ingredients', mode_prepare: 'any_mode_prepare', time: 'any_time' })

    expect(createRecipeRequest).toEqual({
      payload: {
        image: 'any_image',
        ingredients: 'any_ingredients',
        mode_prepare: 'any_mode_prepare',
        name: 'any_name',
        time: 'any_time'
      }
    })
  })

  it('Should updateRecipeRequest', () => {
    const updateRecipeRequest = recipe.updateRecipeRequest(store, { image: 'any_image', name: 'any_name', ingredients: 'any_ingredients', mode_prepare: 'any_mode_prepare', time: 'any_time' })

    expect(updateRecipeRequest).toEqual({
      payload: {
        image: 'any_image',
        ingredients: 'any_ingredients',
        mode_prepare: 'any_mode_prepare',
        name: 'any_name',
        time: 'any_time'
      }
    })
  })

  it('Should deleteRecipeRequest', () => {
    const deleteRecipeRequest = recipe.deleteRecipeRequest(store, { id: 'any_id' })

    expect(deleteRecipeRequest).toEqual({
      payload: {
        id: 'any_id'
      }
    })
  })

  it('Should getRecipesRequest', () => {
    const getRecipesRequest = recipe.getRecipesRequest(store, {})

    expect(getRecipesRequest).toEqual({
      payload: {}
    })
  })

  it('Should getRecipesSuccess', () => {
    const getRecipesSuccess = recipe.getRecipesSuccess(store, { image: 'any_image', name: 'any_name', ingredients: 'any_ingredients', mode_prepare: 'any_mode_prepare', time: 'any_time' })

    expect(getRecipesSuccess).toEqual({
      payload: {
        image: 'any_image',
        ingredients: 'any_ingredients',
        mode_prepare: 'any_mode_prepare',
        name: 'any_name',
        time: 'any_time'
      }
    })
  })

  it('Should getRecipeRequest', () => {
    const getRecipeRequest = recipe.getRecipeRequest(store, { image: 'any_image', name: 'any_name', ingredients: 'any_ingredients', mode_prepare: 'any_mode_prepare', time: 'any_time' })

    expect(getRecipeRequest).toEqual({
      loading: true,
      payload: {
        image: 'any_image',
        ingredients: 'any_ingredients',
        mode_prepare: 'any_mode_prepare',
        name: 'any_name',
        time: 'any_time'
      }
    })
  })

  it('Should getRecipeSuccess', () => {
    const getRecipeSuccess = recipe.getRecipeSuccess(store, { data: 'any_data' })

    expect(getRecipeSuccess).toEqual('any_data')
  })
})
