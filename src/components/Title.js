import React, { Component } from 'react'

export default class Title extends Component {
    render() {
        return (
            <h1 className={`display-${this.props.size}`}>{this.props.text}</h1>
        )
    }
}