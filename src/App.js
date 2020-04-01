import React from 'react';
import Homepage from './homepage/Homepage.js'
import Header from './Header.js'
import Map from './map/Map.js'
import {BrowserRouter as Router, Route} from "react-router-dom";

import './App.scss';

const HomePage = () => <Homepage/>;
const MapPage = () => <Map/>;

function App() {
    return (
        <Router>
            <div className="App">
                <Header className="Header"/>
                <Route exact path="/" component={HomePage}/>
                <div className="Map">
                    <Route path="/map" component={MapPage}/>
                </div>
            </div>
        </Router>
    );
}

export default App;
