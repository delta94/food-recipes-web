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
          <Link to="/"><img src={logo} alt="Recipes" /></Link>

          <form onSubmit={handleSubmit}>
            <h1>Faça seu Cadastro</h1>

            <input name="name" placeholder="Nome" />
            <input name="email" placeholder="E-mail" />

            <input
              name="password"
              type="password"
              placeholder="Senha"
            />

            <button type="submit">Cadastrar</button>

          </form>

          <Link to="/login">
            Fazer Login
          </Link>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  )
}

export default SignIn
