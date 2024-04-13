import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import  classes from './DummyWelcome.module.css'

const DummyWelcome = () => {
  const history= useHistory()

  const profileHandler=()=> {
    history.push("/profile")


  }

  return (
    <div className={classes.backImage}>
      <h1>Welcome to Expense Tracker...!</h1>
      <h3>Your user profile is incomplete</h3><button onClick={profileHandler} className={classes.button}>COMPLETE NOW</button>

    </div>
  )
}

export default DummyWelcome
