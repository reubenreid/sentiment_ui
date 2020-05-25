import React from 'react';
import styles from './Homepage.module.scss'
import TextField from '@material-ui/core/TextField'
import Rectangle from '../images/rectangle.svg'
import fileDownload from 'js-file-download'

class Searchbar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {value: '', error: false}
        this._handleTextFieldChange = this._handleTextFieldChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this) // binding doesnt cause page refresh, arrow function to cause refresh
    }

    handleSubmit(event) {
        console.log(this.state.value);
        event.preventDefault();

        if (!this.state.error) {fileDownload(this.state.value, 'hashtag.txt')}
        // fs.mkdir('/home', function() {
        //     fs.writeFile('/home/hello-world.txt', 'Hello world!\n', function() {
        //         fs.readFile('/home/hello-world.txt', 'utf-8', function(err, data) {
        //             console.log(data);
        //         });
        //     });
        // });

        // WriteFileP(`${__dirname}C:/Users/Reuben/Documents/GitHub/sentiment_analysis_engine/web_scraper/hashtag.txt`, "bonk", (err, data) => {
        //     console.log(err || data);
        // });
    }

    _handleTextFieldChange(event) {
        this.setState({
            value: event.target.value,
            error: event.target.value.includes(' ')
        });
    }

    render() {
        return (
            <div className={styles.searchbar}>
                <div className={styles.rectangle}>
                    <img src={Rectangle}/>
                </div>
                <div className={styles.inputfield}>
                    <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                        <TextField id="standard-basic" label="#" value={this.state.value}
                                   onChange={this._handleTextFieldChange} error={this.state.error}/>
                    </form>
                </div>

            </div>
        );
    }
}

export default Searchbar;