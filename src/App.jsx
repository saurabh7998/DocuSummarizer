import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar.jsx';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='/dashboard' element={<Dashboard />} />
            </Routes>
        </Router>
    );
};
export default App;