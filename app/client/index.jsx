import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from  'react-router';

import Main from './containers/Main/Main.jsx';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Main} />
    </Router>,
    document.getElementById('container')
);