import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Accueil from './pages/Accueil'
import PrivateRoute from './hoc/PrivateRoute';
import Profil from './pages/Profil';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Accueil} />
          <PrivateRoute path='/home' component={Profil} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
