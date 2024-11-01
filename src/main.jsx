import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root.jsx';
import ErrorLoad from './Component/Errorloader/ErrorLoad.jsx';
import Home from './Component/Home/Home.jsx';
import Dashboard from './Component/Dashboard/Dashboard.jsx';
import Bookdetails from './Component/BookDetails/Bookdetails.jsx';
import Listedbook from './Component/Listedbook/Listedbook.jsx';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorLoad></ErrorLoad>,
    children: [
     {
      path: '/',
      element: <Home></Home>
     },
     {
      path: 'books/:bookId',
      element: <Bookdetails></Bookdetails>,
      loader: () => fetch('/booksfakedata.json')//do not load for all books in one book
     },
     {
      path: 'listedbooks',
      element: <Listedbook></Listedbook>,
      // worst way 
      loader: () => fetch('/booksfakedata.json')//do not all data for some

     },
     
     {
      path: 'dashboad',
      element: <Dashboard></Dashboard>
     }

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>,
)
