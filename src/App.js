import React from 'react';
import Homepage from './homepage/Homepage.js'
import Header from './Header.js'
import Map from './map/Map.js'
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.scss';


const HomePage = () => <Homepage/>;
const MapPage = () => <div className="Map"><Map/></div>;

function App() {
    return (
        <Router>
            <div className="App">
                <Header className="Header"/>
                <Route exact path="/" component={HomePage}/>
                <Route path="/map" component={MapPage}/>
            </div>
        </Router>
    );
}

export default App;
