// src/App.js
import React from 'react';
import './App.css';
import RegistrationForm from './components/RegistrationForm';
import Table from './components/Table';

function App() {
  return (
    <div className="flex items-center justify-around">
      <RegistrationForm />
      <Table/>
    </div>
  );
}

export default App;