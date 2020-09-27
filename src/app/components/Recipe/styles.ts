import styled from 'styled-components'

export const RecipeContainer = styled.article`
    display: flex;
    max-width: 45%;
    margin: 1rem;
    background-color: white;
    border-radius: 16px;
    /* flex-wrap: wrap; */

    @media screen and (max-width: 1600px) {
        max-width: 45%;
    }
    @media screen and (max-width: 950px) {
        max-width: 100%;
    }

    @media screen and (max-width: 600px) {
        display: block;
    }
`

export const RecipeLeft = styled.div`
    img {
        object-fit: cover;
        object-position: center;
        max-width: 250px;
        height: 300px;
        border-top-left-radius: 16px;
        border-bottom-left-radius: 16px;
    }

    @media screen and (max-width: 600px) {
        img {
            max-width: 100%;
            height: auto;
            border-radius: 16px;
        }
    }
`

export const RecipeRight = styled.div`

    display: flex;
    padding-left: 1rem;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    h2, p {
        /* margin: 0.9rem;
        text-align: center; */
    }

    @media screen and (max-width: 600px) {
        display: block;

        h2, p {
            margin: 1rem;
        }
    }

`

export const RecipeTime = styled.div`
    span {
        margin: 1rem;
        font-weight: bold;
    }
`
