import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './styles/estilo.css';


class Tutores extends React.Component {
    render() {
        return (
            <section id="inicio">
                <div className="contenido-seccion">
                    <div className="card">
                        <button type="button" className="btn btn-primary">Agregar Integrante</button>
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
                                        <button type="submit" className="btn btn-info">Información</button>
                                        <button type="button" className="btn btn-light">Objetivos </button>
                                    </td>    
                                </tr>

                                <tr>
                                    <th scope="row">2</th>
                                    <td>Nombre Integrante</td>
                                    <td>Fecha Ingreso</td>
                                    <td>
                                        <button type="button" className="btn btn-info">Información</button>
                                        <button type="button" className="btn btn-light">Objetivos</button>
                                </td>
                              </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            
        );
    }
}
export default Tutores;