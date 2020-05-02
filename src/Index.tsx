import React, { FC } from 'react';
import ReactDOM from 'react-dom';

const render = () => {
    let elem = document.getElementById("root");   
    const Root: FC = () => (<div>Hi!</div>);
    ReactDOM.render(<Root />, elem);
};

render();