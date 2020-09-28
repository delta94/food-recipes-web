import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import GlobalStyle from '../../../styles/global'
import Routes from '../../../config/router'
import store from '../../../core/redux/store'

function App () {
  return (
    <Provider store={store}>
      <Router>
        <Routes />
        <GlobalStyle />
      </Router>
    </Provider>
  )
}

export default App
