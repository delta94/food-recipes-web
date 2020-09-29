import React, { useEffect, useState } from 'react'
import { Creators } from '../../../core/redux/store/ducks/auth'
import { useDispatch, useSelector } from 'react-redux'
import history from '../../../core/services/history'

import MenuIcon from '@material-ui/icons/Menu'
import MenuOpenIcon from '@material-ui/icons/MenuOpen'

import {
  Container,
  NavLinks,
  LogoLink,
  NavLinksRight,
  SignUpLink
} from './styles'
import logo from '../../../assets/img/logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isVisible, setIsVisible] = useState(false)

  const dispatch = useDispatch()

  const {
    auth: { signed, action }
  } = useSelector((state): any => state)

  useEffect(() => {
    setIsVisible(false)
  }, [])

  function handleVisible () {
    if (isVisible) {
      setIsVisible(false)
    } else {
      setIsVisible(true)
    }
  }

  function handleLogout () {
    dispatch(Creators.signOut())
    history.push('/')
  }

  return (
    <Container isVisible={isVisible}>
      <nav>
        <button onClick={handleVisible}>
          {isVisible ? (
            <MenuOpenIcon fontSize='large' />
          ) : (
            <MenuIcon fontSize='large' />
          )}
        </button>
        <NavLinks isVisible={isVisible}>
          <li>
            <LogoLink to='/'>
              <img src={logo} alt='Logo recipes' />
            </LogoLink>
          </li>

          {signed ? (
            ''
          ) : (
            <Link to='/'>
              <li>Home</li>
            </Link>
          )}

          <NavLinksRight>
            {signed ? (
              <li>{'Olá, ' + action.name}</li>
            ) : (
              <Link to='/login'>
                <li>Login</li>
              </Link>
            )}

            {signed ? (
              <Link to='/recipes/list'>
                <li>Minhas Receitas</li>
              </Link>
            ) : (
              ''
            )}

            {signed ? (
              <Link to='/recipes/new'>
                <li>Criar Nova Receita</li>
              </Link>
            ) : (
              ''
            )}

            {signed ? (
              <li>
                <Link to='/' onClick={handleLogout}>
                  Logout
                </Link>
              </li>
            ) : (
              ''
            )}

            {signed ? '' : <SignUpLink to='/signup'>SignUp</SignUpLink>}
          </NavLinksRight>
        </NavLinks>
      </nav>
    </Container>
  )
}

export default Header
