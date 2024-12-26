import React, { useState } from 'react';
import styles from './searchCountry.module.css';

const SearchCountry = () => {
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');

    return (
        <div className={styles.searchContainer}>
            <div className={styles.label}>City</div>
            <input
                type="text"
                className={styles.customBorder}
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter City"
            />

            <div className={styles.label}>Country</div>
            <input
                type="text"
                className={styles.customBorder}
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                placeholder="Enter Country"
            />

            <button className={styles.button}>Search</button>
        </div>
    );
};

export default SearchCountry;
