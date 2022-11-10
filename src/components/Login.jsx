import React from "react";
import { Form } from "react-bootstrap";
import "./styles.css";
import logo from "../assets/logowithbg.jpg";
import 'animate.css'

export const Login = ({handleView}) => {
  return (
    <>
      <div className="container-login">
        <div className="animate__animated animate__fadeInDown">
        <div className="header-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="container-form-login">
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control type="email" placeholder="Ingresa tu correo" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Ingresa tu contraseña" />
            </Form.Group>
            <div className="container-btn-login">
                <button onClick={(e)=>
                 {
                  e.preventDefault();
                  handleView("landing")
                  console.log("entrando a landing")}} 
                  className="btn-login"> iniciar sesión</button>
            </div>
            <h6>¿Olvidastes tu contraseña?</h6>
            </Form>
        </div>
        <div className="footer-login">
            <p>¿No tienes cuenta? ¿Que Esperas? <b>Registrate</b> </p>
        </div>
        </div>
    </div>
    </>
  );
};
