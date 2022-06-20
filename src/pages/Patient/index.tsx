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
                    <p>Ibuprofeno</p>
                    <p>Nimesulida</p>
                    <p>Chá</p>
                </P.UtilColumnContainer>

                <P.UtilColumnContainer id='Person'>
                    <p>Joséfino</p>
                    <p>18 y</p>
                </P.UtilColumnContainer>

                <P.UtilColumnContainer id='Record'>
                    <p>Dr.Pato</p>
                    <p>20/10/2000</p>
                </P.UtilColumnContainer>
            </P.GlobalContainer>
            
        </>

    );
};

export default Patient;