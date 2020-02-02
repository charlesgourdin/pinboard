import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Accueil from './pages/Accueil'
import PrivateRoute from './hoc/PrivateRoute';
import Profil from './pages/Profil';
import SearchUsers from './pages/SearchUsers';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Accueil} />
          <PrivateRoute path='/home' component={Profil} />
          <PrivateRoute path='/search' component={SearchUsers} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
