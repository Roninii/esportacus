import React from 'react';
import './App.css';

import Nav from './components/nav/Nav';
import Home from './views/Home';

const App = () => (
  <div className="App">
    <Nav />
    <Home />
  </div>
);

export default App;
