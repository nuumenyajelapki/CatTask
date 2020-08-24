import React from 'react';
import './App.css';
import './index.css'
import Card from './components/Card'

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="section-txt">
          <h1>Ты сегодня покормил кота?</h1>
        </div>
        <div className="section-cards">
          <Card secondLine="с фуа-гра" offer="10 порций мыш в подарок" weight="0,5" type="1" disabled="false"/>
          <Card secondLine="с рыбой" offer="40 порций 2 мыши в подарок" weight="2" type="2" disabled="false"/>
          <Card secondLine="с курой" offer="100 порций 5 мышей в подарок заказчик доволен" weight="5" type="3" disabled="true"/>
        </div>
      </div>
    </div>
  );
}

export default App;
