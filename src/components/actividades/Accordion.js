import React from 'react';

import AccordionItem from './AccordionItem';
import './estilo.css';

class Accordion extends React.Component {
    render() {

        return (
            <div className="accordion">
                {this.props.hiddenTexts.map((hiddenText) => <AccordionItem key={hiddenText.label} hiddenText={hiddenText} />)}
            </div>
        );
    }
}



export default Accordion;