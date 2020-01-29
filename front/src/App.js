import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Accueil from './pages/Accueil'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Accueil} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
