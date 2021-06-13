import React from 'react';

//import './styles/BadgeNew.css';
//import header from '../images/badge-header.svg';
import Carrusel from '../components/index/Carrusel';
import Navbar from '../components/index/Navbar';
import MisionVision from '../components/index/MisionVision';
import InfoAdicional from '../components/index/InfoAdicional';
import Contactos from '../components/index/Contactos';
//import Badge from '../components/Badge';

class Index extends React.Component {
  render() {
    return (
        <div>
        <Navbar />
        <Carrusel />

        <div className="container">
          <div className="row">
            <div className="col">
              <MisionVision />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <InfoAdicional />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Contactos />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;