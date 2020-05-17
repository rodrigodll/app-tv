import React from 'react';
import Card from './component/card';
import logoTocom from './svg/tocomsat_logo.png'
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App__header">
        <img src={logoTocom} alt=""/>
      </header>

      <h2 className="App__title">Aplicativos</h2>
      <Card/>

    </div>
  );
}

export default App;