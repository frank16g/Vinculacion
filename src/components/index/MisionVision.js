import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
//import './styles/estilo.css';

class MisionVision extends React.Component {
  render() {
    return (
        <section id="mision">
        <div className="contenido-seccion">
            <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                        <h1 className="display-2">Misión Visión</h1>
                        <div className="card mb-3">
                            <div className="card-body">
                                <h5 className="card-title">Misión</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            </div>
                            <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Visión</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
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

export default MisionVision;