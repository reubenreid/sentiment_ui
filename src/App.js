import React from 'react';
import Homepage from './homepage/Homepage.js'
import Header from './Header.js'
import Map from './map/Map.js'

import './App.scss';

function App() {
    return (
        <div className="App">
            <Header/>
            {/*<Homepage/>*/}
            <div className="Map">
                <Map/>
            </div>
        </div>
    );
}

export default App;
