import React from 'react'
import { NavMenu } from './navbar'
import { Footer } from './footer'

export const Layout = ({children}) => {
  return (
    <>
        <NavMenu/>
        {children}
        <Footer/>
    </>
  )
}
