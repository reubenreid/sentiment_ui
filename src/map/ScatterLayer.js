import React from 'react';
import DeckGL from '@deck.gl/react';
import {ScatterplotLayer} from '@deck.gl/layers';
import {StaticMap} from 'react-map-gl';
import {csv} from 'd3';
import csvData from '../data/uk_online_data_full.csv';


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

const DATA_URL = 'https://raw.githubusercontent.com/uber-common/deck.gl-data/master/examples/scatterplot/manhattan.json';


class Map extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {data: ''}
    // }

    // componentDidMount() {
    //     this.parseFile()
    // }


    // parseFile = () => {
    //     csv(csvData, (err, data) => {
    //         if (err) {
    //             console.log(err)
    //         }
    //         this.setState({data: data.map( d => [d.Longitude, d.Latitude]
    //             )
    //         })
    //     });
    //     console.log(this.state.data)
    // }

    _renderLayers() {
        const {
            data = DATA_URL,
            radius = 30,
            maleColor = MALE_COLOR,
            femaleColor = FEMALE_COLOR
        } = this.props;

        return [
            new ScatterplotLayer({
                id: 'scatter-plot',
                data,
                radiusScale: radius,
                radiusMinPixels: 0.25,
                getPosition: d => [d[0], d[1], 0],
                getFillColor: d => (d[2] === 1 ? maleColor : femaleColor),
                getRadius: 1,
                updateTriggers: {
                    getFillColor: [maleColor, femaleColor]
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