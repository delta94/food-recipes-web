import { persistStore, persistReducer } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas/rootSaga'
import storage from 'redux-persist/lib/storage'

import { createStore, applyMiddleware } from 'redux'

import reducers from './ducks'

const persistConfig = {
  key: '@Recipes',
  storage
}

const persistedReducer = persistReducer(persistConfig, reducers)

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware)
)

const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)

export { store, persistor }
