import React from 'react';
import styles from './navbar.module.css';

const Navbar = () => {
    return (
        <div className={styles.container}>
            <ul className={styles.ul}>
                <div className={styles.leftItem}>
                    <li className={styles.li}>
                        Menu
                        <div className={styles.dropdownContent}>
                            <a href="#link1"> Link 1</a>
                            <a href="#link2">Link 2</a>
                            <a href="#link3">Link 3</a>
                        </div>
                    </li>
                </div>
                <div className="centerItem">
                    <li className={`${styles.li} ${styles.centerItemLi}`}>
                        Prayer Times
                    </li>
                </div>
                <div className={styles.rightItems}>
                    <li className={styles.li}>Empty</li>
                </div>
            </ul>
        </div>
    );
};

export default Navbar;
