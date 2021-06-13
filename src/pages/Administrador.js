import React, {Component} from 'react';
import Contenido from '../components/admin/Contenido';

class Administrador extends Component{
    render(){
        return(
            <div>
                <div class="card">
                    <button type="button" class="btn btn-primary">Agregar Integrante</button>
                    <Contenido />
                </div>
            </div>
        );
    }
}

export default Administrador;