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
                    <option value='Pacient'>Patient</option>
                </L.Select>
                <L.Input type='text' placeholder='Username'></L.Input>
                <L.Input type='password' placeholder='Password'></L.Input>
                <L.LoginButton href='/Patient'>LogIn</L.LoginButton>
                <L.RowContainer>
                    <L.BlackText>Does not have account?</L.BlackText>
                    <L.GreenText href='/RegisterPatient'>Sign Up</L.GreenText>
                </L.RowContainer>
            </L.GlobalContainer>
            
        </>

    );
};

export default Login;