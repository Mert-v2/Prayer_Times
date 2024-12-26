import React, { useState } from 'react';
import styles from './searchCountry.module.css';

const SearchCountry = ({ onSearch }) => {
    const [localCity, setLocalCity] = useState('');
    const [localCountry, setLocalCountry] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(localCity, localCountry);
    };

    return (
        <form onSubmit={handleSubmit} className={styles.searchContainer}>
            <div className={styles.label}>City</div>
            <input
                type="text"
                className={styles.customBorder}
                value={localCity}
                onChange={(e) => setLocalCity(e.target.value)}
                placeholder="Enter City"
            />

            <div className={styles.label}>Country</div>
            <input
                type="text"
                className={styles.customBorder}
                value={localCountry}
                onChange={(e) => setLocalCountry(e.target.value)}
                placeholder="Enter Country"
            />

            <button type="submit" className={styles.button}>
                Search
            </button>
        </form>
    );
};

export default SearchCountry;
