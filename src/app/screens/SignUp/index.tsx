import React, { ChangeEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/img/logo.png'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { Creators } from '../../../core/redux/store/ducks/auth'
import * as Yup from 'yup'

import { Container, Content, AnimationContainer, Background } from './styles'

const schema = Yup.object().shape({
  name: Yup.string().required('Nome: O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('Email: O email é obrigatório'),
  password: Yup.string().min(8, 'Senha: No mínimo 8 caracteres')
})

const SignIn = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  async function handleSubmit (event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault()

    try {
      const isValid = await schema.isValid({ name, email, password })

      await schema.validate({ name, email, password })

      if (isValid) {
        dispatch(Creators.signUpRequest(name, email, password))
      }
    } catch (error) {
      toast(error.message)
    }
  }

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <Link to='/'>
            <img src={logo} alt='Recipes' />
          </Link>

          <form onSubmit={handleSubmit}>
            <h1>Faça seu Cadastro</h1>

            <input
              name='name'
              placeholder='Nome'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              name='email'
              placeholder='E-mail'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              name='password'
              type='password'
              placeholder='Senha'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type='submit'>Cadastrar</button>
          </form>

          <Link to='/login'>Fazer Login</Link>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  )
}

export default SignIn
