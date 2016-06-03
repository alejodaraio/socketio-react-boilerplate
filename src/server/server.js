import express from 'express';
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import counterApp from '../../reducers'
import {renderToString} from 'react-dom/server'
import App from './../../containers/App'

const app = express();
const port = 3000;


app.use(express.static('public'));

// This is fired very time the server side receives a request
app.use(handleRender);

// We are going to fill these out in the sections to follow
function handleRender(req, res) {

    // Create a new Redux store instance
    const store = createStore(counterApp);

    // Render the component to a string
    const html = renderToString(
        <Provider store={store}>
            <App />
        </Provider>
    );

    // Send the rendered page back to the client
    res.send(renderFullPage(html))
}

function renderFullPage(html) {
    return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Redux Server Side</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
    `
}

app.listen(port, function () {
    console.log('server on');
});