import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './styles/estilo.css';
import './styles/bootstrap.css';


class AdminIntegrantes extends React.Component {
  render() {
    return (
        <section id="inicio">
            <div className="contenido-seccion">                 
                
                    <table className="table table-hover">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Fecha</th>
                            <th scope="col">Acciones</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Nombre Integrante</td>
                            <td>Fecha Ingreso</td>
                            <td>
                              <a href="adminperfilIntegrante.html"><button type="submit" className="btn btn-info">Información</button> </a>
                                  
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Nombre Integrante</td>
                            <td>Fecha Ingreso</td>
                            <td>
                                <button type="button" className="btn btn-info">Información</button>
                                
                            </td>
                          </tr>
                        </tbody>
                      </table>
                
        </div>

        </section>

    );
  }
}

export default AdminIntegrantes;