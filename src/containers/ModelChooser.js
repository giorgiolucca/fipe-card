import React, { Component } from 'react'
import { Jumbotron, Row, Col, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import { sdk as fipe } from 'fipe'
import Title from '../components/Title'

export default class ModelChooser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            models: []
        }
    }

    async componentDidMount() {
        const vehicle = await fipe.vehicle(this.props.match.params.type, this.props.match.params.brand)
            .findOneBy('name', this.props.match.params.name)

        const models = await fipe.vehicle(this.props.match.params.type, this.props.match.params.brand) 
            .getModels(vehicle.id)

        this.setState({
            models: models
        })
    }

    render() {
        return (
            <Jumbotron>
                <Title text="Escolha um modelo" />
                {this.state.models.map((model, i) => 
                    <Row key={model.id} style={{ marginTop: '0.8em' }}>
                        <Col>
                            <Link to={`/vehicle-card/${this.props.match.params.type}/${this.props.match.params.brand}/${this.props.match.params.name}/${this.props.match.params.id}/${model.fipe_codigo}`}>
                                <Button size='lg' block>{model.name}</Button>
                            </Link>
                        </Col>
                    </Row>                    
                )}   
            </Jumbotron>    
        )
    }
}