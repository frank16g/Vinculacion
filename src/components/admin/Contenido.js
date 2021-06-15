import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Modal from 'react-modal';

function Contenido() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <section id="inicio">
      <div className="contenido-seccion">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Grupo dirigente</th>
              <th scope="col">Subgrupo dirigente</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="col">Manada</th>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Johana Molina</td>
              <td>Manada</td>
              <td></td>
              <td>
                <a href="adminIntegrantes.html"><button type="submit" className="btn btn-primary" >Lista Integrantes</button> </a>
                <button type="submit" className="btn btn-info" variant="primary" onClick={() => setModalIsOpen(true)}>Modificar rol</button>
                <a href="adminperfilIntegrante.html"><button type="button" className="btn btn-light">Perfil </button> </a>
              </td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Irma Guerrero</td>
              <td>Manada</td>
              <td>Lobo Pata tierna</td>
              <td>
                <a href="adminIntegrantes.html"><button type="submit" className="btn btn-primary">Lista Integrantes</button> </a>
                <button type="submit" className="btn btn-info" variant="primary" onClick={() => setModalIsOpen(true)}>Modificar rol</button>
                <a href="adminperfilIntegrante.html"><button type="button" className="btn btn-light">Perfil </button> </a>
              </td>
            </tr>
            <tr>
              <th scope="col">Unidad Scout</th>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Tatiana Nolivos</td>
              <td>Unidad Scout</td>
              <td></td>
              <td>
                <a href="adminIntegrantes.html"><button type="submit" className="btn btn-primary" >Lista Integrantes</button> </a>
                <button type="submit" className="btn btn-info" variant="primary" onClick={() => setModalIsOpen(true)}>Modificar rol</button>
                <a href="adminperfilIntegrante.html"><button type="button" className="btn btn-light">Perfil </button> </a>
              </td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Luis López</td>
              <td>Unidad Scout</td>
              <td>Pista</td>
              <td>
                <a href="adminIntegrantes.html"><button type="submit" className="btn btn-primary">Lista Integrantes</button> </a>
                <button type="submit" data-toggle="modal" data-target="#modalActividades" className="btn btn-info" onClick={() => setModalIsOpen(true)}>Modificar rol</button>
                <a href="adminperfilIntegrante.html"><button type="button" className="btn btn-light">Perfil </button> </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <Modal isOpen={modalIsOpen}>
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Actividades Destacables</h4>
              <button type="button" className="close" data-dismiss="modal">&times;</button>
            </div>
            <div className="modal-body">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Nombre Integrante</h5>
                  <p className="card-text">Rol actual: ------</p>
                  <p className="card-text">
                    <select className="custom-select" id="listaActividadesD">
                      <option selected>Seleccione</option>
                      <option value="1">Subjefe de Grupo</option>
                      <option value="2">Dirigente Manada</option>
                      <option value="3">Lobo Pata tierna</option>
                      <option value="4">Lobo Saltador</option>
                      <option value="5">Lobo Cazador</option>
                      <option value="6">Dirigente Unidad Scout</option>
                      <option value="7">Pista</option>
                      <option value="8">Rumbo</option>
                      <option value="9">Senda</option>
                      <option value="10">Travesía</option>
                      <option value="11">Dirigente Comunidad de caminantes</option>
                      <option value="12">Búsqueda</option>
                      <option value="13">Encuentro</option>
                      <option value="14">Desafío</option>
                      <option value="15">Dirigente Comunidad Rover</option>
                      <option value="16">Visión</option>
                      <option value="17">Proyección</option>
                      <option value="18">Gestión</option>
                      <option value="19">Gestión</option>
                      <option value="20">Misión</option>
                    </select>
                  </p>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal" onClick={() => setModalIsOpen(false)}>Cerrar</button>
              <button type="button" className="btn btn-primary">Guardar Cambios</button>
            </div>
          </div>
        </div>
      </Modal>

    </section >
  );
}

export default Contenido;

