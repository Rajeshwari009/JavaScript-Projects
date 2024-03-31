import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/fontawesome.css';
import '@fortawesome/fontawesome-free/css/solid.css';
// import CartContextProvider from './Store/ CartContextProvider'
// import HomePage from './Pages/HomePage'
import Root from './Pages/Root'
import About from './Pages/About';
import Product from './Pages/Product';
import Contact from './Pages/Contact';



const router= createBrowserRouter([     
  {path:'/',
  element:<Root/>,
  errorElement:<><h1>Oops Something went wrong!</h1><h4>Try refreshing the page</h4></>,
children:[
  {path:"/" ,
   element: <App/>},
   {path:"/Product" ,
   element:<> <Product/></>},
   {path:"/About" ,
   element: <><About/></>},
   {path:"/Contact" ,
   element:<> <Contact/></>},
  

   
 
]}
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>

)
