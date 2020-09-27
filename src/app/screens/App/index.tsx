import React from 'react'
import GlobalStyle from '../../../styles/global'
import {
  BrowserRouter as Router
} from 'react-router-dom'
import Routes from '../../../config/router'

function App () {
  return (
    <Router>
      <Routes />
      <GlobalStyle />
    </Router>
  )
}

export default App
