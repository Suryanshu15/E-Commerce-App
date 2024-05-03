// import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ( {children}) => {
  return (
    <div>
      <Navbar />

      {/* <div className="container py-3">
      
      <Outlet />
      </div> */}
      <main style={{ minHeight: "90vh" }}>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout