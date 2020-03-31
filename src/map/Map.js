import React from 'react';
import DeckGL from '@deck.gl/react';
import {HexagonLayer} from '@deck.gl/aggregation-layers';
import {StaticMap} from 'react-map-gl';


const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoicmV1YmVucmVpZCIsImEiOiJjazdidWRldWwwN2g3M2hwYTV4czhwMDB1In0.iPL0MGIDZ864MPRG-wDarg';

const initialViewState = {
    longitude: -122.41669,
    latitude: 37.7853,
    zoom: 10,
    minZoom: 5,
    maxZoom: 15,
    pitch: 40.5,
    bearing: 0,
    width: 300,
    height: 300,
};

const viewPort = {
    width: 300,
    height: 300,
    latitude: 21.1458,
    longitude: 79.0882,
    zoom: 4
}

const data =
    [
        {COORDINATES: [-122.42177834, 37.78346622]},
    ]


class Map extends React.Component {
    render() {

        const layer = new HexagonLayer({
            id: 'hexagon-layer',
            data,
            pickable: true,
            extruded: true,
            radius: 200,
            elevationScale: 4,
            getPosition: d => d.COORDINATES,
            onHover: ({object, x, y}) => {
                const tooltip = `${object.centroid.join(', ')}\nCount: ${object.points.length}`;
                /* Update tooltip
                   http://deck.gl/#/documentation/developer-guide/adding-interactivity?section=example-display-a-tooltip-for-hovered-object
                */
            }
        });

        return (
            <DeckGL
                initialViewState={initialViewState}
                controller={true}
                layers={layer}
            >
                <StaticMap {...viewPort} mapStyle={'mapbox://styles/mapbox/dark-v9'}
                           mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}/>
            </DeckGL>
        );
    }
};

export default Map;