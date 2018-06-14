import React from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import App from './App'
import { HashRouter } from 'react-router-dom'
import { Container } from 'reactstrap'
import GitHubForkRibbon from 'react-github-fork-ribbon'

ReactDOM.render(
    <div>
        <GitHubForkRibbon href="//github.com/giorgiolucca/fipe-card"
            target="_blank"
            position="right">
            Fork me on GitHub
        </GitHubForkRibbon>
        <HashRouter>
            <Container style={{ paddingTop: '2em' }}>
                <App />
            </Container>
        </HashRouter>
    </div>,
    document.getElementById('root')
);
