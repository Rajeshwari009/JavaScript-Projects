import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../Layout/NavBar'

const Root = () => {
  return (
   <>
   <NavBar/>
   <Outlet/>
   </>
  )
}

export default Root
