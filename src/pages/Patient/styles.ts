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
    color: #00AEFF;
    font-size: 50px;
    margin: 50px;


`

export const UtilRowContainer = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;


`

export const MedicationButton = styled.button`


    width: 200px;
    height: 50px;
    background: green;
    margin: 10px;
    border: none;

`

export const PersonButton = styled.button`


    width: 200px;
    height: 50px;
    background: red;
    margin: 10px;
    border: none;
`

export const RecordButton = styled.button`

    width: 200px;
    height: 50px;
    background: blue;
    margin:10px;
    border: none;

`

export const UtilColumnContainer = styled.div`


    display: flex;
    flex-direction: column;
    align-items: center;
    display: none;
    margin: 50px;


`
