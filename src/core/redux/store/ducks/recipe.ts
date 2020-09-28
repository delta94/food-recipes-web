import { createActions, createReducer } from 'reduxsauce'

export const { Types, Creators } = createActions({
  createRecipeRequest: ['image', 'name', 'ingredients', 'mode_prepare', 'time'],
  updateRecipeRequest: ['id', 'image', 'name', 'ingredients', 'mode_prepare', 'time'],
  deleteRecipeRequest: ['id'],
  getRecipesRequest: [''],
  getRecipesSuccess: ['data'],
  getRecipeRequest: ['id']
})

const initialState = {}

interface IItem {
  id: string
  name: string
  image: string
  ingredients: string
  time: string
}

interface IAction {
  [key: string]: string;
}

const createRecipeRequest = (state = initialState, action: IAction) => {
  return ({ payload: action })
}

const updateRecipeRequest = (state = initialState, action: IAction) => {
  return ({ payload: action })
}

const deleteRecipeRequest = (state = initialState, action: any) => {
  return ({ payload: action })
}

const getRecipesRequest = (state = initialState, action: IAction) => {
  return ({ payload: action })
}

const getRecipesSuccess = (state = initialState, action: IAction) => {
  return ({ payload: action })
}

const getRecipeRequest = (state = initialState, action: IAction) => {
  return ({ payload: action })
}

export default createReducer(initialState, {
  [Types.CREATE_RECIPE_REQUEST]: createRecipeRequest,
  [Types.UPDATE_RECIPE_REQUEST]: updateRecipeRequest,
  [Types.DELETE_RECIPE_REQUEST]: deleteRecipeRequest,
  [Types.GET_RECIPES_REQUEST]: getRecipesRequest,
  [Types.GET_RECIPES_SUCCESS]: getRecipesSuccess,
  [Types.GET_RECIPE_REQUEST]: getRecipeRequest
})
