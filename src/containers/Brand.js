import React, { Component } from 'react'
import { Jumbotron, Row, Col, Button } from 'reactstrap'
import Title from '../components/Title'
import BackButton from '../components/BackButton'
import BrandSearchBar from '../components/BrandSearchBar'
import { Link } from 'react-router-dom'

export default class Brand extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedBrand: null,
            buttonIsEnabled: false
        }
    }

    typingHandler(data) {
        this.setState({
            selectedBrand: null
        })
    }

    async selectBrandHandler(data) {
        this.setState({
            selectedBrand: data
        })
    }

    render() {
        return (
            <Jumbotron>
                <Title size="7">"Informe a marca"</Title>
                <Row>
                    <Col>
                        <div className="suggestions">
                            <BrandSearchBar onTyping={this.typingHandler.bind(this)}
                                onSelectBrand={this.selectBrandHandler.bind(this)}
                                vehicleType={this.props.match.params.type} />
                        </div>
                    </Col>
                </Row>
                <Row style={{ marginTop: '1em' }}>
                    <Col>
                        {
                            null !== this.state.selectedBrand &&
                                <Link to={`/vehicle/${this.props.match.params.type}/${this.state.selectedBrand.name}`}>
                                    <Button size='lg' block>Próximo</Button>
                                </Link>
                        }
                    </Col>
                </Row>
                <Row style={{ marginTop: '2.0em' }}>
                    <Col>
                        <BackButton route='/vehicle-types' />
                    </Col>
                </Row>
            </Jumbotron>
        )
    }
}
