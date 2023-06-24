import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import App from './pages/App'
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

