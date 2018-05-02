import React, { Component } from 'react'

export default class Paragraph extends Component {
    render() {
        return (
            <p className="lead">{this.props.text}</p>
        )
    }
}