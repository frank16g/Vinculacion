import React from 'react';

//import './styles/BadgeNew.css';
//import header from '../images/badge-header.svg';
import Navbar from '../components/Navbar';
import MisionVision from '../components/MisionVision';
//import Badge from '../components/Badge';

class Index extends React.Component {
  render() {
    return (
        <div>
        <Navbar />

        <div className="container">
          <div className="row">
            <div className="col">
              <MisionVision />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;