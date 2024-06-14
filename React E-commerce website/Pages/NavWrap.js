import React, { Fragment } from 'react'
import NavBar from '../Layout/NavBar'

const NavWrap = (props) => {
  return (
    <Fragment>
        <header>
        <NavBar onShow={props.onShow}/>
        </header>
        <main> {props.children} </main>
    </Fragment>
  )
}

export default NavWrap 
