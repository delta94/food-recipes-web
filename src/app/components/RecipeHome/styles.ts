import styled from 'styled-components'

export const Container = styled.div`
  /* display: flex; */
  background-color: white;
  margin: 0 auto;
  padding: 2rem;
  max-width: 1000px;

  img {
    width: 100%;
    max-width: 1000px;
    object-fit: cover;
    height: 400px;
    border-radius: 8px;
  }

  p {
    max-width: 1000px;
  }

  h2 {
    margin: 1rem;
  }
`

export const ContainerButtons = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;

  button {
    border: 0;
    border-radius: 25px;
    padding: 0.5rem 1.6rem;
    background-color: #f6e5c9;
    color: black;
  }

`
