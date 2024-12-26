import React from 'react';
import './assets/components/globalStyles.css';
import Navbar from './assets/components/Navbar.jsx';
import ParentComponent from './assets/components/ParentComponent.jsx';

const App = () => {
    return (
        <>
            <Navbar />
            <ParentComponent />
        </>
    );
};

export default App;
