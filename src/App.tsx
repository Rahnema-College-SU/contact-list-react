import React from 'react';
import { Route, Routes } from 'react-router-dom';

// import logo from './logo.svg';
import './App.css';
import LoginPage from './Login';
import ContactListPage from './ContactList';

function App() {
  return (
    <div className="App">

        {/* <LoginPage/> */}

        <ContactListPage/>

        {/* <Routes>

          <Route path="/Login">
            <LoginPage />
          </Route>

          <Route path="/ContactListPage">
            <ContactListPage />
          </Route>

        </Routes> */}

    </div>
  );
}

export default App;