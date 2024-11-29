import React from 'react';
import styles from './prayertime.module.css';
import React, { useState, useEffect } from 'react';

const getPrayerTime = () => {
    const [prayerTimes, setPrayerTimes] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const currentDate = new Date().toISOString().split('T')[0];
    const city = 'Portsmouth';
    const number = 4;

    useEffect(() => {
        const apiUrl = `https://api.aladhan.com/v1/timingsByCity/${currentDate}?city=${city}&method=${number}`;
    });
};

const PrayerTime = () => {
    return (
        <>
            <div className={styles.prayerTimeTitle}>Prayer Time</div>
        </>
    );
};

export default PrayerTime;
