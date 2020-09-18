// Import resources
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";


// async function getComponent() {
//     const element = document.createElement('div');
//     const { default: _ } = await import(/* webpackChunkName: "lodash" */ 'lodash');
    
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    
//     return element;
// }

// getComponent().then(component => {
//     document.body.appendChild(component);
// });

// Render main app
ReactDOM.render(<App/>, document.getElementById('root'));