import styled from 'styled-components';

export const GlobalContainer = styled.div`
      
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    background: #FFFFFF;
    width: 100%;
`

export const Title = styled.h1`


    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    color: #1BD496;
    font-size: 50px;
    margin: 50px;


`

export const UtilRowContainer = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;


`

export const Icon = styled.img`


    margin: 5px;
    width: 25px;
    height: 25px;

`

export const ConsultaButton = styled.button`


    width: 200px;
    height: 60px;
    border-radius: 10px;
    background: #1BD496;
    font-size: 15px;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    color: #FFFFFF;
    margin: 10px;
    border: none;
    place-content: center;
    place-items: center;    

`

export const ProntuarioButton = styled.button`

    width: 200px;
    height: 60px;
    border-radius: 10px;
    background: #1BD496;
    font-size: 15px;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    color: #FFFFFF;
    margin: 10px;
    border: none;
    place-content: center;
    place-items: center;
`

export const UtilColumnContainer = styled.div`


    display: flex;
    flex-direction: column;
    align-items: center;
    display: none;
    margin: 50px;


`

export const Input = styled.input`

    padding: 0.8rem;
    width: 500px;
    height: 30px;
    border: 2px solid #E7E7E7;
    border-radius: 5px;
    background: #E6E6E6;
    font-size: 18px;
    outline: none;
    transition: all 0.3s;
    color: #000;
    margin: 5px;
    :focus{
        border: 2px solid #1BD496;
    }


`

export const ButtonCPF = styled.button`


    width: 50px;
    height: 55px;
    margin-left: 15px;
    border-radius: 5px;
    border: none;
    background: #1BD496;
    font-size: 19px;
    color: #FFFFFF;
    :hover{
        cursor: pointer;
    }



`



 