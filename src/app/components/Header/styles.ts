import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import bg from '../../../assets/img/bg.png'

interface IHeaderProps {
    isVisible: boolean;
}

export const Container = styled.header<IHeaderProps>`
    padding: 0.2rem;
    background-image: url('${bg}');
    background-position: top;
    background-repeat: no-repeat;
    /* border-radius: 60px; */
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
    /* border: 6px solid white; */
    position: relative;
    height: 300px;

    button {
        display: none;
        border: 0;
        position: absolute;
        cursor: pointer;
        top: 2px;
        left: 20px;
        background-color: transparent;
    }

    @media screen and (max-width: 650px) {
        border-radius: 0;
        border: 0;

        button {
            display: block;
        }
    }

    a {
        text-decoration: none;
        display: block;
    }

    /* h1 {
        font-size: 4rem;
        color: #312e2d;
        margin-left: 2rem;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    } */
`

export const NavLinks = styled.ul<IHeaderProps>`
    display: flex;
    justify-content: space-around;
    color: white;
    align-items: center;
    font-weight: bold;
    position: relative;

    li {
        list-style: none;
        color: black;
    }

    li + a, a + a, a + li {
        margin-left: 1rem;
    }

    a { 
        color: black;
    }

    @media screen and (max-width: 650px) {
            margin-top: 40px;
            padding: 1rem 0;
            display: none;
            ${props => props.isVisible && css`
                display: ${props.isVisible ? 'block' : 'none'};
            `}
            animation: fade 500ms;
            width: 100%;
            background-color: white;
            border-radius: 40px;
            color: black;
            text-align: center;
        }

        li {
            margin-top: 1rem;
        }
    }

    @keyframes fade {
        0% { opacity: 0; -webkit-transform: translateX(-100%); }   
        100% { opacity: 1; -webkit-transform: translateX(0); }
}
`

export const LogoLink = styled(Link)`
    img {
        object-fit: contain;
        max-width: 200px;
    }
`

export const NavLinksRight = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    a { 
        color: black;
    }


    @media screen and (max-width: 650px) {
            display: block;
        }
    }
`

export const SignUpLink = styled(Link)`
    margin-left: 1rem;
    border-radius: 25px;
    padding: 0.5rem 1.6rem;
    background-color: #f6e5c9;
    color: black !important;
    position: relative;
    top: 9px;

    @media screen and (max-width: 650px) {
            max-width: 7rem;
            margin-top: 1rem;
            margin-left: 0;
            background-color: lightgrey;
            margin-left: auto;
            margin-right: auto;
            top: 0;
        }
    }
`

export const Button = styled.button`
    display: block !important;
    background-color: lightgrey;
    color: black;
`
