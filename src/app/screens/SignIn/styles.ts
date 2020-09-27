import styled, { keyframes } from 'styled-components'

import bg from '../../../assets/img/bg--signin-signup.png'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  place-content: center;
  width: 100%;
  max-width: 700px;
`

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  animation: ${appearFromLeft} 1s;

  img {
      max-width: 200px;
  }

  form {
    margin: 80px 0;
    width: 100%;
    max-width: 340px;
    text-align: center;
    display: flex;
    flex-direction: column;

    input {
        height: 2.8rem;
        border: 0;
        padding-left: 1rem;
        border-radius: 8px;
        margin-top: 1.5rem;
        border: 1px solid lightgrey;
    }

    button {
        height: 2.5rem;
        margin-top: 1.5rem;
        border: 0;
        border: 1px solid lightgrey;
    }

    h1 {
      margin-bottom: 24px;
      color: #312e2d;
    }

    a {
      color: #312e2d;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

    }
  }

  > a {
    color: #312e2d;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;
  }
`

export const Background = styled.div`
  flex: 1;
  background: url('${bg}') no-repeat center;
  background-size: cover;
`
