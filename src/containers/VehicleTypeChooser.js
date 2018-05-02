import React, { Component } from 'react'
import { Jumbotron, Row, Col, Button } from 'reactstrap'
import Title from '../components/Title'
import BackButton from '../components/BackButton'
import { Link } from 'react-router-dom'

export default class VehicleTypeChooser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            types: [
                {
                    name: 'car',
                    label: 'Carro',
                    color: 'primary'
                },
                {
                    name: 'truck',
                    label: 'Caminhão',
                    color: 'success'
                }, 
                {
                    name: 'motorcycle',
                    label: 'Moto',
                    color: 'secondary'
                }
            ]
        }
    }

    render() {
        return (
            <Jumbotron>
                <Title text="Escolha um tipo de veículo" />
                <div style={{ marginTop: '2.0em' }}>
                    {this.state.types.map((type, i) => 
                        <Row key={type.name} style={{ marginTop: '0.8em' }}>
                            <Col>
                                <Link to={`/brand/${type.name}`}>
                                    <Button size='lg' block color={type.color}>{type.label}</Button>
                                </Link>    
                            </Col>
                        </Row>
                    )}
                </div>
                <Row style={{ marginTop: '2.0em' }}>
                    <Col style={{ textAlign: 'right' }}>
                        <BackButton route='/' />
                    </Col>
                </Row>
            </Jumbotron>    
        )
    }
}