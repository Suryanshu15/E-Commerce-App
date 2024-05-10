import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layouts/Layout'
import Home from './pages/Home' 
import Category from './pages/Category' 
import Login from './pages/Login' 
import Admin from './pages/Admin' 
import Cart from './pages/Cart' 
// import About from './pages/About' 
// import Policy from './pages/Policy' 
import PageNotFound from './pages/PageNotFound' 

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
 const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/home", element: <Home />}, 
      { path: "/category", element: <Category />}, 
      // { path: "/about", element: <About />}, 
      // { path: "/policy", element: <Policy />}, 
      { path: "/login", element: <Login />}, 
      { path: "/admin", element: <Admin />}, 
      { path: "/cart", element: <Cart />}, 
      { path: "*", element: <PageNotFound />}, 

      // { path: "/addproduct", element: <AddProduct />},
      // { path: "/productdetails/:id", element: <ProductDetails />},
    ]
  }
 ])

  return <RouterProvider router={router} />
}

export default App