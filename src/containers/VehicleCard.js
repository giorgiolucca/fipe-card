import React, { Component } from 'react'

import { Container, Card, CardBody, CardText, Row, Col, Jumbotron } from 'reactstrap'
import { sdk as fipe } from 'fipe'
import Title from '../components/Title'
import BackToFirstPageButton from '../components/BackToFirstPageButton'
import autoBind from 'react-autobind'

export default class VehicleCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            reference: null,
            model_year: null,
            fuel: null,
            brand: null,
            price: null,
            description: null
        }

        autoBind(this)
    }

    async componentDidMount() {
        const car = await fipe.vehicle(this.props.match.params.type, this.props.match.params.brand)
            .getYearModel(this.props.match.params.id, this.props.match.params.year)

        this.setState({
            reference: car.referencia,
            model_year: car.ano_modelo,
            fuel: car.combustivel,
            brand: car.marca,
            price: car.preco,
            description: car.veiculo
        })
    }

    render() {
        return (
            <div className="App">
                <Jumbotron>
                    <Container>
                        <Row>
                            <Col>
                                <Title text="Informações do veículo" size="7" />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Card>
                                    <CardBody>
                                        <CardText>
                                            <strong>Referencia:</strong> {this.state.reference}
                                        </CardText>
                                        <CardText>
                                            <strong>Ano do Modelo:</strong> {this.state.model_year}
                                        </CardText>
                                        <CardText>
                                            <strong>Combustível:</strong> {this.state.fuel}
                                        </CardText>
                                        <CardText>
                                            <strong>Marca:</strong> {this.state.brand}
                                        </CardText>
                                        <CardText>
                                            <strong>Valor de Mercado:</strong> {this.state.price}
                                        </CardText>
                                        <CardText>
                                            <strong>Descrição:</strong> {this.state.description}
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: '2.0em' }}>
                            <Col>
                                <BackToFirstPageButton route='/' />
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}
