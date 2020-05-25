import React from 'react';
import styles from './Homepage.module.scss'
import HomeLogo from '../images/Home_logo.png'
import './Homepage.module.scss'
import Searchbar from './Searchbar.js'

function Homepage() {
    return (
        <div className={styles.maindiv}>
            <div className={styles.hashicon}>
                <img src={HomeLogo}/>
            </div>
            <Searchbar/>
        </div>
    )
}

export default Homepage;