import { createActions, createReducer } from 'reduxsauce'

export const { Types, Creators } = createActions({
  signInRequest: ['email', 'password'],
  signInSuccess: ['token', 'user'],
  signUpRequest: ['name', 'email', 'password'],
  signFailure: [],
  signOut: []
})

const initialState = {}

interface IAction {
  [key: string]: string;
}

const signInRequest = (state = initialState, action: IAction) => {
  return ({ payload: { email: action.email, password: action.password } })
}

const signInSuccess = (state = initialState, action: IAction) => {
  return ({ payload: { token: action.token, action: action.user } })
}

const signUpRequest = (state = initialState, action: IAction) => {
  console.log(state)
  console.log(action)
  return ({ payload: { name: action.name, email: action.email, password: action.password } })
}

const signFailure = (state = initialState, action: IAction) => {
  return { ...state }
}

const signOut = (state = initialState, action: IAction) => {
  return { ...state }
}

export default createReducer(initialState, {
  [Types.SIGN_IN_REQUEST]: signInRequest,
  [Types.SIGN_IN_SUCCESS]: signInSuccess,
  [Types.SIGN_UP_REQUEST]: signUpRequest,
  [Types.SIGN_FAILURE]: signFailure,
  [Types.SIGN_OUT]: signOut
})
