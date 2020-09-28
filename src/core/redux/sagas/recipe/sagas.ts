import { takeLatest, call, put, all } from 'redux-saga/effects'
import { toast } from 'react-toastify'
import { Creators } from '../../store/ducks/recipe'

import history from '../../../services/history'
import api from '../../../services/api'
import { string } from 'yup'

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
  payload: {
    id: string;
    image: string;
    name: string;
    ingredients: string;
    mode_prepare: string;
    time: string;
  }
  type: string;
}

export function * updateRecipe ({ payload }: IUpdateRecipe) {
  try {
    const { id, image, name, ingredients, mode_prepare, time } = payload

    const data = new FormData()

    data.append('image', image)
    data.append('name', name)
    data.append('ingredients', ingredients)
    data.append('mode_prepare', mode_prepare)
    data.append('time', time)

    const response = yield call(api.put, `/recipes/${id}`, data)

    const a = response.data

    console.log(a)

    toast.success('Receita atualizada com sucesso!')

    // history.push('/')
  } catch (error) {
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

    // yield put(Creators.getRecipesRequest())

    // const a = response.data

    // console.log(a)

    // history.push('/')
    // history.push('/recipes/list')
  } catch (error) {
    toast.error('Falha na remoção, verifique seus dados!')
  }
}

export function * getRecipes () {
  try {
    const data = yield call(api.get, '/recipes')

    yield put(Creators.getRecipesSuccess(data))

    // history.push('/')
  } catch (error) {
    // toast.error('Impossivel obter os dados')
  }
}

export function * getRecipe ({ id }: IDeleteRecipe) {
  try {
    const data = yield call(api.get, '/recipes')

    yield put(Creators.getRecipesSuccess(data))

    // history.push('/')
  } catch (error) {
    // toast.error('Impossivel obter os dados')
  }
}

export default all([
  takeLatest('CREATE_RECIPE_REQUEST', createRecipe),
  takeLatest('UPDATE_RECIPE_REQUEST', updateRecipe),
  takeLatest('DELETE_RECIPE_REQUEST', deleteRecipe),
  takeLatest('GET_RECIPES_REQUEST', getRecipes)
])
