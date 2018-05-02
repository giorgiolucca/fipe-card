import React, { Component } from 'react'
import Title from '../components/Title'
import Paragraph from '../components/Paragraph'
import { Jumbotron, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

export default class Intro extends Component {
    render() {
        return (
            <Jumbotron>
                <Title text="Fipe" size="4" />
                <Paragraph text="Seja bem vindo! Através dessa ferramenta, você poderá obter informações da tabela Fipe de forma simples e rápida" />
                <Link to='/vehicle-types'>
                    <Button color="primary">Começar!</Button>
                </Link>
            </Jumbotron>    
        )
    }
}