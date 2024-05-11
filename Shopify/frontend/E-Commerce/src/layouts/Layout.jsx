// import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import { Helmet } from 'react-helmet'
import { Toaster } from 'react-hot-toast'

const Layout = ({children, title, description, keywords, author}) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Navbar />      
      <Outlet />
      
      <main style={{ minHeight: "7vh" }}>
        <Toaster />
        {children}
      </main>
      <Footer />
    </div>
  )
}

Layout.defaultProps = {
  title: 'Ecommerce App',
  description: 'mern stack project',
  keywords: 'ecommerce, react, mern, mongodb, express, node',
  author: 'Rahul Kumar'
}

export default Layout