import { takeLatest, call, put, all } from 'redux-saga/effects'
import { toast } from 'react-toastify'
import { Creators } from '../../store/ducks/recipe'

import history from '../../../services/history'
import api from '../../../services/api'

interface ICreateRecipe {
  image: string;
  name: string;
  ingredients: string;
  mode_prepare: string;
  time: string;
  type: string;
}

export function * createRecipe ({ image, name, ingredients, mode_prepare, time }: ICreateRecipe) {
  try {
    const data = new FormData()

    data.append('image', image)
    data.append('name', name)
    data.append('ingredients', ingredients)
    data.append('mode_prepare', mode_prepare)
    data.append('time', time)

    yield call(api.post, '/recipes', data)

    toast.success('Receita criada com sucesso!')

    history.push('/recipes/list')
  } catch (error) {
    toast.error('Falha no cadastro, verifique seus dados')
  }
}

interface IUpdateRecipe {
  id: string;
  image: string;
  name: string;
  ingredients: string;
  mode_prepare: string;
  time: string;
  type: string;
}

export function * updateRecipe ({ id, image, name, ingredients, mode_prepare, time }: IUpdateRecipe) {
  try {
    const data = new FormData()

    data.append('image', image)
    data.append('name', name)
    data.append('ingredients', ingredients)
    data.append('mode_prepare', mode_prepare)
    data.append('time', time)

    yield call(api.put, `/recipes/${id}`, data)

    yield put(Creators.getRecipesRequest())

    toast.success('Receita atualizada com sucesso!')
  } catch (error) {
    yield put(Creators.getRecipesRequest())
    toast.error('Falha na atualização, verifique seus dados!')
  }
}

interface IDeleteRecipe {
  id: string;
  type: string;
}

export function * deleteRecipe ({ id }: IDeleteRecipe) {
  try {
    yield call(api.delete, `/recipes/${id}`)

    toast.success('Receita apagada com sucesso!')
    yield put(Creators.getRecipesRequest())
  } catch (error) {
    yield put(Creators.getRecipesRequest())
    toast.error('Falha na remoção, verifique seus dados!')
  }
}

export function * getRecipes () {
  try {
    const data = yield call(api.get, '/recipes')

    yield put(Creators.getRecipesSuccess(data))
  } catch (error) {
  }
}

export function * getRecipe ({ id }: IDeleteRecipe) {
  try {
    const { data } = yield call(api.get, `/recipes/${id}`)

    yield put(Creators.getRecipeSuccess(data))
  } catch (error) {
  }
}

export default all([
  takeLatest('CREATE_RECIPE_REQUEST', createRecipe),
  takeLatest('UPDATE_RECIPE_REQUEST', updateRecipe),
  takeLatest('DELETE_RECIPE_REQUEST', deleteRecipe),
  takeLatest('GET_RECIPES_REQUEST', getRecipes),
  takeLatest('GET_RECIPE_REQUEST', getRecipe)
])
