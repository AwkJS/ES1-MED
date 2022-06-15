import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';


const PageRoutes: React.FC = () => (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Login' element={<Login/>} />
        </Routes>

);

export default PageRoutes;
