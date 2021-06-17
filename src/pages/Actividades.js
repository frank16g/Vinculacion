import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import Accordion from '../components/actividades/Accordion';

class Actividades extends React.Component {
    render() {
        const hiddenTexts = [{
            label: 'Actividades Destacables'
        },
        {
            label: 'Especialidades'
        },
        {
            label: 'Competencias'
        },
        {
            label: 'Proyectos'
        }];
        return (
                    <Accordion hiddenTexts={hiddenTexts} />
        );
    }
}

export default Actividades;