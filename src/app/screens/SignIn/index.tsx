import React, { ChangeEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import logo from '../../../assets/img/logo.png'
import { Creators } from '../../../core/redux/store/ducks/auth'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import { Container, Content, AnimationContainer, Background } from './styles'

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('Email: O email é obrigatório'),
  password: Yup.string().min(8, 'Senha: No mínimo 8 caracteres')
})

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  async function handleSubmit (event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault()

    try {
      const isValid = await schema.isValid({ email, password })

      await schema.validate({ email, password })

      if (isValid) {
        dispatch(Creators.signInRequest(email, password))
      }
    } catch (error) {
      toast(error.message)
    }
  }

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <Link to="/"><img src={logo} alt="Recipes" /></Link>

          <form onSubmit={handleSubmit}>
            <h1>Faça seu login</h1>

            <input name="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />

            <input
              name="password"
              type="password"
              placeholder="Senha"
              value={password} onChange={(e) => setPassword(e.target.value)}
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
