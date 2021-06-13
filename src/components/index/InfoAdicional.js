import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
//import './styles/estilo.css';

class InfoAdicional extends React.Component{
    render(){
        return(
            <section id="informacionAdicional">
            <div class="contenido-seccion">
            
                <div class="container">
                        <div class="row">
                            <div class="col-sm-12">
                            <h1 class="display-2">Información Adicional</h1>
    
                            <div class="card mb-3">
                                <div class="card-body">
                                    <h5 class="card-title">Horario de Actividades</h5>
                                    <p class="card-text">Los horarios dentro de la sede son de 15:00 a 18:00, y fuera de la sede  será asignado por el dirigente a cargo. <br></br> La puntualidad será obligatoria en todas las actividades. Es responsabilidad de cada padre de familia el cumplir con los horarios propuestos para precautelar la seguridad de los beneficiarios. </p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                                </div>
                                <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Vestimenta</h5>
                                    <p class="card-text">
                                    El uniforme reglamentario diario consta de camisa scout, pañoleta de grupo, insignias y pantalón azul cargo o jean azul llano sin adornos, apliques o rasgados, y zapatos deportivos o de trecking.
                                    <br /> 
                                    El uniforme reglamentario formal consta de camisa scout, pañoleta de grupo, pantalón azul marino de tela, cinturón y zapatos negros para los hombres, y para las mujeres falda azul marino de tela con corte en A sobre la rodilla, medias nylon azul marino y zapatos negros de taco medio.
                                    <br />
                                    El uniforme alterno puede ser la camiseta tipo polo de la ASE, las camisetas de grupo y eventos scout.
                                    <br /> 
                                    El uso del uniforme reglamentario será obligatorio, tanto en las reuniones en la sede, como en las actividades fuera de la sede. En las formaciones, eventos formales, y actos protocolarios, será usada obligatoriamente la camisa scout y la pañoleta de grupo. El uniforme alterno será utilizado únicamente en actividades de aventura fuera de la sede.
                                    <br /> 
                                    Los miembros nuevos deberán adquirir el uniforme (camisa scout y pañoleta), dentro de los dos meses de su ingreso, hasta entonces usarán una camisa o camiseta blanca y pantalón jean, según la actividad.
                                    <br /> 
                                    La vestimenta y el calzado deberá ser apropiado para las actividades físicas que se llevan a cabo en el grupo.
    
                                    </p>
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

export default InfoAdicional;