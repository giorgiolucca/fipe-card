import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'reactstrap' 
import Intro from './containers/Intro'
import Brand from './containers/Brand'
import Vehicle from './containers/Vehicle';
import VehicleTypeChooser from './containers/VehicleTypeChooser'
import VehicleCard from './containers/VehicleCard'
import ModelChooser from './containers/ModelChooser';
import GitHubForkRibbon from 'react-github-fork-ribbon';

import { Route, Switch } from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <div>
                <GitHubForkRibbon href="//github.com/giorgiolucca/fipe-card"
                    target="_blank"
                    position="right">
                    Fork me on GitHub
                </GitHubForkRibbon>
                <Switch>
                    <Container style={{ paddingTop: '2em' }}>
                        <Route exact path='/' component={Intro} />
                        <Route path='/brand/:type' component={Brand} />
                        <Route path='/vehicle-types' component={VehicleTypeChooser} />
                        <Route path='/vehicle/:type/:brand' component={Vehicle} />
                        <Route path='/vehicle-card/:type/:brand/:name/:id/:year' component={VehicleCard} />
                        <Route path='/vehicle-models/:type/:brand/:id/:name' component={ModelChooser} />
                    </Container>
                </Switch>
            </div>
        )
    }
}

export default App;
