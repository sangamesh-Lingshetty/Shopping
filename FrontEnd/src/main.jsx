import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css'
import SignUp from './Components/SignUp.jsx';
import Bag from './Components/Bag.jsx';
import Container from './Components/Container.jsx';
import Summary from './Components/Summary.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "bag",
        element: <Bag />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      
      {
        path: "app",
        element: <Container />,
      },
     
    ],
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

      <RouterProvider router={router} />
  
  </React.StrictMode>
)
