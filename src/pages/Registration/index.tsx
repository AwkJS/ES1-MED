import React, { useState } from 'react';
import * as R from './styles';

const Registration: React.FC = () => {


    return (

        <>

            <R.GlobalContainer>
                <R.Title>Sign Up</R.Title>
                <R.ContainerForm>
                    <R.CategoryText>Personal</R.CategoryText>
                    <R.Input type='text' placeholder='First Name'></R.Input>
                    <R.Input type='text' placeholder='Last Name'></R.Input>
                    <R.Input type='date' placeholder='Birth Date'></R.Input>
                    <R.Input type='text' placeholder='Sex'></R.Input>
                    <R.Input type='text' placeholder='Blood Type'></R.Input>
                    <R.CategoryText>Document</R.CategoryText>
                    <R.Input type='text' placeholder='Document Type'></R.Input>
                    <R.Input type='text' placeholder='Documenet Number'></R.Input>
                    <R.CategoryText>Address</R.CategoryText>
                    <R.Input type='text' placeholder='Postal Code'></R.Input>
                    <R.Input type='text' placeholder='Street Number'></R.Input>
                    <R.Input type='text' placeholder='District'></R.Input>
                    <R.Input type='text' placeholder='City'></R.Input>
                    <R.Input type='text' placeholder='State'></R.Input>
                    <R.Input type='text' placeholder='Country'></R.Input>
                    <R.Input type='text' placeholder='Complement'></R.Input>
                    <R.CategoryText>Authentication</R.CategoryText>
                    <R.Input type='text' placeholder='Password'></R.Input>
                    <R.Input type='text' placeholder='Confirm Password'></R.Input>
                    <R.RegisterButton>Registrar-se</R.RegisterButton>
                </R.ContainerForm>
            </R.GlobalContainer>
            
        </>

    );
};

export default Registration;