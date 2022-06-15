import React, { useState } from 'react';
import * as L from './styles';

const Login: React.FC = () => {


    return (

        <>

            <L.GlobalContainer>
                <L.Title>Simple MCCS</L.Title>
                <L.SubTitle>Sign In</L.SubTitle>
                <L.Select>
                    <option value='Doctor'>Doctor</option>
                    <option value='Pacient'>Pacient</option>
                </L.Select>
                <L.Input placeholder='Username'></L.Input>
                <L.Input placeholder='Password'></L.Input>
                <L.BlueText>Forgot Password</L.BlueText>
                <L.LoginButton href='/'>LogIn</L.LoginButton>
                <L.RowContainer>
                    <L.BlackText>Does not have account?</L.BlackText>
                    <L.BlueText>Sign In</L.BlueText>
                </L.RowContainer>
            </L.GlobalContainer>
            
        </>

    );
};

export default Login;