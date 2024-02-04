/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import AuntLayout from './Components/Layout/AuntLayout.jsx';

const router = createBrowserRouter([
  {
    path: "login",
    element: <AuntLayout type="login" />,
  },
  {
    path: "register",
    element: <AuntLayout type="register" />,
  },
  {
    path: "app",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
