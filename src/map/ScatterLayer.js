import React from 'react';
import DeckGL from '@deck.gl/react';
import {ScatterplotLayer} from '@deck.gl/layers';
import {StaticMap} from 'react-map-gl';
import {AmbientLight, PointLight, LightingEffect} from '@deck.gl/core';
import {csv} from 'd3';
import jsonData from '../data/manhattan.json';


const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoicmV1YmVucmVpZCIsImEiOiJjazdidWRldWwwN2g3M2hwYTV4czhwMDB1In0.iPL0MGIDZ864MPRG-wDarg';

const INITIAL_VIEW_STATE = {
    longitude: -74,
    latitude: 40.7,
    zoom: 11,
    maxZoom: 16,
    pitch: 0,
    bearing: 0
};

const MALE_COLOR = [0, 128, 255];
const FEMALE_COLOR = [255, 0, 128];


const viewPort = {
    width: 300,
    height: 300,
    latitude: 21.1458,
    longitude: 79.0882,
    zoom: 4
}

const ambientLight = new AmbientLight({
    color: [255, 255, 255],
    intensity: 1.0
});

const pointLight1 = new PointLight({
    color: [255, 255, 255],
    intensity: 0.8,
    position: [-0.144528, 49.739968, 80000]
});

const pointLight2 = new PointLight({
    color: [255, 255, 255],
    intensity: 0.8,
    position: [-3.807751, 54.104682, 8000]
});

const lightingEffect = new LightingEffect({ambientLight, pointLight1, pointLight2});

const material = {
    ambient: 0.64,
    diffuse: 0.6,
    shininess: 32,
    specularColor: [51, 51, 51]
};

class ScatterMap extends React.Component {

    _renderLayers() {
        const {
            data = jsonData,
            radius = 30,
            redColour = MALE_COLOR,
            blueColour = FEMALE_COLOR
        } = this.props;

        return [
            new ScatterplotLayer({
                id: 'scatter-plot',
                data,
                radiusScale: radius,
                radiusMinPixels: 0.25,
                getPosition: d => [d[0], d[1], 0],
                getFillColor: d => (d[2] === 1 ? redColour : blueColour),
                getRadius: 1,
                updateTriggers: {
                    getFillColor: [redColour, blueColour]
                },
                material,
            })
        ];
    }

    render() {
        return (
            <DeckGL
                initialViewState={INITIAL_VIEW_STATE}
                controller={true}
                layers={this._renderLayers()}
                width={1347}
                height={640}
                effects={[lightingEffect]}
            >
                <StaticMap  {...viewPort}
                            reuseMaps
                            mapStyle={'mapbox://styles/mapbox/dark-v9'}
                            mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}/>
            </DeckGL>
        );
    }
};

export default ScatterMap;