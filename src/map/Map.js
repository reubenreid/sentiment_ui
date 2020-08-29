import React from 'react';
import DeckGL from '@deck.gl/react';
import {HexagonLayer} from '@deck.gl/aggregation-layers';
import {StaticMap} from 'react-map-gl';
import {AmbientLight, PointLight, LightingEffect} from '@deck.gl/core';
import jsonData from '../data/manhattan.json';
import csvData from '../data/uk_online_data_full_conv.json'


const MAPBOX_ACCESS_TOKEN = '******';

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

const INITIAL_VIEW_STATE = {
    longitude: -0.45988083,
    latitude: 51.46971536,
    zoom: 11,
    maxZoom: 16,
    pitch: 40.5,
    bearing: -27.396674584323023
};

const colorRange = [
    [1, 152, 189],
    [73, 227, 206],
    [216, 254, 181],
    [254, 237, 177],
    [254, 173, 84],
    [209, 55, 78]
];

const viewPort = {
    width: 300,
    height: 300,
    latitude: 21.1458,
    longitude: 79.0882,
    zoom: 4
}

const elevationScale = {min: 1, max: 50};


class Map extends React.Component {

    static get defaultColorRange() {
        return colorRange;
    }

    constructor(props) {
        super(props);
        this.state = {
            elevationScale: elevationScale.min
        };
    }

    _renderLayers() {
        const {
            data = csvData,
            radius = 1000,
            //radius = 25,
            coverage = 1,
            onHover = "2",
        } = this.props;

        return [
            new HexagonLayer({
                id: 'hexagon-layer',
                data: data,
                getPosition: d => [d[0], d[1], 0],
                colorRange,
                coverage,
                elevationRange: [0, 3000],
                elevationScale: data && data.length ? 50 : 0,
                extruded: true,
                onHover: this.props.onHover,
                pickable: Boolean(this.props.onHover),
                radius,
                material,
                transitions: {
                    elevationScale: 3000
                }
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

export default Map;
