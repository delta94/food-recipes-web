import React, { ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import logo from '../../../assets/img/logo.png'
import { Creators } from '../../../core/redux/store/ducks/auth'

import { Container, Content, AnimationContainer, Background } from './styles'

const SignIn = () => {
  const dispatch = useDispatch()

  function handleSubmit (event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault()
    dispatch(Creators.login('pass', 'asasa'))
  }
  return (
    <Container>
      <Content>
        <AnimationContainer>
          <Link to="/"><img src={logo} alt="Recipes" /></Link>

          <form onSubmit={handleSubmit}>
            <h1>Faça seu login</h1>

            <input name="email" placeholder="E-mail" />

            <input
              name="password"
              type="password"
              placeholder="Senha"
            />

            <button type="submit">Entrar</button>
          </form>

          <Link to="/signup">
            Criar conta
          </Link>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  )
}

export default SignIn
