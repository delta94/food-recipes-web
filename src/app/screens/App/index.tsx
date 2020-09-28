import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import GlobalStyle from '../../../styles/global'
import 'react-toastify/dist/ReactToastify.css'
import Routes from '../../../config/router'
import { store, persistor } from '../../../core/redux/store'

function App () {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <Routes />
          <GlobalStyle />
          <ToastContainer position='top-right' autoClose={3000} />
        </Router>
      </PersistGate>
    </Provider>
  )
}

export default App
