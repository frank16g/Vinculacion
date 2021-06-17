import React from 'react';

import './estilo.css';
class AccordionItem extends React.Component {

    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility,
            }
        })
    }
    render() {
        const activeStatus = this.state.visibility ? 'active' : ''
        return (
            <div>
                <div class="card">
                <button className="accordion__button" onClick={this.handleToggleVisibility}>{this.props.hiddenText.label}</button>
                <p className={`accordion__content ${activeStatus}`}>
                    {
                        <p>

                        <button className="button_o" data-toggle="collapse" href="#agregarActividad" role="button"
                          aria-expanded="false" aria-controls="agregarActividad">Agregar</button>
                        <button className="button_o" type="button" data-toggle="collapse" data-target="#modificarActividad"
                          aria-expanded="false" aria-controls="modificarActividad">Modificar</button>
                        <button className="button_o" type="button" data-toggle="collapse" data-target="#eliminarActividad"
                          aria-expanded="false" aria-controls="eliminarActividad" >Eliminar</button>
                      </p>
                    }
                </p>
                </div>
            </div>
        );
    }
}

export default AccordionItem;