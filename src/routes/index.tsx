import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Registration from '../pages/Registration';
import Patient from '../pages/Patient';


const PageRoutes: React.FC = () => (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Login' element={<Login/>} />
            <Route path='SignUp' element={<Registration/>} />
            <Route path='Patient' element={<Patient/>} />
        </Routes>

);

export default PageRoutes;
