import React, { FC } from 'react';
import ReactDOM from 'react-dom';

const render = () => {
    const Shell = require('./pages/Shell/Shell').default;

    let elem = document.getElementById("root");       
    
    const Root: FC = () => (<div>Hi!</div>);
    ReactDOM.render(<Shell />, elem);
};

render();

if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./pages/Shell/Shell', render);
}