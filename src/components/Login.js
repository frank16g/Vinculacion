import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './styles/estilo.css';
import './styles/bootstrap.css';
import img1 from '../images/florgrupo.png';

class Login extends React.Component {
  render() {
    return (
        <body>
  
        <div className="wrapper fadeInDown">
        <div id="formContent">
        <div className="fadeIn first">
             <img src = {img1} id="icon" alt="User Icon"/>
        </div>
        <form action="tutores.html" method="POST">
            <input type="text" id="login" className="fadeIn second" name="login" placeholder="Usuario"></input>
            <input type="password" id="password" className="fadeIn third" name="login" placeholder="Contraseña"></input>
            <input type="submit" className="fadeIn fourth" value="Ingresar"></input>
        </form>

        <div id="formFooter">
            <a className="underlineHover" href="#">¿Olvidaste tu contraseña?</a>
        </div>
        </div>
        </div>
        </body>


    );
  }
}

export default Login;