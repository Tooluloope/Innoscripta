import React from 'react';
import './App.css';
import NavBar from "./components/navbar/navbar";
import HomePage from "./page/home";
import { Store } from "./context/cart/cart";
import { User } from "./context/user/user";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Order from "./page/orders";

function App() {

  
  return (
    <Router>
      <Store>
      <User>
        <NavBar />
        <Switch>
          <Route exact path='/orders'>
            <Order/>
          </Route>
          <Route exact path=''>
            <HomePage/>
          </Route>
        </Switch>
        
      
      </User>
      </Store>
    </Router>
    
  );
}

export default App;
