import React from 'react';


import AdminInt from '../components/AdminIntegrantes';


class AdminIntegrantesPage extends React.Component {
  render() {
    return (
        <div className="card">
                    <button type="button" className="btn btn-primary">Agregar Integrante</button>
              <AdminInt />
        </div>
        
          
         
        
    );
  }
}

export default AdminIntegrantesPage;