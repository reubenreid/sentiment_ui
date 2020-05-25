import React from 'react';
import Homepage from './homepage/Homepage.js'
import Header from './Header.js'
import ScatterMap from './map/ScatterLayer.js'
import Map from './map/Map.js'
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.scss';


const HomePage = () => <Homepage/>;
const MapPage = () => <div className="Map"><Map/></div>;
const ScatterMapPage = () => <div className="Map"><ScatterMap/></div>;

function App() {
    return (
        <Router>
            <div className="App">
                <Header className="Header"/>
                <Route exact path="/" component={HomePage}/>
                <Route path="/map" component={MapPage}/>
                <Route path="/scattermap" component={ScatterMapPage}/>
            </div>
        </Router>
    );
}

export default App;


