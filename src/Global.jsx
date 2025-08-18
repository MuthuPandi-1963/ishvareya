import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Global({children}) {
  return (
    <>
    <Navbar/>
    {children}
    <Footer/>
    </>
  )
}
