import styled, { css } from 'styled-components'

export const Container = styled.article`
    max-width: 700px;
    margin: 2rem auto;

    h1 {
        margin-bottom: 2rem;
    }
`

export const ContainerRecipe = styled.article`
    display: flex;

    div, form {
        width: 100%;
    }

    button {
        cursor: pointer;
        border: 0;
        border-radius: 25px;
        padding: 0.5rem 1.6rem;
        background-color: #f6e5c9;
        color: black;
    }
`

export const BoxInput = styled.div`
        display: flex;
        flex-direction: column;
        margin: 1rem;

    input, textarea {
        height: 3rem;
        border: 0;
        padding-left: 1rem;
        border-radius: 8px;
        border: 1px solid lightgrey;
        font-size: 1.1rem;
    }

    label + input, label + textarea {
        margin-top: 0.5rem;
    }

    textarea {
        resize: vertical;
        height: 6rem;
    }

`

interface IBoxImage {
    preview: string | undefined;
}

export const BoxImage = styled.div<IBoxImage>`
    ${props => props.preview && css`
        background-image: url(${props.preview});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    `}

    border-radius: 8px;
    margin: 1rem;
    height: 10rem;
    background-color: white;


    label {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }


    .MuiSvgIcon-root {
        font-size: 3.2rem;
    }

    input {
        padding: 4rem;
        z-index: -1;
        position: absolute;
        opacity: 0;
        /* display: none; */
    }

`
