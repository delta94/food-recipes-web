import { persistStore } from 'redux-persist'

import { createStore, applyMiddleware } from 'redux'

import reducers from './ducks'

const store = createStore(
  reducers,
  applyMiddleware()
)

const persistor = persistStore(store)

export { store, persistor }
