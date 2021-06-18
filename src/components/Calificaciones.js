import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../images/logro.png';
class Calificaciones extends React.Component {
    render() {
        return (
            <html>

                <head>
                    <meta charset="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <title>Calificaciones</title>
                    <link rel="stylesheet" href="styles/bootstrap.css" />
                </head>

                <body>
                    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                        <a class="navbar-brand" href="tutores.html">Inicio</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mr-auto">
                                <li class="nav-item">
                                    <a class="nav-link" href="tutores.html"> Lista Scouts <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="actividades.html">Actividades</a>
                                </li>
                                <li class="nav-item active">
                                    <a class="nav-link" href="calificaciones.html">Calificaciones</a>
                                </li>
                            </ul>
                            <form class="form-inline my-2 my-lg-0" action="perfil.html" method="post">
                                <li class="nav-item">
                                    <button type="submit" class="btn btn-primary" >Perfil</button>
                                </li>
                            </form>
                            <form class="form-inline my-2 my-lg-0" action="login.html" method="post">
                                <li class="nav-item">
                                    <button type="submit" class="btn btn-primary" >Salir</button>
                                </li>
                            </form>
                            <form class="form-inline my-2 my-lg-0" action="login.html" method="post">
                                <li class="nav-item">
                                    <button type="submit" class="btn btn-primary" >Salir</button>
                                </li>
                            </form>
                        </div>
                    </nav>

                    <section id="inicio">
                        <div class="contenido-seccion">
                            <div class="card">
                                <table class="table table-hover">
                                    <tr>
                                        <td>
                                            <input type="search" autofocus placeholder="Criterio de búsqueda" value="" name="q" class="form-control" aria-label="Criterio de búsqueda" />
                                        </td>
                                        <td>
                                            <button class="btn btn-secondary ml-3" type="submit">Buscar</button>
                                        </td>
                                    </tr>
                                </table>
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Integrantes</th>
                                            <th scope="col">Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td >Nombre Integrante 1</td>
                                            <td>
                                                <button type="button" class="btn btn-info" data-toggle="modal" data-target="#modalActividades">Actividades Destacables</button>
                                                <button type="button" class="btn btn-success" data-toggle="modal" data-target="#modalEspecialidades">Especialidades</button>
                                                <a href="#"><img src={logo} width="25px" height="25px" title="Insignias de Merito" data-toggle="modal" data-target="#modalLogros" /></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Nombre Integrante 2</td>
                                            <td>
                                                <button type="button" class="btn btn-info" data-toggle="modal" data-target="#modalActividades">Actividades Destacables</button>
                                                <button type="button" class="btn btn-success" data-toggle="modal" data-target="#modalEspecialidades">Especialidades</button>
                                                <a href="#"><img src={logo} width="25px" height="25px" title="Insignias de Merito" data-toggle="modal" data-target="#modalLogros" /></a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    <div id="modalEspecialidades" class="modal fade" role="dialog">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h4 class="modal-title">Especialidades</h4>
                                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                                </div>
                                <div class="modal-body">
                                    <div id="accordion2">
                                        <div class="card">
                                            <div class="card-header" id="headingSeven">
                                                <h5 class="mb-0">
                                                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                                        Arte
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapseSeven" class="collapse" aria-labelledby="headingSeven" data-parent="#accordion2">
                                                <div class="card-body">
                                                    <table class="table">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">Nombre actividad</th>
                                                                <th scope="col">Fecha de Cumplimiento</th>
                                                                <th scope="col">Calificación</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td scope="row">Arte</td>
                                                                <td><input type="date" class="form-control" placeholder="Fecha" aria-label="Fecha" aria-describedby="basic-addon1" /></td>
                                                                <td><input type="number" style={{ width: '155px'}} min="0" max="10" /></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="card-header" id="headingEight">
                                                <h5 class="mb-0">
                                                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                                        Ciencia y Tecnología
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapseEight" class="collapse" aria-labelledby="headingEight" data-parent="#accordion2">
                                                <div class="card-body">
                                                    <table class="table">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">Nombre actividad</th>
                                                                <th scope="col">Fecha de Cumplimiento</th>
                                                                <th scope="col">Calificación</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td scope="row">Ciencia y Tecnología </td>
                                                                <td><input type="date" class="form-control" placeholder="Fecha" aria-label="Fecha" aria-describedby="basic-addon1" /></td>
                                                                <td><input type="number" style={{ width: '115px', minWidth:'0',maxWidth:'10' }} /></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="card-header" id="headingNine">
                                                <h5 class="mb-0">
                                                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                                        Fe
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapseNine" class="collapse" aria-labelledby="headingNine" data-parent="#accordion2">
                                                <div class="card-body">
                                                    <table class="table">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">Nombre actividad</th>
                                                                <th scope="col">Fecha de Cumplimiento</th>
                                                                <th scope="col">Calificación</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td scope="row">Fe</td>
                                                                <td><input type="date" class="form-control" placeholder="Fecha" aria-label="Fecha" aria-describedby="basic-addon1" /></td>
                                                                <td><input type="number" style={{ width: '115px', minWidth:'0',maxWidth:'10' }} /></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="card-header" id="headingTen">
                                                <h5 class="mb-0">
                                                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                                                        Vida en la Naturaleza
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapseTen" class="collapse" aria-labelledby="headingTen" data-parent="#accordion2">
                                                <div class="card-body">
                                                    <table class="table">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">Nombre actividad</th>
                                                                <th scope="col">Fecha de Cumplimiento</th>
                                                                <th scope="col">Calificación</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td scope="row">Vida en la Naturaleza</td>
                                                                <td><input type="date" class="form-control" placeholder="Fecha" aria-label="Fecha" aria-describedby="basic-addon1" /></td>
                                                                <td><input type="number" style={{ width: '115px', minWidth:'0',maxWidth:'10' }} /></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="card-header" id="headingEleven">
                                                <h5 class="mb-0">
                                                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                                                        Servicio
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapseEleven" class="collapse" aria-labelledby="headingEleven" data-parent="#accordion2">
                                                <div class="card-body">
                                                    <table class="table">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">Nombre actividad</th>
                                                                <th scope="col">Fecha de Cumplimiento</th>
                                                                <th scope="col">Calificación</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td scope="row">Servicio </td>
                                                                <td><input type="date" class="form-control" placeholder="Fecha" aria-label="Fecha" aria-describedby="basic-addon1" /></td>
                                                                <td><input type="number" style={{ width: '115px', minWidth:'0',maxWidth:'10' }} /></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="card-header" id="headingTwelve">
                                                <h5 class="mb-0">
                                                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
                                                        Deportes
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapseTwelve" class="collapse" aria-labelledby="headingTwelve" data-parent="#accordion2">
                                                <div class="card-body">
                                                    <table class="table">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">Nombre actividad</th>
                                                                <th scope="col">Fecha de Cumplimiento</th>
                                                                <th scope="col">Calificación</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td scope="row">Deportes </td>
                                                                <td><input type="date" class="form-control" placeholder="Fecha" aria-label="Fecha" aria-describedby="basic-addon1" /></td>
                                                                <td><input type="number" style={{ width: '115px', minWidth:'0',maxWidth:'10' }} /></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <input type="checkbox" /><label>Logro Cumplido</label>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                                    <button type="button" class="btn btn-primary">Guardar Cambios</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="modalLogros" class="modal fullscreen-modal fade" role="dialog">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h4 class="modal-title">Insignias de Mérito</h4><img src="img/logro.png" width="25px" height="25px" />
                                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                                </div>
                                <div class="modal-body">
                                    <table class="table" >
                                        <thead>
                                            <tr>
                                                <th scope="col">Insignia</th>
                                                <th scope="col">Fecha de Obtención del Mérito</th>
                                                <th scope="col">Observaciones</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td scope="row">Mérito1</td>
                                                <td><input type="date" class="form-control" placeholder="Fecha" aria-label="Fecha" aria-describedby="basic-addon1" /></td>
                                                <td><input type="input" style={{ width: '115px'}} /></td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                                    <button type="button" class="btn btn-primary">Guardar Cambios</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </body>
                <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
            </html>
        );
    }
}

export default Calificaciones;