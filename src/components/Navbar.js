import React from 'react';

//import confLogo from '../images/badge-header.svg';
//import './styles/bootstrap.css';
import './styles/estilo.css';

class Navbar extends React.Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Menú</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" a href="#inicio">Inicio <span class="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" a href="#mision">Mision/Vision</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" a href="#informacionAdicional">Información del Grupo</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" a href="#contactos">Contáctanos</a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0" action="login.html" method="post">
          <li className="nav-item">
              <button type="submit" className="btn btn-primary" >Iniciar Sesión</button>
            </li>
          </form>
        </div>
      </nav>
    );
  }
}

export default Navbar;