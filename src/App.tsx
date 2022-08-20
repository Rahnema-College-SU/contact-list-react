import React from 'react';
import { BrowserRouter ,Route, Routes } from 'react-router-dom';

// import logo from './logo.svg';
import './App.css';
import LoginPage from './Login';
import ContactListPage from './ContactList';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
          <Routes>

            <Route path="/login" element={<LoginPage />}/>
            <Route path="/contactListPage" element={<ContactListPage />}/>

          </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;