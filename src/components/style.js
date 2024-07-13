import styled from 'styled-components'

export const Container = styled.div`
    margin: 0 auto;
    width: 1024px;
`
import banner from "../assets/pokeapi_256.png"
export const ContentStyle = styled.div`
    display: 'flex',
    flex-direction: 'column',
    align-items: 'center',
    justify-content: 'center',
    margin: 0 auto;
    width: auto;
    height: 100vh;
    background-color: transparent;
    border-radius: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 20px;
    margin-right: 20px;
    padding: 20px;
    background:url(${banner}); 

`