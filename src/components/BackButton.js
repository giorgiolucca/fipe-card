import React, { Component } from 'react'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'

export default class BackButton extends Component {
    render() {
        return (
            <Link to={this.props.route}>
                <Button color="primary">Voltar</Button>
            </Link>
        )
    }
}
