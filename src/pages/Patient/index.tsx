import React, { useState } from 'react';
import * as P from './styles';

import pillIcon from '../../assets/buttons/pill.svg';
import prontuarioIcon from '../../assets/buttons/prontuario.svg';
import userIcon from '../../assets/buttons/user.svg';

const Patient: React.FC = () => {

    const Name = 'Gustavo'

    const[medication, setMedication] = useState(false);
    const[person, setPerson] = useState(false);
    const[record, setRecord] = useState(false);

    const showMedication = () => {

        if(medication === true){
          document.getElementById('Medication')!.style.display = 'none';
          setMedication(false);
        }
        else if(medication === false){
          document.getElementById('Medication')!.style.display = 'block';
          document.getElementById('Person')!.style.display = 'none';
          document.getElementById('Record')!.style.display = 'none';
          setMedication(true);
          setPerson(false);
          setRecord(false);
        }
        
    }

    const showPerson = () => {

        if(person === true){
          document.getElementById('Person')!.style.display = 'none';
          setPerson(false);
        }
        else if(person === false){
          document.getElementById('Medication')!.style.display = 'none';
          document.getElementById('Person')!.style.display = 'block';
          document.getElementById('Record')!.style.display = 'none';
          setPerson(true);
          setMedication(false);
          setRecord(false);
        }
        
    }

    const showRecord = () => {

        if(record === true){
          document.getElementById('Record')!.style.display = 'none';
          setRecord(false);
        }
        else if(record === false){
          document.getElementById('Record')!.style.display = 'block';
          document.getElementById('Medication')!.style.display = 'none';
          document.getElementById('Person')!.style.display = 'none';
          setRecord(true);
          setMedication(false);
          setPerson(false);
        }
        
    }


    return (

        <>

            <P.GlobalContainer>
                <P.Title>Bem-vindo, {Name}</P.Title>
                <P.UtilRowContainer>
                    <P.MedicationButton onClick={showMedication}><P.Icon src={pillIcon}/></P.MedicationButton>
                    <P.PersonButton onClick={showPerson}><P.Icon src={userIcon}/></P.PersonButton>
                    <P.RecordButton onClick={showRecord}><P.Icon src={prontuarioIcon}/></P.RecordButton>
                </P.UtilRowContainer>

                <P.UtilColumnContainer id='Medication'>
                  
                  <P.UtilRowContainer>
                    <P.MedicationTitle>Medicamento</P.MedicationTitle>
                    <P.MedicationTitle>Descrição</P.MedicationTitle>
                    <P.MedicationTitle>Modo de Uso</P.MedicationTitle>
                  </P.UtilRowContainer>

                    <P.UtilRowContainer id='Medicamentos'>
                      <P.MedicationText>Ibuprofeno</P.MedicationText>
                      <P.MedicationText>Anti inflamatório</P.MedicationText>
                      <P.MedicationText>tomar um a cada oito horas</P.MedicationText>
                    </P.UtilRowContainer>

                </P.UtilColumnContainer>

                <P.UtilColumnContainer id='Person'>
                  <P.UtilRowContainer>
                      <P.PersonalDiv>
                        <P.PersonalTitle>Personal</P.PersonalTitle>
                        <P.UtilRowContainer>
                          <P.PersonalTitle>First Name:</P.PersonalTitle>
                          <P.PersonalText>Gustavo</P.PersonalText>
                        </P.UtilRowContainer>

                        <P.UtilRowContainer>
                          <P.PersonalTitle>Last Name:</P.PersonalTitle>
                          <P.PersonalText>Borges</P.PersonalText>
                        </P.UtilRowContainer>

                        <P.UtilRowContainer>
                          <P.PersonalTitle>Birth:</P.PersonalTitle>
                          <P.PersonalText>20/10/2000</P.PersonalText>
                        </P.UtilRowContainer>

                        <P.UtilRowContainer>
                          <P.PersonalTitle>Sex:</P.PersonalTitle>
                          <P.PersonalText>M</P.PersonalText>
                        </P.UtilRowContainer>

                        <P.UtilRowContainer>
                          <P.PersonalTitle>Blood Type:</P.PersonalTitle>
                          <P.PersonalText>A+</P.PersonalText>
                        </P.UtilRowContainer>

                        <P.UtilRowContainer>
                          <P.PersonalTitle>Document:</P.PersonalTitle>
                          <P.PersonalText>47843513890</P.PersonalText>
                        </P.UtilRowContainer>
                        
                      </P.PersonalDiv>

                      <P.PersonalDiv>
                        <P.PersonalTitle>Address</P.PersonalTitle>
                        <P.UtilRowContainer>
                          <P.PersonalTitle>Postal Code:</P.PersonalTitle>
                          <P.PersonalText>13506460</P.PersonalText>
                        </P.UtilRowContainer>

                        <P.UtilRowContainer>
                          <P.PersonalTitle>Street</P.PersonalTitle>
                          <P.PersonalText>68 A</P.PersonalText>
                        </P.UtilRowContainer>

                        <P.UtilRowContainer>
                          <P.PersonalTitle>City:</P.PersonalTitle>
                          <P.PersonalText>Rio Claro</P.PersonalText>
                        </P.UtilRowContainer>

                        <P.UtilRowContainer>
                          <P.PersonalTitle>State:</P.PersonalTitle>
                          <P.PersonalText>SP</P.PersonalText>
                        </P.UtilRowContainer>

                        <P.UtilRowContainer>
                          <P.PersonalTitle>Number:</P.PersonalTitle>
                          <P.PersonalText>20444</P.PersonalText>
                        </P.UtilRowContainer>

                        <P.UtilRowContainer>
                          <P.PersonalTitle>Complement:</P.PersonalTitle>
                          <P.PersonalText>House</P.PersonalText>
                        </P.UtilRowContainer>
                      </P.PersonalDiv>
                    </P.UtilRowContainer>
                </P.UtilColumnContainer>

                <P.UtilColumnContainer id='Record'>
                </P.UtilColumnContainer>
            </P.GlobalContainer>
            
        </>

    );
};

export default Patient;