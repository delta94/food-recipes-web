
import { combineReducers } from 'redux'

import auth from './auth'
import recipe from './recipe'

export default combineReducers({ auth, recipe })

export type RootState = ReturnType<typeof combineReducers>
