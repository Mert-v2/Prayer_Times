import React from 'react';
import styles from './navbar.module.css';

const navbar = () => {
    return (
        <>
            <div className={styles.container}>
                <ul className={styles.ul}>
                    <div className={styles.leftItems}>
                        <li className={styles.li}>Menu</li>
                    </div>
                    <div className="centerItem">
                        <li className={styles.li}>Prayer Times</li>
                    </div>
                    <div className={styles.rightItems}>
                        <li className={styles.li}>Empty</li>
                        <li className={styles.li}>Empty</li>
                    </div>
                </ul>
            </div>
        </>
    );
};

export default navbar;
