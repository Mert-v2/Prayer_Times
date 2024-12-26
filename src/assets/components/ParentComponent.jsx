import React, { useState } from 'react';
import SearchCountry from './SearchCountry';
import PrayerTime from './PrayerTime';

const ParentComponent = () => {
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');

    const defaultCity = 'Portsmouth';
    const defaultCountry = 'GB';

    const currentCity = city || defaultCity;
    const currentCountry = country || defaultCountry;

    const handleSearch = (newCity, newCountry) => {
        setCity(newCity);
        setCountry(newCountry);
    };

    return (
        <div>
            <SearchCountry onSearch={handleSearch} />
            <PrayerTime selectedCity={currentCity} country={currentCountry} />
        </div>
    );
};

export default ParentComponent;
