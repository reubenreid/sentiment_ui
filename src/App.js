import React from 'react';
import Homepage from './homepage/Homepage.js'
import Header from './Header.js'

import './App.scss';

function App() {
    return (
        <div className="App">
            <Header/>
            <Homepage/>
        </div>
    );
}

export default App;
