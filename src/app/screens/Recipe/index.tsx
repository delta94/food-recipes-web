import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/img/logo.png'

import { Container, ContainerButtons } from './styles'

const Recipe = () => {
  return (
    <Container>
      <h1>Recipe</h1>
      <img
        src='https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1231&q=80'
        alt=''
      />

      <h2>Ingredientes</h2>
      <p>
        2 pacotes de bolo pronto de chocolate ( tipo Pulmann) 1 copo de guaraná
        2 latas de leite condensado 100 g de coco ralado 2 colheres (sopa) de
        margarina 200 g de chocolate meio amargo 1 lata de creme de leite com
        soro coco ralado e raspas de chocolate para decorar
      </p>

      <h2>Modo de preparo</h2>
      <p>
        Leve ao fogo as 2 latas de leite condensado com a margarina e o coco
        ralado até formar um beijinho em ponto mole. Reserve. Pique o chocolate
        e leve ao micro-ondas por 45 segundos. Adicione o creme de leite e mexa
        bem até formar um creme brilhante, a ganache.
      </p>

      <h2>Tempo</h2>
      <p>1h 15min</p>

      <ContainerButtons>
        <button type='submit'>Editaraaaaaaaaaaa</button>
        <button type='submit'>Apagar</button>
      </ContainerButtons>
    </Container>

  )
}

export default Recipe
