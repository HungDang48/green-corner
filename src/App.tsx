import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/Header/Header'
import { Routes, Route } from 'react-router-dom';

import RouterPages from './routers/RouterPages';

function App() {
  return (
    <RouterPages />
  );
}

export default App;
