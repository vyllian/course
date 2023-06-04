import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import './style.css';
import App from './pages/App'
import Gradient from './components/Gradient'
import Inspiration from './pages/Inspiration';
import Create from './pages/Create';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
        path: "inspiration",
        element: <Inspiration/>,
    },
    {
        path: "create",
        element: <Create/>,
    },
  ]);
const app=ReactDOMClient.createRoot(document.getElementById("app"))
app.render( <RouterProvider router={router} />)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

