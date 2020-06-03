// import React from 'react';
// import ReactDOM from 'react-dom';

// import App from './app/App';

// const App = () => <p>hello there</p>

// ReactDOM.render(<App />, document.getElementById('react'));

const node = document.getElementById('react')
const textNode = document.createTextNode('hello world')

node.appendChild(textNode)
