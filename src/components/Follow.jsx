import React from 'react'
import { Header } from './Header'

export const Follow = () => {
  return (
    <div className="container-location">
        <Header title ={"Seguimiento en vivo"}/>
        <br></br>
        <h6>Sigue en vivo el recorrido que hará tu mascota</h6>
        <div className="donde-mascota"></div>
    </div>
  )
}
