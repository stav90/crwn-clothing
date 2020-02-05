import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepages/homepage.component';
import './App.css';
import './pages/homepages/homepage.styles.scss';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div >
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop/hats' component={HatsPage} />    
      </Switch>
    
    </div>
  );
}

export default App;
