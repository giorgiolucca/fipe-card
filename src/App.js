import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Intro from './containers/Intro'
import Brand from './containers/Brand'
import Vehicle from './containers/Vehicle';
import VehicleTypeChooser from './containers/VehicleTypeChooser'
import VehicleCard from './containers/VehicleCard'
import ModelChooser from './containers/ModelChooser';

import { Route } from 'react-router-dom'
import { AnimatedSwitch } from 'react-router-transition' 

class App extends Component {
    render() {
        return (
            <AnimatedSwitch atEnter={{ opacity: 0.8 }}
                atLeave={{ opacity: 0 }}
                atActive={{ opacity: 1 }}
                className="route-wrapper">
                    <Route exact path='/' component={Intro} />
                    <Route path='/brand/:type' component={Brand} />
                    <Route path='/vehicle-types' component={VehicleTypeChooser} />
                    <Route path='/vehicle/:type/:brand' component={Vehicle} />
                    <Route path='/vehicle-card/:type/:brand/:name/:id/:year' component={VehicleCard} />
                    <Route path='/vehicle-models/:type/:brand/:id/:name' component={ModelChooser} />
            </AnimatedSwitch>
        )
    }
}

export default App;
