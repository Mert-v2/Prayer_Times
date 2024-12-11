import styles from './prayertime.module.css';
import React, { useState, useEffect } from 'react';

const PrayerTime = () => {
    const [prayerTimes, setPrayerTimes] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const currentDate = new Date().toISOString().split('T')[0];
    const city = 'Portsmouth';
    const country = 'GB';
    const prayerCalculationType = 4;
    const apiUrl = `https://api.aladhan.com/v1/timingsByCity/${currentDate}?city=${city}&country=${country}&method=${prayerCalculationType}`;

    // Fetch prayer times data
    useEffect(() => {
        const fetchPrayerTimes = async () => {
            setLoading(true); // Start loading
            try {
                const response = await fetch(apiUrl);
                const data = await response.json();

                if (data.status === 'OK') {
                    setPrayerTimes(data.data.timings); // Set prayer times from API
                } else {
                    setError(new Error('Failed to fetch prayer times'));
                }
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false); // Stop loading
            }
        };

        fetchPrayerTimes();
    }, [currentDate, city, country, prayerCalculationType]);

    // Handle loading and error states
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <div className={styles.prayerTimeTitle}>Prayer Time</div>
            {prayerTimes && (
                <div className={styles.prayerTimeDisplay}>
                    {Object.entries(prayerTimes).map(
                        ([prayerName, prayerTime]) => (
                            <div
                                key={prayerName}
                                className={styles.prayerTimeItem}
                            >
                                <strong>{prayerName}:</strong> {prayerTime}
                            </div>
                        )
                    )}
                </div>
            )}
            <div>
                <strong>Link:</strong> {apiUrl}
            </div>
        </div>
    );
};

export default PrayerTime;
