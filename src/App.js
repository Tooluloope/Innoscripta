import React from 'react';
import './App.css';
import NavBar from "./components/navbar/navbar";
import HomePage from "./page/home";
import { Store } from "./context/cart/cart";
import { User } from "./context/user/user";

function App() {

  
  return (
    <Store>
    <User>
      <NavBar />
      <HomePage />
     
    </User>
    </Store>
  );
}

export default App;
