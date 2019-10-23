import React from 'react';
import {Switch,Route} from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
<di><h1>Hats Page</h1></di>
);

function App() {
  return (
    <div>
      <Switch>
      <Route exact path='/' component={HomePage}></Route>
      <Route exact path='/shop/hats' component={HatsPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
