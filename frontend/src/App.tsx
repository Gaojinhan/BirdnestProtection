import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import InfoList from './components/List/InfoList';
import { useState, useEffect } from 'react';
import client from './services/axiosConfigurer';

function App() {

  const [violations, setviolations] = useState([])

useEffect(() => {
  /* client.get('/violations').then((response) => {
    const ws = new WebSocket('ws://localhost:8081');
    ws.onmessage = function (event) {
    try {
        console.log("I receive something at least.",event.data);
        setviolations(JSON.parse(event.data));
    } catch (err) {
        console.log(err);
    }
  };
    //clean up function
    return () => ws.close();
    
  }); */
  
  /* client.get('/violations').then((response) => {
    setviolations(response.data);
  }); */
  const timer = setInterval(() => {
    client.get('/violations').then((response) => {
      setviolations(response.data);
    });
  }, 5000);
  return () => clearInterval(timer);
}, []);


  return (
    <div className="App">
      <Header 
        title={"Violations Tracker"}
      />
      {violations.length > 0 ? (
        <InfoList 
        violations={violations}
      />
      ) : (
        'No violations at the moment'
      )}
      
    </div>
  );
}

export default App;
