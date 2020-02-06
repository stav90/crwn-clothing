import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepages/homepage.component';
import './App.css';
import './pages/homepages/homepage.styles.scss';
import ShopPage from './pages/shop/shop.component';



function App() {
  return (
    <div >
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />    
      </Switch>
    
    </div>
  );
}

export default App;
