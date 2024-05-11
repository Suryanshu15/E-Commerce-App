import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layouts/Layout'
import Home from './pages/Home' 
import Category from './pages/Category' 
import Login from './pages/Auth/Login' 
import Register from './pages/Auth/Register' 
import Admin from './pages/Admin' 
import Cart from './pages/Cart' 
import PageNotFound from './pages/PageNotFound' 

// import { ToastContainer } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'

function App() {
 const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home />}, 
      { path: "/category", element: <Category />}, 
      { path: "/login", element: <Login />}, 
      { path: "/register", element: <Register />}, 
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