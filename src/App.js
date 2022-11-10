import React, { useState } from 'react'
import { Landing } from './components/Landing';
import {  Login } from './components/Login';
import './index.css';
import { Location } from './components/Location';
import { Follow } from './components/Follow';
import Intro from './components/Intro';

export const App = () => {

  const [view, setview] = useState("intro")
  const handleView = (value) => {
    setview(value)
  }

  console.log(handleView)
  return (
    <>
    {(view === "intro" &&  <Intro handleView= {handleView}/> )}
    {(view === "login" &&  <Login handleView= {handleView}/> )}
    {(view === "landing") && <Landing handleView= {handleView} />}
    {(view === "location") && <Location handleView= {handleView}/>}
    {(view === "follow") && <Follow/>}
    </>

  )
}

