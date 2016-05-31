import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, browserHistory} from  'react-router'
import io from 'socket.io-client'
import ConnectorWrapper from './connectors/Socket/SocketConnector'
import Main from './containers/Main/Main.jsx'

let connection = new ConnectorWrapper(io, 'http://localhost:3000').connect();

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Main}/>
    </Router>,
    document.getElementById('container')
);