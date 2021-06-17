
import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Index from '../pages/Index.js';

import Administrador from '../pages/Administrador';

import Login from '../pages/LoginPage';
import AdminIntegrantes from '../pages/AdminIntegrantesPage';

import Actividades from '../pages/Actividades.js';

function App() {
  return (
    <BrowserRouter>
    <Switch>
        <Route exact path="/inicio" component={Index}/>

        <Route exact path="/administrador" component={Administrador}/>

        <Route exact path="/login" component={Login}/>

        <Route exact path="/adminIntegrantes" component={AdminIntegrantes}/>

        <Route exact path="/actividades" component={Actividades}/>

    </Switch>
    </BrowserRouter>
  );
}

export default App;