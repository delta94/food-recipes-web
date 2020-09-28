import { createActions, createReducer } from 'reduxsauce'

export const { Types, Creators } = createActions({
  signInRequest: ['email', 'password'],
  logout: []
})

const initialState = {
  token: null,
  signed: false,
  loading: false
}

interface IAction {
  [key: string]: string;
}

const signInRequest = (state = initialState, action: IAction) => {
  console.log(state)
  console.log(action)
  return ({ ...state, username: [action.username], password: [action.password] })
}

const logout = (state = initialState, action: IAction) => ({ ...state })

export default createReducer(initialState, {
  [Types.SIGN_IN_REQUEST]: signInRequest,
  [Types.LOGOUT]: logout
})
