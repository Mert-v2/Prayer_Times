import React from 'react';
import Navbar from './assets/components/navbar';

let name = 'Test';

const App = () => {
    return (
        <>
            <Navbar />
            <p>{name}</p>
        </>
    );
};

export default App;
