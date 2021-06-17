import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './styles/estilo.css';


class CambioContrasenia extends React.Component {
    render() {
        return (
            <section>
                <div className="container">
                    <h3>Cambio de Contraseña</h3>
                    <br></br>
                    <table >
                        <tr>
                            <td >
                                <label for="correo" class="label">Correo
                                <span className="text-danger"> *</span> </label>
                            </td>
                                <td >
                                <input type="text"  id="correo"></input>
                                <div id="notaEmail">Ingrese su correo asociado a la cuenta</div>
                         
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" >
                                <input type="submit" className="btn btn-primary" value="Enviar Código" id="btn_EnviarCod"></input>
                            </td>
                        </tr>
                        <tr>
                            <td >
                                <label for="nombre" className="label">Ingresar Código
                                <span className="text-danger"> *</span> </label>
                            </td>
                            <td >
                                <input type="text"  id="ingresarCod"></input>
                            </td>
                        </tr>
                        <tr>
                            <td >
                                <label for="nombre" className="label">Contraseña Anterior</label>
                            </td>
                            <td >
                                <input type="text"  id="conAnterior"></input>
                            </td>
                        </tr>
                        <tr>
                            <td  >
                                <label for="nombre" className="label">Nueva Contraseña
                                <span className="text-danger"> *</span> </label>
                            </td>
                            <td >
                                <input type="text"  id="nuevaCon"></input>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2"  >
                                <input type="submit" className="btn btn-primary" value="Guardar" id="btn_GuardarCon"></input>
                            </td>
                        </tr>
                    </table>
                </div> 
            </section>
            
        );
    }
}
export default CambioContrasenia;