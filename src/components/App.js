
import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Index from '../pages/Index.js';
import Administrador from '../pages/Administrador';

function App() {
  return (
    <BrowserRouter>
    <Switch>
        <Route exact path="/inicio" component={Index}/>
        <Route exact path="/administrador" component={Administrador}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;