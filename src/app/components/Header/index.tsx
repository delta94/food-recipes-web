import React, { useEffect, useState } from 'react'

import MenuIcon from '@material-ui/icons/Menu'
import MenuOpenIcon from '@material-ui/icons/MenuOpen'

import { Container, NavLinks, LogoLink, NavLinksRight, SignUpLink } from './styles'
import logo from '../../../assets/img/logo.png'

const Header = () => {
  const [isVisible, setIsVisible] = useState(false)

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

  console.log(isVisible)

  return (
    <Container isVisible={isVisible}>
      <nav>
        <button onClick={() => handleVisible()}>
          {isVisible ? <MenuOpenIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
        </button>
        <NavLinks isVisible={isVisible}>
          <li>
            <LogoLink href=''>
              <img src={logo} alt='Logo recipes' />
            </LogoLink>
          </li>

          <li>Home</li>

          <NavLinksRight>
            <li>Login</li>
            <SignUpLink>SignUp</SignUpLink>
          </NavLinksRight>
        </NavLinks>

      </nav>
    </Container>
  )
}

export default Header
