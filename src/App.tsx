import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import PageRoutes from './routes';
import Header from '../src/components/Header'

const App: React.FC = () => (
    <>
        <Router>
            <Header />
            <PageRoutes />
        </Router>
    </>
);

export default App;