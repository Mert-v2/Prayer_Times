import React from 'react';
import './assets/components/globalStyles.css';

import Navbar from './assets/components/navbar';
import PrayerTime from './assets/components/PrayerTime';
import SearchCountry from './assets/components/SearchCountry';

const App = () => {
    return (
        <>
            <Navbar />
            <SearchCountry />
            <PrayerTime />
        </>
    );
};

export default App;
