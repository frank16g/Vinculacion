import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import image from '../../images/imagen1.jpg';
//import './styles/estilo.css';

class Carrusel extends Component{
    render(){
        return(
            <section id="inicio">
                    <div id="carrusel-home" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carrusel-home" data-slide-to="0" class="active"></li>
                        <li data-target="#carrusel-home" data-slide-to="1"></li>
                        <li data-target="#carrusel-home" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner" role="listbox">
                        <div class="carousel-item active">
                        <img class="d-block w-100" src={image} alt="Imagen 1" />           
                        </div>
                        <div class="carousel-item">
                        <img class="d-block w-100" src={image} alt="Second slide" />
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carrusel-home" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carrusel-home" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                    </div>
            </section>
        );
    }
}

export default Carrusel;