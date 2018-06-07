import React, { Component } from 'react'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'

const BackButton = props => (
    <Link to={props.route}>
        <Button color="primary">{ props.children || 'Voltar' }</Button>
    </Link>
)

export default BackButton