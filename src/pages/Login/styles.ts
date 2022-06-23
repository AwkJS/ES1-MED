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

export const SubTitle = styled.h2`

    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    color: #000000;
    font-size: 35px;

`

export const Select = styled.select`

    width: 150px;
    height: 30px;
    background: #1BD496;
    border: none;
    margin-bottom: 30px;


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

export const LoginButton = styled.a`

    display: flex;
    align-items: center;
    width: 530px;
    height: 50px;
    border: 2px solid #1BD496;
    background: #1BD496;
    font-size: 18px;
    color: #fff;
    text-align: center;
    justify-content: center;
    outline: none;
    transition: all 0.3s;
    margin-top: 30px;
    margin-bottom: 20px;
    text-decoration: none;
    :hover{
        cursor: pointer;
        border: 2px solid #fff;
    }
    :visited{
            text-decoration: none;
            color: #FFFFFF;
    }


`

export const GreenText = styled.a`

    font-family: 'Roboto', sans-serif;
    color: #1BD496;
    font-size: 15px;
    font-weight: 600;
    margin: 5px;

`

export const BlackText = styled.span`


    font-family: 'Roboto', sans-serif;
    color: #000000;
    font-size: 15px;
    font-weight: 600;
    margin: 5px;

`

export const RowContainer = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;


`
