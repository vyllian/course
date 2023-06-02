import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import './style.css';
import App from './App'

const app=ReactDOMClient.createRoot(document.getElementById("app"))
app.render(<App/>)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

