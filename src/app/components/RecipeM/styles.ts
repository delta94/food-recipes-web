import styled from 'styled-components'

export const RecipeContainer = styled.article`
    display: flex;
    background-color: white;
    flex-direction: column;
    justify-content: center;
    border-radius: 16px;
    margin: 1rem 0;
    width: 30%;
    flex-wrap: wrap;

    img {
        object-fit: cover;
        max-width: 100%;
        height: 250px;
    }

    h2 {
        text-align: center;
        padding: 1rem;
    }

    @media screen and (max-width: 1100px) {
        width: 50%;
    }

    @media screen and (max-width: 600px) {
        width: 100%;
    }
`
