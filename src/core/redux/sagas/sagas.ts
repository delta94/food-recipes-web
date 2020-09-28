import { takeLatest, call, put, all } from 'redux-saga/effects'
import { toast } from 'react-toastify'
import { Creators } from '../store/ducks/auth'

import history from '../../services/history'
import api from '../../services/api'

// import { signInSuccess, signFailure } from '../store/ducks/auth'

interface ISignIn {
  email: string;
  password: string;
  type: string;

}

export function * signIn ({ email, password }: ISignIn) {
  try {
    const response = yield call(api.post, 'auth', {
      email,
      password
    })

    const { token, user } = response.data

    console.log(token, user)

    api.defaults.headers.Authorization = `Bearer ${token}`

    yield put(Creators.signInSuccess(token, user))

    history.push('/dashboard')
  } catch (error) {
    toast.error('Falha na autenticação, verifique seus dados')
    yield put(Creators.signFailure())
  }
}

interface ISignUp {
  name: string;
  email: string;
  password: string;
  type: string;
}

export function * signUp ({ name, email, password }: ISignUp) {
  try {
    yield call(api.post, 'users', {
      name,
      email,
      password
    })

    history.push('/')
  } catch (error) {
    toast.error('Falha no cadastro, verifique seus dados!')

    yield put(Creators.signFailure())
  }
}

// export function setToken ({ payload }) {
//   if (!payload) return

//   const { token } = payload.auth

//   if (token) {
//     api.defaults.headers.Authorization = `Bearer ${token}`
//   }
// }

// export function signOut () {
//   history.push('/')
// }

export default all([
  takeLatest('SIGN_IN_REQUEST', signIn),
  takeLatest('SIGN_UP_REQUEST', signUp)
])
