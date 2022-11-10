import React from 'react'
import { Header } from './Header';
import { Form } from 'react-bootstrap';
import headerlogo from'../assets/headerpetgo.jpg'



export const Landing = ({handleView}) => {
  return (
    <div className="container-landing">
        <Header title="Hola Carolina!" handleView = {handleView}/>
        <div className="barra-buscar">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="email" placeholder="¿Como te ayudamos?" />
        </Form.Group>
        <button className="btn-searc">
            <div></div>
        </button>
        </div>
        <div className="landing-main">
            <img src={headerlogo } alt="logo" />
        </div>
        <span className="color-act">Tienes un paseo en curso!</span>
        <div className="container-btn-follow">
                <button onClick={(e)=>
                 {
                  e.preventDefault();
                  handleView("follow")
                  console.log("entrando a landing")}} 
                  className="btn-follow">Sigue la ubicación de tu mascota</button>
        </div>
        <h6><b>Nuestros Servicios</b></h6>
        <div className="card-dog">
            <div className="card-dog-r">
            </div>
            <span>
                Haz que tu mejor amigo pase el mejor de los tiempos con nuestros paseadores en sus paseos! 
            </span>
        </div>
        <h6><b>Dale Estilo a tu mascota</b></h6>
        <div className="card-suje">
            <span> Lleva de manera segura y con el mejor estilo a tu compañero con nuestra correa retráctil
            </span>c
            <div className="card-suje-r">
            </div>
          
        </div>
    </div>
  )
}
