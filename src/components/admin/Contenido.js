import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Contenido extends Component{
    render(){
        return(
            
            <div class="contenido-seccion">                 
                    <table class="table table-hover">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Grupo dirigente</th>
                            <th scope="col">Subgrupo dirigente</th>
                            <th scope="col">Acciones</th>
                          </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="col">Manada</th>
                            </tr>
                          <tr>
                            <th scope="row">1</th>
                            <td>Johana Molina</td>
                            <td>Manada</td>
                            <td></td>
                            <td>
                              <a href="adminIntegrantes.html"><button type="submit" class="btn btn-primary" >Lista Integrantes</button> </a>
                              <button type="submit" class="btn btn-info" data-toggle="modal" data-target="#modalActividades">Modificar rol</button>
                                  <a href="adminperfilIntegrante.html"><button type="button" class="btn btn-light">Perfil </button> </a>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">1</th>
                            <td>Irma Guerrero</td>
                            <td>Manada</td>
                            <td>Lobo Pata tierna</td>
                            <td>
                                <a href="adminIntegrantes.html"><button type="submit" class="btn btn-primary">Lista Integrantes</button> </a>
                               <button type="submit" class="btn btn-info" data-toggle="modal" data-target="#modalActividades">Modificar rol</button>
                                    <a href="adminperfilIntegrante.html"><button type="button" class="btn btn-light">Perfil </button> </a>
                              </td>
                          </tr>
                          <tr>
                            <th scope="col">Unidad Scout</th>
                        </tr>
                          <tr>
                            <th scope="row">1</th>
                            <td>Tatiana Nolivos</td>
                            <td>Unidad Scout</td>
                            <td></td>
                            <td>
                                <a href="adminIntegrantes.html"><button type="submit" class="btn btn-primary" >Lista Integrantes</button> </a>
                                <button type="submit" class="btn btn-info" data-toggle="modal" data-target="#modalActividades">Modificar rol</button>
                                    <a href="adminperfilIntegrante.html"><button type="button" class="btn btn-light">Perfil </button> </a>
                              </td>
                          </tr>
                          <tr>
                            <th scope="row">1</th>
                            <td>Luis López</td>
                            <td>Unidad Scout</td>
                            <td>Pista</td>
                            <td>
                                <a href="adminIntegrantes.html"><button type="submit" class="btn btn-primary">Lista Integrantes</button> </a>
                                <button type="submit" data-toggle="modal" data-target="#modalActividades" class="btn btn-info">Modificar rol</button>
                                    <a href="adminperfilIntegrante.html"><button type="button" class="btn btn-light">Perfil </button> </a>
                              </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
        );
    }
}

export default Contenido;