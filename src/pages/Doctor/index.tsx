import React, { useState } from 'react';
import * as D from './styles';

import prontuarioIcon from '../../assets/buttons/prontuario.svg';
import consultaIcon from '../../assets/buttons/consulta.svg';

const Doctor: React.FC = () => {

    const[consulta, setConsulta] = useState(false);
    const[prontuario, setProntuario] = useState(false);

    const[prontuarioCPF, setProntuarioCPF] = useState('');

    const[consultaCPF, setConsultaCPF] = useState('');
    const[doencas, setDoencas] = useState([])
    const[exames, setExames] = useState([])
    const[medicamentos, setMedicamentos] = useState([])

    const showConsulta = () => {

        if(consulta === true){
          document.getElementById('Consulta')!.style.display = 'none';
          setConsulta(false);
        }
        else if(consulta === false){
          document.getElementById('Consulta')!.style.display = 'block';
          document.getElementById('Prontuario')!.style.display = 'none';
          setConsulta(true);
          setProntuario(false);
        }
        
    }

    const showProntuario = () => {

        if(prontuario === true){
          document.getElementById('Prontuario')!.style.display = 'none';
          setProntuario(false);
        }
        else if(prontuario === false){
          document.getElementById('Consulta')!.style.display = 'none';
          document.getElementById('Prontuario')!.style.display = 'block';
          setProntuario(true);
          setConsulta(false);
        }
        
    }

    return (

        <>

            <D.GlobalContainer>
                <D.Title>Bem-vindo, Doutor</D.Title>
                <D.UtilRowContainer>
                    <D.ConsultaButton onClick={showConsulta}><D.Icon src={consultaIcon}/></D.ConsultaButton>
                    <D.ProntuarioButton onClick={showProntuario}><D.Icon src={prontuarioIcon}/></D.ProntuarioButton>
                </D.UtilRowContainer>
                <D.UtilColumnContainer id='Consulta'>
                    <D.Input placeholder='CPF do Paciente' onChange = {(event) => {setConsultaCPF(event.target.value)}}></D.Input>
                    <D.Input></D.Input>
                    <D.Input></D.Input>
                    <D.Input></D.Input>
                </D.UtilColumnContainer>
                <D.UtilColumnContainer id='Prontuario'>
                    <D.UtilRowContainer>
                        <D.Input placeholder='Digite o CPF do Paciente' onChange = {(event) => {setProntuarioCPF(event.target.value)}}></D.Input>
                        <D.ButtonCPF>OK</D.ButtonCPF>
                    </D.UtilRowContainer>
                </D.UtilColumnContainer>
            </D.GlobalContainer>
            
        </>

    );
};

export default Doctor;