import styles from './prayertime.module.css';
import React, { useState, useEffect } from 'react';

const PrayerTime = ({ selectedCity, country }) => {
    const [prayerTimes, setPrayerTimes] = useState(null);
    const [calculationType, setCalculationType] = useState(4);

    const apiUrl = `https://api.aladhan.com/v1/timingsByCity?city=${selectedCity}&country=${country}&method=${calculationType}`;

    useEffect(() => {
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => setPrayerTimes(data.data.timings));
    }, [apiUrl]);

    return (
        <div className={styles.prayerTimes}>
            <div className={styles.locationText}>
                {selectedCity}, {country}
            </div>
            <ul>
                {prayerTimes &&
                    Object.entries(prayerTimes)
                        .filter(([key]) =>
                            [
                                'Fajr',
                                'Dhuhr',
                                'Asr',
                                'Maghrib',
                                'Isha',
                                'Sunrise',
                            ].includes(key)
                        )
                        .map(([key, value]) => (
                            <div key={key} className={styles.container}>
                                <div>{key}</div>
                                <div>{value}</div>
                            </div>
                        ))}
            </ul>
        </div>
    );
};

export default PrayerTime;
