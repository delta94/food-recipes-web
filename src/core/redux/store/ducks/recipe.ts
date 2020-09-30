import { createActions, createReducer } from 'reduxsauce'

export const { Types, Creators } = createActions({
  createRecipeRequest: ['image', 'name', 'ingredients', 'mode_prepare', 'time'],
  updateRecipeRequest: ['id', 'image', 'name', 'ingredients', 'mode_prepare', 'time'],
  deleteRecipeRequest: ['id'],
  getRecipesRequest: [''],
  getRecipesSuccess: ['data'],
  getRecipeRequest: ['id'],
  getRecipeSuccess: ['data']

})

const initialState = {}

interface IAction {
  [key: string]: string;
}

export const createRecipeRequest = (state = initialState, action: IAction) => {
  return ({ payload: action })
}

export const updateRecipeRequest = (state = initialState, action: IAction) => {
  return ({ payload: action })
}

export const deleteRecipeRequest = (state = initialState, action: any) => {
  return ({ payload: action })
}

export const getRecipesRequest = (state = initialState, action: IAction) => {
  return ({ payload: action })
}

export const getRecipesSuccess = (state = initialState, action: IAction) => {
  return ({ payload: action })
}

export const getRecipeRequest = (state = initialState, action: IAction) => {
  return ({ payload: action, loading: true })
}

export const getRecipeSuccess = (state = initialState, action: IAction) => {
  return action.data
}

export default createReducer(initialState, {
  [Types.CREATE_RECIPE_REQUEST]: createRecipeRequest,
  [Types.UPDATE_RECIPE_REQUEST]: updateRecipeRequest,
  [Types.DELETE_RECIPE_REQUEST]: deleteRecipeRequest,
  [Types.GET_RECIPES_REQUEST]: getRecipesRequest,
  [Types.GET_RECIPES_SUCCESS]: getRecipesSuccess,
  [Types.GET_RECIPE_REQUEST]: getRecipeRequest,
  [Types.GET_RECIPE_SUCCESS]: getRecipeSuccess
})
