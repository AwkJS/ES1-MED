import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import RegisterPatient from '../pages/RegisterPatient';
import Patient from '../pages/Patient';
import Doctor from '../pages/Doctor';


const PageRoutes: React.FC = () => (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Login' element={<Login/>} />
            <Route path='Patient' element={<Patient/>} />
            <Route path='Doctor' element={<Doctor/>} />
            <Route path='RegisterPatient' element={<RegisterPatient/>} />
        </Routes>

);

export default PageRoutes;
