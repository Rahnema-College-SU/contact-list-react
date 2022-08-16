import React from 'react';
import logo from './logo.svg';
import './App.css';
import Loginpage from './Login';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Loginpage/>
    </div>
  );
}

export default App;