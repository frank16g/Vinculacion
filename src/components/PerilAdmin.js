import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class PerfilAdmin extends React.Component {
    render() {
        return (

            <body>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a class="navbar-brand" href="../administrador">Inicio</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="administrador.html"> Lista Integrantes <span class="sr-only">(current)</span></a>
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
                    </div>
                </nav>
                <section>
                    <div className="container">
                        <div className="form">
                            <h3>Datos Personales:</h3>
                            <br />
                            <table style={{ width: '100%' }}>
                                <tr>
                                    <td style={{ width: '10%', textAlign: 'right' }}>
                                        <label for="cedula" class="label">Cédula
                                            <span class="text-danger"> *</span> </label>
                                    </td>
                                    <td style={{ width: '60%' }}>
                                        <input type="text" style={{ width: '70%' }} id="cedula" />
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '10%', textAlign: 'right' }}>
                                        <label for="nombre" class="label">Nombre
                                            <span class="text-danger"> *</span> </label>
                                    </td>
                                    <td style={{ width: '60%' }}>
                                        <input type="text" style={{ width: '70%' }} id="nombre" />
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '10%', textAlign: 'right' }}>
                                        <label for="apellido" class="label">Apellido
                                            <span class="text-danger"> *</span> </label>
                                    </td>
                                    <td style={{ width: '60%' }}>
                                        <input type="text" style={{ width: '70%' }} id="apellido" />
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '10%', textAlign: 'right' }}>
                                        <label for="correo" class="label">Correo
                                            <span class="text-danger"> *</span> </label>
                                    </td>
                                    <td style={{ width: '60%' }}>
                                        <input type="text" style={{ width: '70%' }} id="correo" />
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '10%', textAlign: 'right' }}>
                                        <label for="celular" class="label">Celular
                                            <span class="text-danger"> *</span> </label>
                                    </td>
                                    <td style={{ width: '60%' }}>
                                        <input type="text" style={{ width: '70%' }} id="celular" />
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '10%', textAlign: 'right' }}>
                                        <label for="fechaNacimiento" class="label">Fecha de Nacimiento
                                            <span class="text-danger"> *</span> </label>
                                    </td>
                                    <td style={{ width: '60%' }}>
                                        <input type="date" style={{ width: '70%', paddingLeft: '10px' }} id="fechaNacimiento" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>

                                    </td>
                                    <td style={{ width: '60%', textAlign: 'left' }}>
                                        <a id="clave" href="cambioContraseña.html" class="text-primary">Cambiar contraseña</a>
                                    </td>
                                </tr>
                            </table>
                            <br />
                            <h3>Datos Profesionales:</h3>
                            <br />
                            <table style={{ width: '100%'}}>
                                <tr>
                                    <td style={{ width: '10%', textAlign: 'right' }}>
                                        <label for="profesion" class="label">Profesión
                                            <span class="text-danger"> *</span> </label>
                                    </td>
                                    <td style={{ width: '60%'}}>
                                        <input type="text" style={{ width: '70%'}} id="profesion" />
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '10%', textAlign: 'right' }}>
                                        <label for="empresa" class="label">Empresa
                                            <span class="text-danger"> *</span> </label>
                                    </td>
                                    <td style={{ width: '60%' }}>
                                        <input type="text" style={{ width: '70%'}} id="empresa" />
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '10%', textAlign: 'right' }}>
                                        <label for="cargo" class="label">Cargo de la empresa
                                            <span class="text-danger"> *</span> </label>
                                    </td>
                                    <td style={{ width: '60%'}}>
                                        <input type="text" style={{ width: '70%'}} id="cargo" />
                                    </td>
                                </tr>
                            </table>
                            <br />
                            <h3>Cursos Scouts:</h3>
                            <table style={{ width: '75%'}}>
                                <tr>
                                    <td>
                                        <textarea id="cursos" style={{ width: '100%'}}></textarea>
                                    </td>
                                </tr>
                            </table>
                            <br />
                            <hr />
                            <input type="submit" class="btn btn-primary" value="Guardar" id="btn_Guardar" />
                        </div>
                    </div>
                </section>
            </body >

        );
    }
}

export default PerfilAdmin;