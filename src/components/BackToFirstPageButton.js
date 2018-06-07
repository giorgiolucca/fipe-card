import React from 'react'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'

const BackToFirstPageButton = props => (
    <Link to='/'>
        <Button color="primary">{ props.children || 'Início' }</Button>
    </Link>
)

export default BackToFirstPageButton