import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Empresa from '../components/Empresa';
import Inicio from '../components/Inicio';
import Proyectos from '../components/Proyectos';
import Servicios from '../components/Servicios';
import NoEncontrado from '../components/shared/NoEncontrado';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
      <Route exact path="/" component={Inicio} />
      <Route exact path="/empresa" component={Empresa} />
      <Route exact path="/servicios" component={Servicios} />
      <Route exact path="/proyectos" component={Proyectos} />
      <Route component={NoEncontrado} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
