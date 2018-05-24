import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Intro from './containers/Intro'
import Brand from './containers/Brand'
import Vehicle from './containers/Vehicle';
import VehicleTypeChooser from './containers/VehicleTypeChooser'
import VehicleCard from './containers/VehicleCard'
import ModelChooser from './containers/ModelChooser';

import { Route } from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <div>
                <Route exact path={`${process.env.PUBLIC_URL}/`} component={Intro} />
                <Route path={`${process.env.PUBLIC_URL}/brand/:type`} component={Brand} />
                <Route path={`${process.env.PUBLIC_URL}/vehicle-types`} component={VehicleTypeChooser} />
                <Route path={`${process.env.PUBLIC_URL}/vehicle/:type/:brand`} component={Vehicle} />
                <Route path={`${process.env.PUBLIC_URL}/vehicle-card/:type/:brand/:name/:id/:year`} component={VehicleCard} />
                <Route path={`${process.env.PUBLIC_URL}/vehicle-models/:type/:brand/:id/:name`} component={ModelChooser} />
            </div>
        )
    }
}

export default App;
