import styled from "styled-components"
import { Link } from 'react-router-dom';

export const Content = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
height: 100vh;
background-color: rgba(255,195,0, .9);
`

export const Button = styled(Link)`
    border: 1px solid blue;
    background: blue;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
    color: white;
`
export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;

`