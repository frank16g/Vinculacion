import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './styles/estilo.css';


class CambioContrasenia extends React.Component {
    render() {
        return (
            <section>
                <div class="container">
                    <h3>Cambio de Contraseña</h3>
                    <br></br>
                    <table style="width: 100%;">
                        <tr>
                            <td style="width: 10%; text-align: right;">
                                <label for="correo" class="label">Correo
                                <span class="text-danger"> *</span> </label>
                            </td>
                                <td style="width: 60%;">
                                <input type="text" style="width: 70%;" id="correo"></input>
                                <div id="notaEmail">Ingrese su correo asociado a la cuenta</div>
                         
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" style="width: 60%; text-align:center;">
                                <input type="submit" class="btn btn-primary" value="Enviar Código" id="btn_EnviarCod"></input>
                            </td>
                        </tr>
                        <tr>
                            <td style="width: 10%; text-align: right;">
                                <label for="nombre" class="label">Ingresar Código
                                <span class="text-danger"> *</span> </label>
                            </td>
                            <td style="width: 60%;">
                                <input type="text" style="width: 70%;" id="ingresarCod"></input>
                            </td>
                        </tr>
                        <tr>
                            <td style="width: 10%; text-align: right;">
                                <label for="nombre" class="label">Contraseña Anterior</label>
                            </td>
                            <td style="width: 60%;">
                                <input type="text" style="width: 70%;" id="conAnterior"></input>
                            </td>
                        </tr>
                        <tr>
                            <td style="width: 10%; text-align: right;">
                                <label for="nombre" class="label">Nueva Contraseña
                                <span class="text-danger"> *</span> </label>
                            </td>
                            <td style="width: 60%;">
                                <input type="text" style="width: 70%;" id="nuevaCon"></input>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" style="width: 60%; text-align:center;">
                                <input type="submit" class="btn btn-primary" value="Guardar" id="btn_GuardarCon"></input>
                            </td>
                        </tr>
                    </table>
                </div> 
            </section>
            
        );
    }
}
export default CambioContrasenia;