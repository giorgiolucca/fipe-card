import React, { Component } from 'react'
import { Jumbotron, Row, Col, Button } from 'reactstrap'
import Title from '../components/Title'
import BackButton from '../components/BackButton'
import VehicleSearchBar from '../components/VehicleSearchBar'
import { Link } from 'react-router-dom'

export default class Vehicle extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedVehicle: null,
            buttonIsEnabled: false
        }
    }

    typingHandler(data) {
        this.setState({
            selectedVehicle: null
        })
    }

    async selectVehicleHandler(data) {
        this.setState({
            selectedVehicle: data
        })
    }

    render() {
        return (
            <Jumbotron>
                <Title size="7">Informe o modelo do veículo</Title>
                <Row>
                    <Col>
                        <div className="suggestions">
                            <VehicleSearchBar onTyping={this.typingHandler.bind(this)}
                                onSelectVehicle={this.selectVehicleHandler.bind(this)}
                                vehicleType={this.props.match.params.type}
                                brandName={this.props.match.params.brand} />
                        </div>
                    </Col>
                </Row>
                <Row style={{ marginTop: '1em' }}>
                    <Col>
                        {
                            null !== this.state.selectedVehicle &&
                                <Link to={`/vehicle-models/${this.props.match.params.type}/${this.props.match.params.brand}/${this.state.selectedVehicle.id}/${this.state.selectedVehicle.fipe_name}`}>
                                    <Button size='lg' block>Próximo</Button>
                                </Link>
                        }
                    </Col>
                </Row>
                <Row style={{ marginTop: '2.0em' }}>
                    <Col>
                        <BackButton route={`/brand/${this.props.match.params.type}`} />
                    </Col>
                </Row>
            </Jumbotron>
        )
    }
}
