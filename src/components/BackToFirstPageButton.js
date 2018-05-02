import React, { Component } from 'react'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'

export default class BackToFirstPageButton extends Component {
    render() {
        return (
            <Link to='/'>
                <Button color="primary">Início</Button>
            </Link>
        )
    }
}
