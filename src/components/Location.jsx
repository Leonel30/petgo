/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import { Header } from './Header'

export const Location = ({handleView}) => {
     
  return (
    <div className="container-location">
        <Header title ={"Donde nos encuentras"}/>
        <br></br>
      {/*   <br></br>
        <br></br> */}
         <div className="container-btn-location">
                <button onClick={(e)=>
                 {
                  e.preventDefault();
                  handleView("landing")
                  console.log("entrando a landing")}} 
                  className="btn-location">Regresar</button>
        </div>
        <h6>Esta es nuestra zona de operación</h6>
        <br></br>
        <div className="donde-estamos"></div>
        <br></br>
     {/*    <iframe id="map" src="https://www.google.com/maps/d/embed?mid=1MUisAMw0kjPaEpHzBRAHQeTadipfsZo&hl=es&ehbc=2E312F" width="640" height="480"></iframe> */}
    </div>
  )
}
