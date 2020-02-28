import React from 'react';
import styles from './Homepage.module.scss'
import HashIcon from '../images/hash.svg'
import './Homepage.module.scss'
import Searchbar from './Searchbar.js'

function Homepage() {
    return (
        <div>
            <div className={styles.hashicon}>
                <img src={HashIcon}/>
            </div>
            <div className={styles.maintext}>
                This is some example text right length
            </div>
            <Searchbar/>
        </div>
    )
}

export default Homepage;