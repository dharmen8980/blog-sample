import React from 'react'
import { NavMenu } from './navbar'
import { Footer } from './footer'

const Layout = ({children}) => {
  return (
    <>
        <NavMenu/>
        {children}
        <Footer/>
    </>
  )
}

export default Layout;