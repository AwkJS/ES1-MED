import React, { useState } from 'react';
import * as R from './styles';

const RegisterPatient: React.FC = () => {

    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[birthDate, setBirthDate] = useState('');
    const[sex, setSex] = useState('');
    const[blood, setBlood] = useState('');

    const[patientCPF, setPatientCPF] = useState('');

    const[addressCEP, setAddressCEP] = useState('');
    const[addressStreet, setAddressStree] = useState('');
    const[addressCity, setAddressCity] = useState('')
    const[addressState, setAddressState] = useState('')
    const[addressNumber, setAddressNumber] = useState('');
    const[addressComplement, setAddressComplement] = useState('');

    const[patientPassword, setPatientPassword] = useState('');
    const[confirmPassword, setConfirmPassword] = useState('')





    return (

        <>

            <R.GlobalContainer>
                <R.Title>Sign Up</R.Title>
                <R.ContainerForm>
                    <R.CategoryText>Personal</R.CategoryText>
                    <R.Input type='text' placeholder='First Name' onChange = {(event) => {setFirstName(event.target.value)}}></R.Input>
                    <R.Input type='text' placeholder='Last Name' onChange = {(event) => {setLastName(event.target.value)}}></R.Input>
                    <R.Input type='date' placeholder='Birth Date' onChange = {(event) => {setBirthDate(event.target.value)}}></R.Input>
                    <R.Select value = {sex} onChange={e => setSex(e.target.value)}>
                        <option value="Masculino">Masculino</option>
                        <option value="Feminino">Feminino</option>
                    </R.Select>
                    <R.Select value = {blood} onChange={e => setBlood(e.target.value)}>
                        <option value='A+'>A+</option>
                        <option value='A-'>A-</option>
                        <option value='B+'>B+</option>
                        <option value='B-'>B-</option>
                        <option value='O+'>O+</option>
                        <option value='O-'>O-</option>
                        <option value='AB+'>AB+</option>
                        <option value='AB-'>AB-</option>
                    </R.Select>
                    <R.CategoryText>Document</R.CategoryText>
                    <R.Input type='text' placeholder='Documenet Number - CPF' onChange = {(event) => {setPatientCPF(event.target.value)}}></R.Input>
                    <R.CategoryText>Address</R.CategoryText>
                    <R.Input type='text' placeholder='Postal Code'></R.Input>
                    <R.Input type='text' placeholder='Street'></R.Input> 
                    <R.Input type='text' placeholder='City'></R.Input>
                    <R.Select value = {addressState} onChange={e => setAddressState(e.target.value)}>
                        <option value="ac">AC</option>
                        <option value="al">AL</option>
                        <option value="ap">AP</option>  
                        <option value="am">AM</option>
                        <option value="ba">BA</option>
                        <option value="ce">CE</option>
                        <option value="df">DF</option>
                        <option value="es">ES</option>
                        <option value="go">GO</option>
                        <option value="ma">MA</option>
                        <option value="mt">MT</option>
                        <option value="ms">MS</option>
                        <option value="mg">MG</option>
                        <option value="pa">PA</option>
                        <option value="pb">PB</option>
                        <option value="pr">PR</option>
                        <option value="pe">PE</option>
                        <option value="pi">PI</option>
                        <option value="rj">RJ</option>
                        <option value="rn">RN</option>
                        <option value="rs">RS</option>
                        <option value="ro">RO</option>
                        <option value="rr">RR</option>
                        <option value="sc">SC</option>
                        <option value="sp">SP</option>
                        <option value="se">SE</option>
                        <option value="to">TO</option>
                    </R.Select>
                    <R.Input type='text' placeholder='Number' onChange = {(event) => {setAddressNumber(event.target.value)}}></R.Input>
                    <R.Input type='text' placeholder='Complement' onChange = {(event) => {setAddressComplement(event.target.value)}}></R.Input>
                    <R.CategoryText>Authentication</R.CategoryText>
                    <R.Input type='password' placeholder='Password' onChange = {(event) => {setPatientPassword(event.target.value)}}></R.Input>
                    <R.Input type='password' placeholder='Confirm Password' onChange = {(event) => {setConfirmPassword(event.target.value)}}></R.Input>
                    <R.RegisterButton>Registrar-se</R.RegisterButton>
                </R.ContainerForm>
            </R.GlobalContainer>
            
        </>

    );
};

export default RegisterPatient;