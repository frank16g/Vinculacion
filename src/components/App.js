
import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Index from '../pages/Index.js';

import Administrador from '../pages/Administrador';

import Login from '../pages/LoginPage';
import AdminIntegrantes from '../pages/AdminIntegrantesPage';

function App() {
  return (
    <BrowserRouter>
    <Switch>
        <Route exact path="/inicio" component={Index}/>

        <Route exact path="/administrador" component={Administrador}/>

        <Route exact path="/login" component={Login}/>

        <Route exact path="/adminIntegrantes" component={AdminIntegrantes}/>

    </Switch>
    </BrowserRouter>
  );
}

export default App;