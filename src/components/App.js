
import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Index from '../pages/Index.js';

import Administrador from '../pages/Administrador';

import Login from '../pages/LoginPage';
import AdminIntegrantes from '../pages/AdminIntegrantesPage';
import Tutores from '../pages/TutoresPage';
import CambioContrasenia from './CambioContrasenia.js';
//qq
function App() {
  return (
    <BrowserRouter>
    <Switch>
        <Route exact path="/inicio" component={Index}/>

        <Route exact path="/administrador" component={Administrador}/>

        <Route exact path="/login" component={Login}/>

        <Route exact path="/adminIntegrantes" component={AdminIntegrantes}/>
       
        <Route exact path="/tutores" component={Tutores}/>
        
        <Route exact path="/cambioContrasenia" component={CambioContrasenia}/>

    </Switch>
    </BrowserRouter>
  );
}

export default App;