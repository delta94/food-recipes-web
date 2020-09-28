import { persistStore } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas/rootSaga'

import { createStore, applyMiddleware } from 'redux'

import reducers from './ducks'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducers,
  applyMiddleware()
)

const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)

export { store, persistor }
