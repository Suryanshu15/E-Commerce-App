// import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { FaShoppingBag } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="http://localhost:5173/">
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarToggleDemo01">
      <Link to="/" className="navbar-brand">
        <FaShoppingBag /> SHOPIFY
      </Link>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" to="/home">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/category">Category</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/admin">Admin</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/cart">Cart(<FaShoppingCart />)</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar