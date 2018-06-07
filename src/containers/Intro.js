import React from 'react'
import Title from '../components/Title'
import Paragraph from '../components/Paragraph'
import { Jumbotron, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

const Intro = () => (
    <Jumbotron>
        <Title size="4">Fipe</Title>
        <Paragraph>Seja bem vindo! Através dessa ferramenta, você poderá obter informações da tabela Fipe de forma simples e rápida</Paragraph>
        <Link to='/vehicle-types'>
            <Button color="primary">Começar!</Button>
        </Link>
    </Jumbotron>    
)

export default Intro