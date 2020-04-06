import React from 'react';
import DeckGL from '@deck.gl/react';
import {HexagonLayer} from '@deck.gl/aggregation-layers';
import {StaticMap} from 'react-map-gl';
import {csv} from 'd3';
import csvData from '../data/uk_online_data_full.csv';


const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoicmV1YmVucmVpZCIsImEiOiJjazdidWRldWwwN2g3M2hwYTV4czhwMDB1In0.iPL0MGIDZ864MPRG-wDarg';

const initialViewState = {
    longitude: -0.15012839,
    latitude: 51.50518452,
    zoom: 10,
    minZoom: 1,
    maxZoom: 15,
    pitch: 40.5,
    bearing: -27.396674584323023,
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

// const data =
//     [
//         {COORDINATES: [-0.15012839, 51.50518452] [-0.1012839, 48.50518452]},
//
//     ]

const data = [-0.15012839, 51.50518452]


class Map extends React.Component {

    constructor(props) {
        super(props);
        this.state = {data: ''}
    }

    componentDidMount() {
        this.parseFile()
    }


    parseFile = () => {
        csv(csvData, (err, data) => {
            if (err) {
                console.log(err)
            }
            this.setState({data: data.map( d => [d.Longitude, d.Latitude]
                )
            })
        });
        console.log(this.state.data)
    }

    render() {

        const layer = new HexagonLayer({
            id: 'hexagon-layer',
            data: this.state.data !== '' ? this.state.data: data,
            //data: data,
            elevationRange: [0, 3000],
            elevationScale: 50,
            extruded: true,
            radius: 1000,
            coverage: 1,
            getPosition: d => d.COORDINATES
        });

        console.log(data)
        console.log(this.state.data)

        return (
            <DeckGL
                initialViewState={initialViewState}
                controller={true}
                layers={layer}
                width={1347}
                height={640}
            >
                {console.log(layer)}
                <StaticMap  {...viewPort}
                            mapStyle={'mapbox://styles/mapbox/dark-v9'}
                            preventStyleDiffing={true}
                            mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}/>
            </DeckGL>
        );
    }
};

export default Map;