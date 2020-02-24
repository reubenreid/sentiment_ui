import React from 'react';
import TextField from '@material-ui/core/TextField'

function Homepage() {
    return (
        <div>
            Homepage
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="hashtag-field" label="Outlined" variant="outlined" />
            </form>
        </div>
    )
}

export default Homepage;