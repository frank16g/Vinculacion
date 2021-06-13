import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
//import './styles/estilo.css';

class Contactos extends React.Component{
    render(){
        return(
            <section id="contactos">
              <div class="contenido-seccion">
              
                  <div class="container">
                          <div class="row">
                              <div class="col-sm-12">
                              <h1 class="display-2">Contáctanos</h1>
        
                              <div class="card mb-3">
                                  <div class="card-body">
                                      <h5 class="card-title">Horario de Atención</h5>
                                      <p class="card-text"> correo numeros </p>
                                  </div>
                                  </div>
                              </div>
                          </div>
                  </div>
              </div>
          </section>
        );
    }
}

export default Contactos;