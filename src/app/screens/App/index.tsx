import React from 'react'
import Header from '../../components/Header'
import GlobalStyle from '../../../styles/global'
import {
  BrowserRouter as Router
} from 'react-router-dom'
import Routes from '../../../config/router'

function App () {
  return (
    <Router>
      <Header />
      <Routes />
      <GlobalStyle />
    </Router>
  )
}

export default App
