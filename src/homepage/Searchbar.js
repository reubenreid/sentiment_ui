import React from 'react';
import styles from './Homepage.module.scss'
import TextField from '@material-ui/core/TextField'
import {Input} from 'semantic-ui-react'

const inputProps = {
    height: 200,
    width: 800,
};

function Searchbar() {
    return (
        <div className={styles.searchbar}>
            <Input label='#' placeholder='hashtag'/>
        </div>
    );
}

export default Searchbar;