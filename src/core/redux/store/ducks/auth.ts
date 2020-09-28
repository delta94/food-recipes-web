import { createActions, createReducer } from 'reduxsauce'

export const { Types, Creators } = createActions({
  login: ['email', 'password'],
  logout: []
})

const initialState = {
  isLogged: false,
  token: null,
  user: {}
}

interface IAction {
  [key: string]: string;
}

const login = (state = initialState, action: IAction) => {
  console.log(state)
  console.log(action)
  return ({ ...state, username: [action.username], password: [action.password] })
}

const logout = (state = initialState, action: IAction) => ({ ...state })

export default createReducer(initialState, {
  [Types.LOGIN]: login,
  [Types.LOGOUT]: logout
})
