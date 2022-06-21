import React, { useState } from 'react';
import * as P from './styles';

const Patient: React.FC = () => {

    const Name = 'Gustav'

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
                <P.Title>Welcome, {Name}</P.Title>
                <P.UtilRowContainer>
                    <P.MedicationButton onClick={showMedication}>Medication</P.MedicationButton>
                    <P.PersonButton onClick={showPerson}>Person Data</P.PersonButton>
                    <P.RecordButton onClick={showRecord}>Record</P.RecordButton>
                </P.UtilRowContainer>

                <P.UtilColumnContainer id='Medication'>
                  <P.UtilRowContainer>
                    <P.MedicationDiv>
                      <P.MedicationTitle>Medicamento</P.MedicationTitle>
                      <P.MedicationText>Ibuprofeno</P.MedicationText>
                    </P.MedicationDiv>
                    <P.MedicationDiv>
                      <P.MedicationTitle>Descrição</P.MedicationTitle>
                      <P.MedicationText>Anti inflamatório</P.MedicationText>
                    </P.MedicationDiv>
                    <P.MedicationDiv>
                      <P.MedicationTitle>Modo de Uso</P.MedicationTitle>
                      <P.MedicationText>tomar um a cada oito horas</P.MedicationText>
                    </P.MedicationDiv>
                  </P.UtilRowContainer>
                </P.UtilColumnContainer>

                <P.UtilColumnContainer id='Person'>
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
                    </P.PersonalDiv>

                    <P.PersonalDiv>
                      <P.PersonalTitle>Document</P.PersonalTitle>
                      <P.UtilRowContainer>
                        <P.PersonalTitle>Document Type:</P.PersonalTitle>
                        <P.PersonalText>CPF</P.PersonalText>
                      </P.UtilRowContainer>

                      <P.UtilRowContainer>
                        <P.PersonalTitle>Document Number:</P.PersonalTitle>
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
                        <P.PersonalTitle>Street Number</P.PersonalTitle>
                        <P.PersonalText>68 A</P.PersonalText>
                      </P.UtilRowContainer>

                      <P.UtilRowContainer>
                        <P.PersonalTitle>District:</P.PersonalTitle>
                        <P.PersonalText>Sei lá</P.PersonalText>
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
                        <P.PersonalTitle>Country:</P.PersonalTitle>
                        <P.PersonalText>Brazil</P.PersonalText>
                      </P.UtilRowContainer>

                      <P.UtilRowContainer>
                        <P.PersonalTitle>Complement:</P.PersonalTitle>
                        <P.PersonalText>House 2044</P.PersonalText>
                      </P.UtilRowContainer>
                    </P.PersonalDiv>
                </P.UtilColumnContainer>

                <P.UtilColumnContainer id='Record'>
                    <P.UtilRowContainer>
                      
                    </P.UtilRowContainer>
                </P.UtilColumnContainer>
            </P.GlobalContainer>
            
        </>

    );
};

export default Patient;