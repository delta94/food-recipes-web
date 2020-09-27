import styled, { css } from 'styled-components'
import bg from '../../../assets/img/bg.png'

interface IHeaderProps {
    isVisible: boolean;
}

export const Container = styled.header<IHeaderProps>`
    padding: 0.2rem;
    background-image: url('${bg}');
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 60px;
    border: 6px solid white;
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

export const LogoLink = styled.a`
    img {
        object-fit: contain;
        max-width: 200px;
    }
`

export const NavLinksRight = styled.div`
    display: flex;  
    align-items: center;

    @media screen and (max-width: 650px) {
            display: block;
        }
    }
`

export const SignUpLink = styled.li`
    display: flex;
    align-items: center;
    margin-left: 1rem;
    border-radius: 25px;
    padding: 0.5rem 1.6rem;
    background-color: white;
    color: black;

    @media screen and (max-width: 650px) {
            max-width: 7rem;
            margin-left: 0;
            background-color: lightgrey;
            margin-left: auto;
            margin-right: auto;
        }
    }
`
