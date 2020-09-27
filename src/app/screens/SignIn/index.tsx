import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/img/logo.png'

import { Container, Content, AnimationContainer, Background } from './styles'

const SignIn = () => {
  function handleSubmit () {

  }
  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logo} alt="Recipes logo" />

          <form onSubmit={handleSubmit}>
            <h1>Faça seu login</h1>

            <input name="email" placeholder="E-mail" />

            <input
              name="password"
              type="password"
              placeholder="Senha"
            />

            <button type="submit">Entrar</button>

            <a href="forgo">Esqueci minha senha</a>
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
